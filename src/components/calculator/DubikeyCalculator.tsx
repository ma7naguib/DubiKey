'use client'

import { Key, ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCalculator } from './useCalculator'
import { TOTAL_STEPS } from './constants'
import {
  Step1Goal,
  Step2Property,
  Step3Income,
  Step4Savings,
  Step5PaymentPlan,
  Step6Fees,
  Step7Results,
} from './steps'

// Hide number input arrows
const hideArrowsStyle = `
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
  input[type=number] { -moz-appearance: textfield; }
`

export default function DubikeyCalculator() {
  const {
    currentStep,
    inputs,
    isLoading,
    updateInput,
    updateGoal,
    applyPreset,
    resetCalculator,
    nextStep,
    prevStep,
    paymentPlanTotal,
    paymentPlanRemaining,
    canProceed,
    analysis,
  } = useCalculator()

  // ========== LOADING STATE ==========
  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-midnight-800 rounded w-1/2 mx-auto" />
          <div className="h-4 bg-midnight-800 rounded w-3/4 mx-auto" />
          <div className="h-40 bg-midnight-800 rounded mt-8" />
        </div>
      </div>
    )
  }

  // ========== RENDER STEP ==========
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Goal purchaseGoal={inputs.purchaseGoal} onSelect={updateGoal} />

      case 2:
        return <Step2Property inputs={inputs} onUpdate={updateInput} />

      case 3:
        return <Step3Income inputs={inputs} onUpdate={updateInput} />

      case 4:
        return <Step4Savings inputs={inputs} onUpdate={updateInput} />

      case 5:
        return (
          <Step5PaymentPlan
            inputs={inputs}
            onUpdate={updateInput}
            onApplyPreset={applyPreset}
            paymentPlanTotal={paymentPlanTotal}
            paymentPlanRemaining={paymentPlanRemaining}
          />
        )

      case 6:
        return <Step6Fees inputs={inputs} onUpdate={updateInput} />

      case 7:
        return (
          <Step7Results
            analysis={analysis}
            inputs={inputs}
            onReset={resetCalculator}
          />
        )

      default:
        return null
    }
  }

  // ========== MAIN RENDER ==========
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: hideArrowsStyle }} />

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-500 text-sm font-medium mb-4">
            <Key className="w-4 h-4" />
            Free Calculator
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            <span className="text-gold-gradient">DubiKey</span> Score
          </h1>
          <p className="text-midnight-400">
            See if you can comfortably afford this property
          </p>
        </div>

        {/* Progress Bar */}
        {currentStep < TOTAL_STEPS && (
          <div className="mb-8">
            <div className="flex justify-between text-sm text-midnight-500 mb-2">
              <span>Step {currentStep} of {TOTAL_STEPS - 1}</span>
              <span>{Math.round((currentStep / (TOTAL_STEPS - 1)) * 100)}%</span>
            </div>
            <div className="h-2 bg-midnight-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-500 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / (TOTAL_STEPS - 1)) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step Content */}
        <div className="card-dark rounded-2xl p-6 md:p-8 mb-6">
          {renderStep()}
        </div>

        {/* Navigation */}
        {currentStep < TOTAL_STEPS && (
          <div className="flex gap-4">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="flex-1 py-3 px-6 rounded-xl border border-midnight-600 text-midnight-300 font-medium hover:bg-midnight-800 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
            <button
              onClick={nextStep}
              disabled={!canProceed}
              className={cn(
                'flex-1 py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all',
                canProceed
                  ? 'bg-gold-500 text-midnight-900 hover:bg-gold-400'
                  : 'bg-midnight-700 text-midnight-500 cursor-not-allowed'
              )}
            >
              {currentStep === 6 ? 'Calculate Score' : 'Continue'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
