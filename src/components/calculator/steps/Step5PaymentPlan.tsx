'use client'

import { CheckCircle, Target } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CalculatorInputs, PaymentPreset } from '../types'
import { toNum } from '../calculations'
import { PAYMENT_PRESETS } from '../constants'

interface Step5PaymentPlanProps {
  inputs: CalculatorInputs
  onUpdate: (field: keyof CalculatorInputs, value: string) => void
  onApplyPreset: (preset: PaymentPreset) => void
  paymentPlanTotal: number
  paymentPlanRemaining: number
}

export default function Step5PaymentPlan({
  inputs,
  onUpdate,
  onApplyPreset,
  paymentPlanTotal,
  paymentPlanRemaining,
}: Step5PaymentPlanProps) {
  const showPostMonths = toNum(inputs.postHandoverPct) > 0

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Payment Plan</h2>
        <p className="text-midnight-400">How is the payment structured? Must total 100%</p>
      </div>

      {/* Presets */}
      <div className="flex gap-2 justify-center mb-6">
        {PAYMENT_PRESETS.map(preset => (
          <button
            key={preset.label}
            onClick={() => onApplyPreset(preset)}
            className="px-4 py-2 text-sm rounded-lg border border-midnight-600 text-midnight-300 hover:bg-midnight-700 transition-colors"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Down Payment */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Down Payment (%)
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 20"
            value={inputs.downPaymentPct}
            onChange={e => onUpdate('downPaymentPct', e.target.value)}
          />
        </div>

        {/* During Construction */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            During Construction (%)
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 40"
            value={inputs.duringConstructionPct}
            onChange={e => onUpdate('duringConstructionPct', e.target.value)}
          />
        </div>

        {/* Construction Months */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Construction Period (months) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 36"
            value={inputs.constructionMonths}
            onChange={e => onUpdate('constructionMonths', e.target.value)}
          />
          {toNum(inputs.constructionMonths) > 0 && (
            <p className="text-xs text-gold-400 mt-1 flex items-center gap-1">
              <Target className="w-3 h-3" /> Handover in {inputs.constructionMonths} months
            </p>
          )}
        </div>

        {/* On Handover */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            On Handover (%)
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 20"
            value={inputs.onHandoverPct}
            onChange={e => onUpdate('onHandoverPct', e.target.value)}
          />
        </div>

        {/* Post Handover */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Post-Handover (%)
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 20"
            value={inputs.postHandoverPct}
            onChange={e => onUpdate('postHandoverPct', e.target.value)}
          />
        </div>

        {/* Post Handover Months */}
        {showPostMonths && (
          <div className="col-span-2">
            <label className="block text-sm font-medium text-midnight-300 mb-2">
              Post-Handover Period (months)
            </label>
            <input
              type="number"
              className="input-dark"
              placeholder="e.g. 24"
              value={inputs.postHandoverMonths}
              onChange={e => onUpdate('postHandoverMonths', e.target.value)}
            />
          </div>
        )}
      </div>

      {/* Total Indicator */}
      <div
        className={cn(
          'p-4 rounded-lg flex items-center justify-between',
          paymentPlanTotal === 100
            ? 'bg-emerald-500/10 border border-emerald-500/30'
            : 'bg-red-500/10 border border-red-500/30'
        )}
      >
        <span className="text-midnight-300">Total</span>
        <span
          className={cn(
            'font-bold text-lg',
            paymentPlanTotal === 100 ? 'text-emerald-400' : 'text-red-400'
          )}
        >
          {paymentPlanTotal}%
          {paymentPlanTotal === 100 && <CheckCircle className="w-5 h-5 inline ml-2" />}
          {paymentPlanTotal !== 100 && paymentPlanRemaining !== 0 && (
            <span className="text-sm font-normal ml-2">
              ({paymentPlanRemaining > 0 ? `${paymentPlanRemaining}% remaining` : 'over 100%'})
            </span>
          )}
        </span>
      </div>
    </div>
  )
}
