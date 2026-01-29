'use client'

import { CalculatorInputs } from '../types'

interface Step4SavingsProps {
  inputs: CalculatorInputs
  onUpdate: (field: keyof CalculatorInputs, value: string) => void
}

export default function Step4Savings({ inputs, onUpdate }: Step4SavingsProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Savings</h2>
        <p className="text-midnight-400">Cash available for down payment and fees</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-midnight-300 mb-2">
          Liquid Savings (AED) <span className="text-red-400">*</span>
        </label>
        <input
          type="number"
          className="input-dark text-xl py-4"
          placeholder="e.g. 300,000"
          value={inputs.liquidSavings}
          onChange={e => onUpdate('liquidSavings', e.target.value)}
        />
        <p className="text-xs text-midnight-500 mt-2">
          Include savings accounts, fixed deposits, and easily liquidated investments
        </p>
      </div>
    </div>
  )
}
