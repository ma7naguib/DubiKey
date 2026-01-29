'use client'

import { CalculatorInputs } from '../types'

interface Step2PropertyProps {
  inputs: CalculatorInputs
  onUpdate: (field: keyof CalculatorInputs, value: string) => void
}

export default function Step2Property({ inputs, onUpdate }: Step2PropertyProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Property Details</h2>
        <p className="text-midnight-400">Tell us about the property you're considering</p>
      </div>

      <div className="space-y-4">
        {/* Property Price */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Property Price (AED) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 1,000,000"
            value={inputs.propertyPrice}
            onChange={e => onUpdate('propertyPrice', e.target.value)}
          />
        </div>

        {/* Unit Size */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Unit Size (sqft) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 800"
            value={inputs.unitSize}
            onChange={e => onUpdate('unitSize', e.target.value)}
          />
        </div>

        {/* Expected Annual Rent (Investor only) */}
        {inputs.purchaseGoal === 'investment' && (
          <div>
            <label className="block text-sm font-medium text-midnight-300 mb-2">
              Expected Annual Rent (AED) <span className="text-red-400">*</span>
            </label>
            <input
              type="number"
              className="input-dark"
              placeholder="e.g. 60,000"
              value={inputs.expectedAnnualRent}
              onChange={e => onUpdate('expectedAnnualRent', e.target.value)}
            />
            <p className="text-xs text-midnight-500 mt-1">
              Rental income starts after handover
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
