'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { 
  AlertCircle, AlertTriangle, Home, Calendar, 
  CheckCircle, X, TrendingUp, Shield, Key,
  Building2, Wallet, PiggyBank,
  ChevronDown, ChevronUp, Clock, XCircle, Lightbulb,
  Target, Sparkles, ArrowRight, BadgeCheck,
  Banknote, CalendarCheck, Video
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ========== STYLES ==========
const hideArrowsStyle = `
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
`

// ========== TYPES ==========
interface CalculatorInputs {
  propertyPrice: number | ''
  unitSize: number | ''
  serviceChargePerSqft: number | ''
  // Payment Plan (must total 100%)
  downPaymentPct: number | ''
  duringConstructionPct: number | ''
  constructionMonths: number | ''
  onHandoverPct: number | ''
  postHandoverPct: number | ''
  postHandoverMonths: number | ''
  // Rental
  expectedAnnualRent: number | ''
  // Finances
  monthlyIncome: number | ''
  monthlyExpenses: number | ''
  currentMonthlyRent: number | ''
  liquidSavings: number | ''
  // Fees
  dldFee: number | ''
  additionalFees: number | ''
  // Goal
  purchaseGoal: 'investment' | 'enduser'
}

interface Risk {
  severity: 'critical' | 'high' | 'medium' | 'positive' | 'info'
  text: string
}

interface WhatIfScenario {
  title: string
  description: string
  impact: string
}

// ========== COMPONENT ==========
export default function DubikeyCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    propertyPrice: '',
    unitSize: '',
    serviceChargePerSqft: '',
    downPaymentPct: '',
    duringConstructionPct: '',
    constructionMonths: '',
    onHandoverPct: '',
    postHandoverPct: '',
    postHandoverMonths: '',
    expectedAnnualRent: '',
    monthlyIncome: '',
    monthlyExpenses: '',
    currentMonthlyRent: '',
    liquidSavings: '',
    dldFee: '',
    additionalFees: '',
    purchaseGoal: 'investment'
  })

  const [showMethodology, setShowMethodology] = useState(false)
  const [showWhatIf, setShowWhatIf] = useState(false)

  const calLink = 'https://cal.com/dubikey/30min'

  const updateInput = (field: keyof CalculatorInputs, value: string) => {
    const numValue = value === '' ? '' : parseFloat(value) || 0
    setInputs(prev => ({ ...prev, [field]: numValue }))
  }

  const updateGoal = (goal: 'investment' | 'enduser') => {
    setInputs(prev => ({ ...prev, purchaseGoal: goal }))
  }

  // Payment plan total validation
  const paymentPlanTotal = useMemo(() => {
    const down = inputs.downPaymentPct === '' ? 0 : Number(inputs.downPaymentPct)
    const during = inputs.duringConstructionPct === '' ? 0 : Number(inputs.duringConstructionPct)
    const onHand = inputs.onHandoverPct === '' ? 0 : Number(inputs.onHandoverPct)
    const post = inputs.postHandoverPct === '' ? 0 : Number(inputs.postHandoverPct)
    return down + during + onHand + post
  }, [inputs.downPaymentPct, inputs.duringConstructionPct, inputs.onHandoverPct, inputs.postHandoverPct])

  const isPaymentPlanValid = paymentPlanTotal === 100

  const hasRequiredInputs = useMemo(() => {
    return (
      inputs.propertyPrice !== '' &&
      inputs.monthlyIncome !== '' &&
      inputs.liquidSavings !== '' &&
      inputs.downPaymentPct !== ''
    )
  }, [inputs.propertyPrice, inputs.monthlyIncome, inputs.liquidSavings, inputs.downPaymentPct])

  const analysis = useMemo(() => {
    // ========== HELPERS ==========
    const fmt = (num: number): string => {
      const rounded = Math.round(num)
      if (rounded < 0) return '-' + Math.abs(rounded).toLocaleString('en-AE')
      return rounded.toLocaleString('en-AE')
    }
    
    const toNum = (val: number | ''): number => val === '' ? 0 : val

    // ========== EXTRACT INPUTS ==========
    const price = toNum(inputs.propertyPrice)
    const isEndUser = inputs.purchaseGoal === 'enduser'
    const monthlyIncome = toNum(inputs.monthlyIncome)
    const monthlyExpenses = toNum(inputs.monthlyExpenses)
    const currentRent = toNum(inputs.currentMonthlyRent)
    const liquidSavings = toNum(inputs.liquidSavings)
    const unitSize = toNum(inputs.unitSize) || 800
    const serviceChargePerSqft = toNum(inputs.serviceChargePerSqft) || 15
    const expectedAnnualRent = toNum(inputs.expectedAnnualRent)
    const dldFeePct = toNum(inputs.dldFee) || 4
    const additionalFees = toNum(inputs.additionalFees) || 15000

    // Payment Plan
    const downPct = toNum(inputs.downPaymentPct) || 20
    const duringConstructionPct = toNum(inputs.duringConstructionPct) || 0
    const constructionMonths = toNum(inputs.constructionMonths) || 36
    const onHandoverPct = toNum(inputs.onHandoverPct) || 0
    const postHandoverPct = toNum(inputs.postHandoverPct) || 0
    const postHandoverMonths = toNum(inputs.postHandoverMonths) || 24

    // ========== UPFRONT COSTS ==========
    const downPaymentAmount = price * (downPct / 100)
    const dldCost = price * (dldFeePct / 100)
    const totalUpfront = downPaymentAmount + dldCost + additionalFees
    const liquidityBuffer = liquidSavings - totalUpfront

    // ========== INSTALLMENTS ==========
    // During Construction
    const duringConstructionAmount = price * (duringConstructionPct / 100)
    const monthlyDuringConstruction = constructionMonths > 0 && duringConstructionPct > 0
      ? duringConstructionAmount / constructionMonths 
      : 0

    // On Handover (lump sum)
    const onHandoverAmount = price * (onHandoverPct / 100)

    // Post Handover
    const postHandoverAmount = price * (postHandoverPct / 100)
    const monthlyPostHandover = postHandoverMonths > 0 && postHandoverPct > 0
      ? postHandoverAmount / postHandoverMonths 
      : 0

    // ========== SERVICE CHARGE ==========
    const annualServiceCharge = unitSize * serviceChargePerSqft
    const monthlyServiceCharge = annualServiceCharge / 12

    // ========== RENTAL CALCULATIONS (Investor) ==========
    const grossAnnualRent = expectedAnnualRent
    const netAnnualRent = grossAnnualRent - annualServiceCharge
    const monthlyNetRent = Math.max(0, netAnnualRent / 12)
    const grossYield = price > 0 ? (grossAnnualRent / price) * 100 : 0
    const netYield = price > 0 ? (Math.max(0, netAnnualRent) / price) * 100 : 0

    // ========== PRE-HANDOVER (During Construction) ==========
    const preHandoverMonthlyExpenses = monthlyExpenses + currentRent + monthlyDuringConstruction
    const surplusPre = monthlyIncome - preHandoverMonthlyExpenses
    const surplusRatioPre = monthlyIncome > 0 ? (surplusPre / monthlyIncome) * 100 : 0

    // ========== POST-HANDOVER ==========
    let surplusPost: number
    let surplusRatioPost: number
    let rentSaved = 0
    let rentalIncomeGained = 0

    if (isEndUser) {
      // End User: No rent + service charge
      rentSaved = currentRent
      const postExpenses = monthlyExpenses + monthlyPostHandover + monthlyServiceCharge
      surplusPost = monthlyIncome - postExpenses
      surplusRatioPost = monthlyIncome > 0 ? (surplusPost / monthlyIncome) * 100 : 0
    } else {
      // Investor: Still pays rent + gets rental income
      rentalIncomeGained = monthlyNetRent
      const postExpenses = monthlyExpenses + currentRent + monthlyPostHandover - monthlyNetRent
      surplusPost = monthlyIncome - postExpenses
      surplusRatioPost = monthlyIncome > 0 ? (surplusPost / monthlyIncome) * 100 : 0
    }

    // ========== SAVINGS COVERAGE ANALYSIS ==========
    // How many months can savings cover if surplus is low/negative
    const monthlyBurn = preHandoverMonthlyExpenses
    const monthsCoverageFromSavings = liquidityBuffer > 0 && monthlyDuringConstruction > 0
      ? liquidityBuffer / monthlyDuringConstruction
      : 0
    
    // Can savings cover all construction period + handover + buffer?
    const totalNeededTillHandover = (monthlyDuringConstruction * constructionMonths) + onHandoverAmount
    const savingsCanCoverConstruction = liquidityBuffer >= totalNeededTillHandover * 1.2 // 20% buffer

    // Reserve ratio
    const monthsCoverage = liquidityBuffer > 0 && monthlyBurn > 0
      ? liquidityBuffer / monthlyBurn
      : 0

    // ========== SMART SCORING ==========
    let score = 0
    const risks: Risk[] = []

    // CRITICAL: Can't afford upfront
    if (liquidityBuffer < 0) {
      score = 0
      risks.push({ 
        severity: 'critical', 
        text: `Insufficient savings: Need ${fmt(totalUpfront)} AED, have ${fmt(liquidSavings)} AED`
      })
    }
    // Scenario: Low/Zero income surplus BUT strong savings
    else if (surplusPre <= 0 && savingsCanCoverConstruction) {
      // Person with strong savings can "fund" from savings
      score = 70 + Math.min(15, monthsCoverageFromSavings / 10)
      risks.push({ 
        severity: 'positive', 
        text: `Strong savings position: ${fmt(liquidityBuffer)} AED covers ${Math.round(monthsCoverageFromSavings)} months of payments`
      })
      if (surplusPre < 0) {
        risks.push({ 
          severity: 'info', 
          text: `Monthly deficit of ${fmt(Math.abs(surplusPre))} AED will be covered from savings`
        })
      }
    }
    // Scenario: Low/Zero income surplus AND weak savings
    else if (surplusPre <= 0 && !savingsCanCoverConstruction) {
      score = Math.max(0, 20 + (surplusPre / 500))
      risks.push({ 
        severity: 'critical', 
        text: `Monthly deficit of ${fmt(Math.abs(surplusPre))} AED without sufficient savings backup`
      })
    }
    // ========== POSITIVE SCENARIOS (Good Surplus) ==========
    else {
      // Score based on surplus ratio
      if (surplusRatioPre >= 40) {
        score = 90 + Math.min(10, (surplusRatioPre - 40) / 4)
        risks.push({ 
          severity: 'positive', 
          text: `Excellent! ${surplusRatioPre.toFixed(0)}% of income remains (${fmt(surplusPre)} AED/month)`
        })
      } else if (surplusRatioPre >= 25) {
        score = 75 + (surplusRatioPre - 25) * 0.6
        risks.push({ 
          severity: 'positive', 
          text: `Strong: ${surplusRatioPre.toFixed(0)}% surplus (${fmt(surplusPre)} AED/month)`
        })
      } else if (surplusRatioPre >= 15) {
        score = 65 + (surplusRatioPre - 15)
        risks.push({ 
          severity: 'positive', 
          text: `Good: ${surplusRatioPre.toFixed(0)}% surplus (${fmt(surplusPre)} AED/month)`
        })
      } else if (surplusRatioPre >= 10) {
        // Check if savings provide backup
        if (monthsCoverageFromSavings >= constructionMonths) {
          score = 70 + (surplusRatioPre - 10) * 2
          risks.push({ 
            severity: 'positive', 
            text: `${surplusRatioPre.toFixed(0)}% surplus + strong savings backup`
          })
        } else {
          score = 55 + (surplusRatioPre - 10) * 2
          risks.push({ 
            severity: 'info', 
            text: `${surplusRatioPre.toFixed(0)}% surplus - consider building more savings`
          })
        }
      } else if (surplusRatioPre >= 5) {
        score = 40 + (surplusRatioPre - 5) * 3
        risks.push({ 
          severity: 'info', 
          text: `Tight: ${surplusRatioPre.toFixed(0)}% surplus - manageable with discipline`
        })
      } else {
        score = 30 + surplusRatioPre * 2
        risks.push({ 
          severity: 'high', 
          text: `Very tight: Only ${surplusRatioPre.toFixed(1)}% surplus`
        })
      }

      // Savings buffer bonus/penalty
      if (monthsCoverage >= 12) {
        score = Math.min(100, score + 5)
        risks.push({ 
          severity: 'positive', 
          text: `Excellent safety net: ${Math.round(monthsCoverage)} months covered by savings`
        })
      } else if (monthsCoverage < 3 && surplusRatioPre < 20) {
        score = Math.max(40, score - 10)
        risks.push({ 
          severity: 'high', 
          text: `Low buffer: Only ${monthsCoverage.toFixed(1)} months of savings`
        })
      }
    }

    // ========== END USER BONUS ==========
    if (isEndUser && currentRent > 0 && score > 0) {
      risks.push({ 
        severity: 'positive', 
        text: `After handover: Save ${fmt(currentRent)} AED/month (no more rent!)`
      })
    }

    // ========== INVESTOR RENTAL ==========
    if (!isEndUser && expectedAnnualRent > 0 && score > 0) {
      if (netYield >= 5) {
        risks.push({ 
          severity: 'positive', 
          text: `Good yield: ${netYield.toFixed(1)}% net (${fmt(monthlyNetRent)} AED/month)`
        })
      } else if (netYield >= 3) {
        risks.push({ 
          severity: 'info', 
          text: `Moderate yield: ${netYield.toFixed(1)}% net (${fmt(monthlyNetRent)} AED/month)`
        })
      }
    }

    // ========== ON HANDOVER WARNING ==========
    if (onHandoverAmount > 0 && liquidityBuffer < onHandoverAmount * 1.5) {
      risks.push({ 
        severity: 'info', 
        text: `On handover: ${fmt(onHandoverAmount)} AED lump sum due - plan ahead`
      })
    }

    // ========== VERDICT ==========
    score = Math.round(Math.max(0, Math.min(100, score)))
    
    let verdict: 'green' | 'yellow' | 'red'
    let verdictText: string
    let comfortLevel: string

    if (score >= 70) {
      verdict = 'green'
      verdictText = 'GO AHEAD'
      comfortLevel = score >= 85 ? 'Very Comfortable' : 'Comfortable'
    } else if (score >= 40) {
      verdict = 'yellow'
      verdictText = 'REVIEW OPTIONS'
      comfortLevel = score >= 55 ? 'Manageable' : 'Tight Budget'
    } else {
      verdict = 'red'
      verdictText = 'NOT RECOMMENDED'
      comfortLevel = score >= 20 ? 'High Risk' : 'Not Affordable'
    }

    // ========== CTA ==========
    const showCTA = verdict === 'green' || verdict === 'yellow'
    const ctaText = verdict === 'green' 
      ? "Great numbers! Let's find you the best deal available."
      : "Let's explore better options for your budget."

    // ========== WHAT-IF ==========
    const whatIfScenarios: WhatIfScenario[] = []
    
    if (downPct < 30 && liquidityBuffer > price * 0.15) {
      whatIfScenarios.push({
        title: 'Increase down payment',
        description: 'Use more savings upfront to reduce monthly payments',
        impact: 'Lower monthly installments'
      })
    }

    if (verdict !== 'green' && price > 600000) {
      const suggestedPrice = Math.round(price * 0.75 / 50000) * 50000
      whatIfScenarios.push({
        title: `Consider ${fmt(suggestedPrice)} AED property`,
        description: '25% lower price point',
        impact: 'Much better monthly cash flow'
      })
    }

    return {
      // Upfront
      totalUpfront,
      downPaymentAmount,
      dldCost,
      liquidityBuffer,
      
      // Payment Plan
      monthlyDuringConstruction,
      onHandoverAmount,
      monthlyPostHandover,
      constructionMonths,
      
      // Service Charge
      annualServiceCharge,
      monthlyServiceCharge,
      
      // Pre-Handover
      surplusPre,
      surplusRatioPre,
      
      // Post-Handover
      surplusPost,
      surplusRatioPost,
      rentSaved,
      rentalIncomeGained,
      
      // Rental
      grossAnnualRent,
      netAnnualRent,
      monthlyNetRent,
      grossYield,
      netYield,
      
      // Coverage
      monthsCoverage,
      monthsCoverageFromSavings,
      
      // Score
      score,
      verdict,
      verdictText,
      comfortLevel,
      risks,
      showCTA,
      ctaText,
      whatIfScenarios,
      isEndUser,
      
      // Raw
      monthlyIncome,
      monthlyExpenses,
      currentRent,
      
      // Helper
      fmt,
    }
  }, [inputs])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hideArrowsStyle }} />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* HERO */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-medium mb-6">
            <Key className="w-4 h-4" />
            Free Calculator
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            <span className="text-gold-gradient">DubiKey</span> Score
          </h1>
          <p className="text-midnight-300 text-lg max-w-2xl mx-auto mb-4">
            Can you comfortably afford this Dubai off-plan property? Find out instantly.
          </p>
          <div className="inline-flex items-center gap-4 text-sm text-midnight-400">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> Free</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> Instant</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-emerald-400" /> No signup</span>
          </div>
        </div>

        {/* GOAL */}
        <div className="card-dark rounded-2xl p-6 mb-8">
          <label className="block text-white font-semibold mb-4 text-lg">What&apos;s your goal?</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => updateGoal('investment')}
              className={cn(
                "p-5 rounded-xl border-2 transition-all text-left",
                inputs.purchaseGoal === 'investment'
                  ? "border-gold-500 bg-gold-500/10"
                  : "border-midnight-700 bg-midnight-800/50 hover:border-midnight-600"
              )}
            >
              <TrendingUp className={cn("w-7 h-7 mb-2", inputs.purchaseGoal === 'investment' ? "text-gold-500" : "text-midnight-400")} />
              <div className={cn("font-semibold text-lg", inputs.purchaseGoal === 'investment' ? "text-white" : "text-midnight-300")}>Investment</div>
              <div className="text-sm text-midnight-400">Buy to rent out</div>
            </button>
            <button
              onClick={() => updateGoal('enduser')}
              className={cn(
                "p-5 rounded-xl border-2 transition-all text-left",
                inputs.purchaseGoal === 'enduser'
                  ? "border-gold-500 bg-gold-500/10"
                  : "border-midnight-700 bg-midnight-800/50 hover:border-midnight-600"
              )}
            >
              <Home className={cn("w-7 h-7 mb-2", inputs.purchaseGoal === 'enduser' ? "text-gold-500" : "text-midnight-400")} />
              <div className={cn("font-semibold text-lg", inputs.purchaseGoal === 'enduser' ? "text-white" : "text-midnight-300")}>End User</div>
              <div className="text-sm text-midnight-400">Buy to live in</div>
            </button>
          </div>
        </div>

        {/* INPUTS */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          
          {/* Property */}
          <div className="card-dark rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-5 flex items-center gap-2 text-white">
              <Building2 className="w-5 h-5 text-gold-500" />
              Property Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Property Price (AED) *</label>
                <input type="number" className="input-dark" placeholder="e.g. 1,000,000"
                  onChange={e => updateInput('propertyPrice', e.target.value)} value={inputs.propertyPrice} />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Unit Size (sqft)</label>
                <input type="number" className="input-dark" placeholder="e.g. 800"
                  onChange={e => updateInput('unitSize', e.target.value)} value={inputs.unitSize} />
              </div>
              {!inputs.purchaseGoal || inputs.purchaseGoal === 'investment' ? (
                <div>
                  <label className="block text-sm font-medium text-midnight-300 mb-2">Expected Annual Rent (AED)</label>
                  <input type="number" className="input-dark" placeholder="e.g. 60,000"
                    onChange={e => updateInput('expectedAnnualRent', e.target.value)} value={inputs.expectedAnnualRent} />
                </div>
              ) : null}
            </div>
          </div>

          {/* Finances */}
          <div className="card-dark rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-5 flex items-center gap-2 text-white">
              <Wallet className="w-5 h-5 text-gold-500" />
              Your Finances
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Monthly Income (AED) *</label>
                <input type="number" className="input-dark" placeholder="e.g. 30,000"
                  onChange={e => updateInput('monthlyIncome', e.target.value)} value={inputs.monthlyIncome} />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Monthly Expenses (AED)</label>
                <input type="number" className="input-dark" placeholder="e.g. 10,000 (excluding rent)"
                  onChange={e => updateInput('monthlyExpenses', e.target.value)} value={inputs.monthlyExpenses} />
                <p className="text-xs text-midnight-500 mt-1">Exclude rent</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Current Monthly Rent (AED)</label>
                <input type="number" className="input-dark" placeholder="e.g. 5,000"
                  onChange={e => updateInput('currentMonthlyRent', e.target.value)} value={inputs.currentMonthlyRent} />
                {inputs.purchaseGoal === 'enduser' && Number(inputs.currentMonthlyRent) > 0 && (
                  <p className="text-xs text-emerald-400 mt-1">✓ Becomes savings after handover!</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Liquid Savings (AED) *</label>
                <input type="number" className="input-dark" placeholder="e.g. 300,000"
                  onChange={e => updateInput('liquidSavings', e.target.value)} value={inputs.liquidSavings} />
              </div>
            </div>
          </div>

          {/* Payment Plan - NEW STRUCTURE */}
          <div className="card-dark rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-2 flex items-center gap-2 text-white">
              <Calendar className="w-5 h-5 text-gold-500" />
              Payment Plan
            </h2>
            <p className="text-xs text-midnight-400 mb-5">Must total 100%</p>
            
            <div className="space-y-4">
              {/* Down Payment */}
              <div className="p-4 rounded-lg bg-midnight-800/30 border border-midnight-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 text-xs flex items-center justify-center">1</span>
                    Down Payment
                  </span>
                  <span className="text-xs text-midnight-400">At booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="number" className="input-dark flex-1" placeholder="e.g. 20"
                    onChange={e => updateInput('downPaymentPct', e.target.value)} value={inputs.downPaymentPct} />
                  <span className="text-midnight-400">%</span>
                </div>
              </div>

              {/* During Construction */}
              <div className="p-4 rounded-lg bg-midnight-800/30 border border-midnight-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-500 text-xs flex items-center justify-center">2</span>
                    During Construction
                  </span>
                  <span className="text-xs text-midnight-400">Monthly installments</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <input type="number" className="input-dark flex-1" placeholder="e.g. 40"
                      onChange={e => updateInput('duringConstructionPct', e.target.value)} value={inputs.duringConstructionPct} />
                    <span className="text-midnight-400">%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" className="input-dark flex-1" placeholder="e.g. 36"
                      onChange={e => updateInput('constructionMonths', e.target.value)} value={inputs.constructionMonths} />
                    <span className="text-midnight-400 text-xs">months</span>
                  </div>
                </div>
                {Number(inputs.constructionMonths) > 0 && (
                  <p className="text-xs text-gold-400 mt-2 flex items-center gap-1">
                    <Target className="w-3 h-3" /> Handover in {inputs.constructionMonths} months
                  </p>
                )}
              </div>

              {/* On Handover */}
              <div className="p-4 rounded-lg bg-midnight-800/30 border border-midnight-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 text-xs flex items-center justify-center">3</span>
                    On Handover
                  </span>
                  <span className="text-xs text-midnight-400">When you get keys</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="number" className="input-dark flex-1" placeholder="e.g. 20"
                    onChange={e => updateInput('onHandoverPct', e.target.value)} value={inputs.onHandoverPct} />
                  <span className="text-midnight-400">%</span>
                </div>
              </div>

              {/* Post Handover */}
              <div className="p-4 rounded-lg bg-midnight-800/30 border border-midnight-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 text-xs flex items-center justify-center">4</span>
                    Post-Handover
                  </span>
                  <span className="text-xs text-midnight-400">If any</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <input type="number" className="input-dark flex-1" placeholder="e.g. 20"
                      onChange={e => updateInput('postHandoverPct', e.target.value)} value={inputs.postHandoverPct} />
                    <span className="text-midnight-400">%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="number" className="input-dark flex-1" placeholder="e.g. 24"
                      onChange={e => updateInput('postHandoverMonths', e.target.value)} value={inputs.postHandoverMonths} />
                    <span className="text-midnight-400 text-xs">months</span>
                  </div>
                </div>
              </div>

              {/* Total indicator */}
              <div className={cn(
                "p-3 rounded-lg flex items-center justify-between",
                paymentPlanTotal === 100 ? "bg-emerald-500/10 border border-emerald-500/30" :
                paymentPlanTotal > 0 ? "bg-red-500/10 border border-red-500/30" :
                "bg-midnight-800/30 border border-midnight-700"
              )}>
                <span className="text-sm text-midnight-300">Total</span>
                <span className={cn(
                  "font-bold",
                  paymentPlanTotal === 100 ? "text-emerald-400" :
                  paymentPlanTotal > 0 ? "text-red-400" : "text-midnight-400"
                )}>
                  {paymentPlanTotal}%
                  {paymentPlanTotal === 100 && <CheckCircle className="w-4 h-4 inline ml-2" />}
                  {paymentPlanTotal > 0 && paymentPlanTotal !== 100 && <span className="text-xs ml-2">(must be 100%)</span>}
                </span>
              </div>
            </div>
          </div>

          {/* Fees */}
          <div className="card-dark rounded-2xl p-6">
            <h2 className="font-bold text-lg mb-5 flex items-center gap-2 text-white">
              <PiggyBank className="w-5 h-5 text-gold-500" />
              Fees & Costs
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">DLD Fee (%)</label>
                <input type="number" className="input-dark" placeholder="e.g. 4"
                  onChange={e => updateInput('dldFee', e.target.value)} value={inputs.dldFee} />
                <p className="text-xs text-midnight-500 mt-1">Dubai Land Department (typically 4%)</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Additional Fees (AED)</label>
                <input type="number" className="input-dark" placeholder="e.g. 15,000"
                  onChange={e => updateInput('additionalFees', e.target.value)} value={inputs.additionalFees} />
                <p className="text-xs text-midnight-500 mt-1">Agent, NOC, admin fees</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight-300 mb-2">Service Charge (AED/sqft/year)</label>
                <input type="number" className="input-dark" placeholder="e.g. 15"
                  onChange={e => updateInput('serviceChargePerSqft', e.target.value)} value={inputs.serviceChargePerSqft} />
                {hasRequiredInputs && (
                  <p className="text-xs text-midnight-400 mt-1">
                    = {analysis.fmt(analysis.annualServiceCharge)} AED/year ({analysis.fmt(analysis.monthlyServiceCharge)}/month)
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========== RESULTS ========== */}
        {hasRequiredInputs && isPaymentPlanValid && (
          <>
            {/* Score Card */}
            <div className={cn(
              "rounded-3xl p-8 mb-6 border-2",
              analysis.verdict === 'green' ? "bg-emerald-500/5 border-emerald-500/30" :
              analysis.verdict === 'yellow' ? "bg-amber-500/5 border-amber-500/30" :
              "bg-red-500/5 border-red-500/30"
            )}>
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-36 h-36 rounded-full flex items-center justify-center mb-4 border-4",
                  analysis.verdict === 'green' ? "border-emerald-500/50 bg-emerald-500/10" :
                  analysis.verdict === 'yellow' ? "border-amber-500/50 bg-amber-500/10" :
                  "border-red-500/50 bg-red-500/10"
                )}>
                  <span className={cn(
                    "text-5xl font-bold",
                    analysis.verdict === 'green' ? "text-emerald-400" :
                    analysis.verdict === 'yellow' ? "text-amber-400" :
                    "text-red-400"
                  )}>{analysis.score}</span>
                </div>
                
                <div className="text-midnight-400 text-sm mb-2">{analysis.comfortLevel}</div>
                
                <div className={cn(
                  "px-6 py-2 rounded-xl font-bold text-xl flex items-center gap-2",
                  analysis.verdict === 'green' ? "badge-green" :
                  analysis.verdict === 'yellow' ? "badge-yellow" :
                  "badge-red"
                )}>
                  {analysis.verdict === 'green' && <CheckCircle className="w-5 h-5" />}
                  {analysis.verdict === 'yellow' && <AlertTriangle className="w-5 h-5" />}
                  {analysis.verdict === 'red' && <XCircle className="w-5 h-5" />}
                  {analysis.verdictText}
                </div>

                {/* Affordability Meter */}
                <div className="w-full max-w-md mt-6">
                  <div className="flex justify-between text-xs text-midnight-400 mb-1">
                    <span>Surplus Ratio</span>
                    <span>{analysis.surplusRatioPre.toFixed(0)}% of income</span>
                  </div>
                  <div className="h-3 bg-midnight-700 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full transition-all",
                        analysis.surplusRatioPre >= 25 ? "bg-emerald-500" :
                        analysis.surplusRatioPre >= 10 ? "bg-amber-500" :
                        "bg-red-500"
                      )}
                      style={{ width: `${Math.min(100, Math.max(0, analysis.surplusRatioPre * 2))}%` }}
                    />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-4 gap-3 w-full max-w-2xl mt-6">
                  <div className="text-center p-3 rounded-lg bg-midnight-800/50">
                    <div className="text-lg font-bold text-white">{analysis.fmt(analysis.totalUpfront)}</div>
                    <div className="text-xs text-midnight-400">Upfront</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-midnight-800/50">
                    <div className="text-lg font-bold text-white">{analysis.fmt(analysis.monthlyDuringConstruction)}</div>
                    <div className="text-xs text-midnight-400">Monthly</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-midnight-800/50">
                    <div className={cn("text-lg font-bold", analysis.surplusPre >= 0 ? "text-emerald-400" : "text-red-400")}>
                      {analysis.fmt(analysis.surplusPre)}
                    </div>
                    <div className="text-xs text-midnight-400">Surplus</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-midnight-800/50">
                    <div className={cn("text-lg font-bold", analysis.liquidityBuffer >= 0 ? "text-white" : "text-red-400")}>
                      {analysis.fmt(analysis.liquidityBuffer)}
                    </div>
                    <div className="text-xs text-midnight-400">Left</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA - Cal.com */}
            {analysis.showCTA && (
              <div className="bg-gradient-to-r from-gold-600/20 to-gold-500/10 border border-gold-500/30 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-gold-500 flex-shrink-0" />
                  <div>
                    <p className="text-white text-lg font-medium">{analysis.ctaText}</p>
                    <p className="text-midnight-400 text-sm mt-1">Book a free 30-minute consultation with our property experts.</p>
                  </div>
                </div>
                <a 
                  href={calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-gold-500 text-midnight-900 font-bold py-4 px-6 rounded-xl hover:bg-gold-400 transition-all"
                >
                  <CalendarCheck className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs text-midnight-400">
                  <span className="flex items-center gap-1"><Video className="w-4 h-4" /> Video call</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 30 minutes</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Free</span>
                </div>
              </div>
            )}

            {/* PRE-HANDOVER */}
            <div className="card-dark rounded-2xl p-6 mb-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-500" />
                During Construction ({analysis.constructionMonths} months)
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-midnight-700">
                  <span className="text-midnight-300">Income</span>
                  <span className="text-white">{analysis.fmt(analysis.monthlyIncome)} AED</span>
                </div>
                <div className="flex justify-between py-2 border-b border-midnight-700">
                  <span className="text-midnight-300">− Expenses</span>
                  <span className="text-red-400">-{analysis.fmt(analysis.monthlyExpenses)} AED</span>
                </div>
                <div className="flex justify-between py-2 border-b border-midnight-700">
                  <span className="text-midnight-300">− Current Rent</span>
                  <span className="text-red-400">-{analysis.fmt(analysis.currentRent)} AED</span>
                </div>
                <div className="flex justify-between py-2 border-b border-midnight-700">
                  <span className="text-midnight-300">− Installment</span>
                  <span className="text-red-400">-{analysis.fmt(analysis.monthlyDuringConstruction)} AED</span>
                </div>
                <div className={cn(
                  "flex justify-between py-3 px-3 rounded-lg mt-2",
                  analysis.surplusPre >= 0 ? "bg-emerald-500/10" : "bg-red-500/10"
                )}>
                  <span className={cn("font-bold", analysis.surplusPre >= 0 ? "text-emerald-400" : "text-red-400")}>
                    = Monthly Surplus ({analysis.surplusRatioPre.toFixed(0)}%)
                  </span>
                  <span className={cn("font-bold", analysis.surplusPre >= 0 ? "text-emerald-400" : "text-red-400")}>
                    {analysis.fmt(analysis.surplusPre)} AED
                  </span>
                </div>
              </div>

              {/* On Handover Note */}
              {analysis.onHandoverAmount > 0 && (
                <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-300 text-sm">
                    On handover: {analysis.fmt(analysis.onHandoverAmount)} AED lump sum due
                  </span>
                </div>
              )}
            </div>

            {/* POST-HANDOVER */}
            <div className="card-dark rounded-2xl p-6 mb-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-emerald-500" />
                After Handover {analysis.isEndUser ? '(Living In)' : '(Rental Income)'}
              </h2>
              
              {analysis.isEndUser ? (
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-300">Income</span>
                    <span className="text-white">{analysis.fmt(analysis.monthlyIncome)} AED</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-300">− Expenses</span>
                    <span className="text-red-400">-{analysis.fmt(analysis.monthlyExpenses)} AED</span>
                  </div>
                  {analysis.monthlyPostHandover > 0 && (
                    <div className="flex justify-between py-2 border-b border-midnight-700">
                      <span className="text-midnight-300">− Installment</span>
                      <span className="text-red-400">-{analysis.fmt(analysis.monthlyPostHandover)} AED</span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-midnight-700">
                    <span className="text-midnight-300">− Service Charge</span>
                    <span className="text-red-400">-{analysis.fmt(analysis.monthlyServiceCharge)} AED</span>
                  </div>
                  {analysis.rentSaved > 0 && (
                    <div className="flex justify-between py-2 border-b border-midnight-700 bg-emerald-500/5 -mx-3 px-3">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Sparkles className="w-4 h-4" /> + Rent Saved!
                      </span>
                      <span className="text-emerald-400">+{analysis.fmt(analysis.rentSaved)} AED</span>
                    </div>
                  )}
                  <div className={cn(
                    "flex justify-between py-3 px-3 rounded-lg mt-2",
                    analysis.surplusPost >= 0 ? "bg-emerald-500/10" : "bg-red-500/10"
                  )}>
                    <span className={cn("font-bold", analysis.surplusPost >= 0 ? "text-emerald-400" : "text-red-400")}>
                      = Monthly Surplus ({analysis.surplusRatioPost.toFixed(0)}%)
                    </span>
                    <span className={cn("font-bold", analysis.surplusPost >= 0 ? "text-emerald-400" : "text-red-400")}>
                      {analysis.fmt(analysis.surplusPost)} AED
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Rental Box */}
                  {analysis.grossAnnualRent > 0 && (
                    <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20">
                      <div className="text-sm text-gold-400 mb-2 font-medium">Rental Income</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-midnight-300">Gross Rent</span>
                          <span className="text-white">{analysis.fmt(analysis.grossAnnualRent)} AED/year</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-midnight-300">− Service Charge</span>
                          <span className="text-red-400">-{analysis.fmt(analysis.annualServiceCharge)} AED</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-midnight-700">
                          <span className="text-white font-medium">Net Rent</span>
                          <span className="text-emerald-400 font-medium">{analysis.fmt(analysis.netAnnualRent)} AED/year</span>
                        </div>
                        <div className="flex justify-between text-xs text-midnight-400">
                          <span>Net Yield</span>
                          <span className={analysis.netYield >= 5 ? "text-emerald-400" : "text-amber-400"}>
                            {analysis.netYield.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-midnight-700">
                      <span className="text-midnight-300">Income</span>
                      <span className="text-white">{analysis.fmt(analysis.monthlyIncome)} AED</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-midnight-700">
                      <span className="text-midnight-300">− Expenses & Rent</span>
                      <span className="text-red-400">-{analysis.fmt(analysis.monthlyExpenses + analysis.currentRent)} AED</span>
                    </div>
                    {analysis.monthlyPostHandover > 0 && (
                      <div className="flex justify-between py-2 border-b border-midnight-700">
                        <span className="text-midnight-300">− Installment</span>
                        <span className="text-red-400">-{analysis.fmt(analysis.monthlyPostHandover)} AED</span>
                      </div>
                    )}
                    {analysis.monthlyNetRent > 0 && (
                      <div className="flex justify-between py-2 border-b border-midnight-700 bg-emerald-500/5 -mx-3 px-3">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <Banknote className="w-4 h-4" /> + Net Rental
                        </span>
                        <span className="text-emerald-400">+{analysis.fmt(analysis.monthlyNetRent)} AED</span>
                      </div>
                    )}
                    <div className={cn(
                      "flex justify-between py-3 px-3 rounded-lg mt-2",
                      analysis.surplusPost >= 0 ? "bg-emerald-500/10" : "bg-red-500/10"
                    )}>
                      <span className={cn("font-bold", analysis.surplusPost >= 0 ? "text-emerald-400" : "text-red-400")}>
                        = Monthly Surplus ({analysis.surplusRatioPost.toFixed(0)}%)
                      </span>
                      <span className={cn("font-bold", analysis.surplusPost >= 0 ? "text-emerald-400" : "text-red-400")}>
                        {analysis.fmt(analysis.surplusPost)} AED
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Improvement note */}
              {analysis.surplusPost > analysis.surplusPre && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 text-sm">
                    +{analysis.fmt(analysis.surplusPost - analysis.surplusPre)} AED/month improvement after handover!
                  </span>
                </div>
              )}
            </div>

            {/* Analysis */}
            {analysis.risks.length > 0 && (
              <div className="card-dark rounded-2xl p-6 mb-6">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-gold-500" />
                  Analysis
                </h2>
                <div className="space-y-2">
                  {analysis.risks.map((risk, idx) => (
                    <div key={idx} className={cn(
                      "flex items-start gap-3 p-3 rounded-xl",
                      risk.severity === 'critical' ? "bg-red-500/10 border border-red-500/30" : 
                      risk.severity === 'high' ? "bg-orange-500/10 border border-orange-500/30" : 
                      risk.severity === 'positive' ? "bg-emerald-500/10 border border-emerald-500/30" :
                      "bg-blue-500/10 border border-blue-500/30"
                    )}>
                      {risk.severity === 'positive' ? <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" /> :
                       risk.severity === 'info' ? <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" /> :
                       <AlertTriangle className={cn("w-5 h-5 flex-shrink-0", 
                         risk.severity === 'critical' ? "text-red-400" : "text-orange-400")} />}
                      <span className="text-white text-sm">{risk.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What-If */}
            {analysis.whatIfScenarios.length > 0 && (
              <div className="card-dark rounded-2xl p-6 mb-6">
                <button onClick={() => setShowWhatIf(!showWhatIf)}
                  className="w-full flex items-center justify-between text-white">
                  <span className="font-bold flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-gold-500" />
                    Ways to Improve
                  </span>
                  {showWhatIf ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {showWhatIf && (
                  <div className="mt-4 space-y-3">
                    {analysis.whatIfScenarios.map((s, i) => (
                      <div key={i} className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20">
                        <div className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-white font-medium">{s.title}</div>
                            <div className="text-midnight-400 text-sm">{s.description}</div>
                            <div className="text-emerald-400 text-sm mt-1">{s.impact}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Methodology */}
            <div className="card-dark rounded-2xl p-4">
              <button onClick={() => setShowMethodology(!showMethodology)}
                className="w-full flex items-center justify-between text-midnight-400 hover:text-white">
                <span className="text-sm">How is this calculated?</span>
                {showMethodology ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showMethodology && (
                <div className="mt-4 pt-4 border-t border-midnight-700 text-xs text-midnight-400 space-y-1">
                  <p>• <strong className="text-white">Score</strong> based on Surplus Ratio (% of income remaining) + Savings Coverage</p>
                  <p>• <strong className="text-white">GO AHEAD (70+):</strong> ≥25% surplus OR ≥10% with strong savings backup</p>
                  <p>• <strong className="text-white">REVIEW (40-69):</strong> 5-25% surplus or savings-dependent</p>
                  <p>• <strong className="text-white">NOT RECOMMENDED (&lt;40):</strong> Negative surplus without savings backup</p>
                  <p>• Strong savings can offset low income surplus</p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Payment Plan Warning */}
        {hasRequiredInputs && !isPaymentPlanValid && paymentPlanTotal > 0 && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
            <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
            <h3 className="text-white font-bold text-lg mb-2">Payment Plan Must Equal 100%</h3>
            <p className="text-midnight-300">
              Current total: <span className="text-red-400 font-bold">{paymentPlanTotal}%</span>
            </p>
            <p className="text-midnight-400 text-sm mt-2">
              Adjust Down Payment, During Construction, On Handover, and Post-Handover percentages.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
