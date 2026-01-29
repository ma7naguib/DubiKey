'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { CalculatorInputs, StepValidation, PaymentPreset, AnalysisResult } from './types'
import { STORAGE_KEY, DEBOUNCE_MS, INITIAL_INPUTS } from './constants'
import { toNum, calculateAnalysis } from './calculations'

export function useCalculator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [inputs, setInputs] = useState<CalculatorInputs>(INITIAL_INPUTS)
  const [isLoading, setIsLoading] = useState(true)

  // ========== PERSISTENCE: Load from localStorage ==========
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setInputs(prev => ({ ...prev, ...parsed }))
      }
    } catch {
      // Ignore errors
    }
    setIsLoading(false)
  }, [])

  // ========== PERSISTENCE: Save to localStorage (debounced) ==========
  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs))
        } catch {
          // Ignore errors
        }
      }, DEBOUNCE_MS)
      return () => clearTimeout(timeout)
    }
  }, [inputs, isLoading])

  // ========== INPUT HANDLERS ==========
  const updateInput = useCallback((field: keyof CalculatorInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }, [])

  const updateGoal = useCallback((goal: 'investment' | 'enduser') => {
    setInputs(prev => ({ ...prev, purchaseGoal: goal }))
  }, [])

  const applyPreset = useCallback((preset: PaymentPreset) => {
    setInputs(prev => ({
      ...prev,
      downPaymentPct: String(preset.down),
      duringConstructionPct: String(preset.during),
      onHandoverPct: String(preset.handover),
      postHandoverPct: String(preset.post),
    }))
  }, [])

  const resetCalculator = useCallback(() => {
    setInputs(INITIAL_INPUTS)
    setCurrentStep(1)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore
    }
  }, [])

  // ========== NAVIGATION ==========
  const nextStep = useCallback(() => {
    setCurrentStep(s => Math.min(s + 1, 7))
  }, [])

  const prevStep = useCallback(() => {
    setCurrentStep(s => Math.max(s - 1, 1))
  }, [])

  const goToStep = useCallback((step: number) => {
    setCurrentStep(Math.max(1, Math.min(step, 7)))
  }, [])

  // ========== PAYMENT PLAN ==========
  const paymentPlanTotal = useMemo(() => {
    return (
      toNum(inputs.downPaymentPct) +
      toNum(inputs.duringConstructionPct) +
      toNum(inputs.onHandoverPct) +
      toNum(inputs.postHandoverPct)
    )
  }, [
    inputs.downPaymentPct,
    inputs.duringConstructionPct,
    inputs.onHandoverPct,
    inputs.postHandoverPct,
  ])

  const paymentPlanRemaining = 100 - paymentPlanTotal

  // ========== STEP VALIDATION ==========
  const stepValidation: StepValidation = useMemo(
    () => ({
      1: inputs.purchaseGoal !== '',

      2:
        inputs.propertyPrice !== '' &&
        toNum(inputs.propertyPrice) > 0 &&
        inputs.unitSize !== '' &&
        toNum(inputs.unitSize) > 0 &&
        (inputs.purchaseGoal !== 'investment' || inputs.expectedAnnualRent !== ''),

      3:
        inputs.monthlyIncome !== '' &&
        toNum(inputs.monthlyIncome) > 0 &&
        inputs.monthlyExpenses !== '' &&
        inputs.currentMonthlyRent !== '',

      4: inputs.liquidSavings !== '' && toNum(inputs.liquidSavings) > 0,

      5:
        paymentPlanTotal === 100 &&
        inputs.constructionMonths !== '' &&
        toNum(inputs.constructionMonths) > 0,

      6:
        inputs.dldFeePct !== '' &&
        inputs.additionalFees !== '' &&
        inputs.serviceChargePerSqft !== '',
    }),
    [inputs, paymentPlanTotal]
  )

  const canProceed = stepValidation[currentStep as keyof StepValidation] ?? false

  // ========== ANALYSIS ==========
  const analysis: AnalysisResult = useMemo(() => calculateAnalysis(inputs), [inputs])

  return {
    // State
    currentStep,
    inputs,
    isLoading,

    // Handlers
    updateInput,
    updateGoal,
    applyPreset,
    resetCalculator,

    // Navigation
    nextStep,
    prevStep,
    goToStep,

    // Payment Plan
    paymentPlanTotal,
    paymentPlanRemaining,

    // Validation
    stepValidation,
    canProceed,

    // Analysis
    analysis,
  }
}
