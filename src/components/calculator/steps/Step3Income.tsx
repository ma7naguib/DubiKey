'use client'

import { CalculatorInputs } from '../types'
import { toNum } from '../calculations'

interface Step3IncomeProps {
  inputs: CalculatorInputs
  onUpdate: (field: keyof CalculatorInputs, value: string) => void
}

export default function Step3Income({ inputs, onUpdate }: Step3IncomeProps) {
  const showRentSavingsHint =
    inputs.purchaseGoal === 'enduser' && toNum(inputs.currentMonthlyRent) > 0

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Income & Expenses</h2>
        <p className="text-midnight-400">We need this to calculate your monthly cash flow</p>
      </div>

      <div className="space-y-4">
        {/* Monthly Income */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Monthly Income (AED) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 30,000"
            value={inputs.monthlyIncome}
            onChange={e => onUpdate('monthlyIncome', e.target.value)}
          />
        </div>

        {/* Monthly Expenses */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Monthly Expenses (AED) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 10,000 (excluding rent)"
            value={inputs.monthlyExpenses}
            onChange={e => onUpdate('monthlyExpenses', e.target.value)}
          />
          <p className="text-xs text-midnight-500 mt-1">
            Exclude your rent — enter it separately below
          </p>
        </div>

        {/* Current Monthly Rent */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Current Monthly Rent (AED) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 5,000 (enter 0 if you own)"
            value={inputs.currentMonthlyRent}
            onChange={e => onUpdate('currentMonthlyRent', e.target.value)}
          />
          {showRentSavingsHint && (
            <p className="text-xs text-emerald-400 mt-1">
              ✓ This becomes savings after you move in!
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
