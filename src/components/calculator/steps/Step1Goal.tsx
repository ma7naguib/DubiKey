'use client'

import { TrendingUp, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CalculatorInputs } from '../types'

interface Step1GoalProps {
  purchaseGoal: CalculatorInputs['purchaseGoal']
  onSelect: (goal: 'investment' | 'enduser') => void
}

export default function Step1Goal({ purchaseGoal, onSelect }: Step1GoalProps) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">What&apos;s your goal?</h2>
        <p className="text-midnight-400">This helps us tailor the analysis for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Investment */}
        <button
          onClick={() => onSelect('investment')}
          className={cn(
            'p-6 rounded-xl border-2 transition-all text-left',
            purchaseGoal === 'investment'
              ? 'border-gold-500 bg-gold-500/10'
              : 'border-midnight-700 bg-midnight-800/50 hover:border-midnight-600'
          )}
        >
          <TrendingUp
            className={cn(
              'w-8 h-8 mb-3',
              purchaseGoal === 'investment' ? 'text-gold-500' : 'text-midnight-400'
            )}
          />
          <div
            className={cn(
              'font-semibold text-xl mb-1',
              purchaseGoal === 'investment' ? 'text-white' : 'text-midnight-300'
            )}
          >
            Investment
          </div>
          <div className="text-sm text-midnight-400">
            Buy to rent out and earn rental income
          </div>
        </button>

        {/* End User */}
        <button
          onClick={() => onSelect('enduser')}
          className={cn(
            'p-6 rounded-xl border-2 transition-all text-left',
            purchaseGoal === 'enduser'
              ? 'border-gold-500 bg-gold-500/10'
              : 'border-midnight-700 bg-midnight-800/50 hover:border-midnight-600'
          )}
        >
          <Home
            className={cn(
              'w-8 h-8 mb-3',
              purchaseGoal === 'enduser' ? 'text-gold-500' : 'text-midnight-400'
            )}
          />
          <div
            className={cn(
              'font-semibold text-xl mb-1',
              purchaseGoal === 'enduser' ? 'text-white' : 'text-midnight-300'
            )}
          >
            End User
          </div>
          <div className="text-sm text-midnight-400">
            Buy to live in and save on rent
          </div>
        </button>
      </div>
    </div>
  )
}
