'use client'

import { CalculatorInputs } from '../types'
import { toNum, fmt } from '../calculations'

interface Step6FeesProps {
  inputs: CalculatorInputs
  onUpdate: (field: keyof CalculatorInputs, value: string) => void
}

export default function Step6Fees({ inputs, onUpdate }: Step6FeesProps) {
  const unitSize = toNum(inputs.unitSize)
  const serviceChargePerSqft = toNum(inputs.serviceChargePerSqft)
  const showAnnualServiceCharge = unitSize > 0 && serviceChargePerSqft > 0

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Fees & Costs</h2>
        <p className="text-midnight-400">Enter the exact fees for this property</p>
      </div>

      <div className="space-y-4">
        {/* DLD Fee */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            DLD Fee (%) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 4"
            value={inputs.dldFeePct}
            onChange={e => onUpdate('dldFeePct', e.target.value)}
          />
          <p className="text-xs text-midnight-500 mt-1">
            Dubai Land Department fee (typically 4%)
          </p>
        </div>

        {/* Additional Fees */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Additional Fees (AED) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 15000"
            value={inputs.additionalFees}
            onChange={e => onUpdate('additionalFees', e.target.value)}
          />
          <p className="text-xs text-midnight-500 mt-1">
            Admin, NOC, agent fees (enter 0 if none)
          </p>
        </div>

        {/* Service Charge */}
        <div>
          <label className="block text-sm font-medium text-midnight-300 mb-2">
            Service Charge (AED/sqft/year) <span className="text-red-400">*</span>
          </label>
          <input
            type="number"
            className="input-dark"
            placeholder="e.g. 15"
            value={inputs.serviceChargePerSqft}
            onChange={e => onUpdate('serviceChargePerSqft', e.target.value)}
          />
          <p className="text-xs text-midnight-500 mt-1">
            Service charges apply from handover
          </p>
          {showAnnualServiceCharge && (
            <p className="text-xs text-gold-400 mt-1">
              = {fmt(unitSize * serviceChargePerSqft)} AED/year
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
