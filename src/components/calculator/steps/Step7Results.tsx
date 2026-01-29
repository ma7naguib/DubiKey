'use client'

import { useState } from 'react'
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  BadgeCheck,
  TrendingUp,
  Shield,
  Sparkles,
  CalendarCheck,
  Video,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  Info,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnalysisResult, CalculatorInputs } from '../types'
import { CAL_LINK } from '../constants'
import { toNum } from '../calculations'

interface Step7ResultsProps {
  analysis: AnalysisResult
  inputs: CalculatorInputs
  onReset: () => void
}

export default function Step7Results({ analysis, inputs, onReset }: Step7ResultsProps) {
  const [showMethodology, setShowMethodology] = useState(false)

  const {
    score,
    verdict,
    verdictText,
    comfortLevel,
    totalUpfront,
    monthlyDuringConstruction,
    surplusPre,
    surplusRatioPre,
    liquidityBuffer,
    onHandoverAmount,
    monthlyPostHandover,
    monthlyServiceCharge,
    surplusPost,
    surplusRatioPost,
    rentSaved,
    rentalIncome,
    isEndUser,
    constructionMonths,
    monthlyIncome,
    monthlyExpenses,
    currentRent,
    netYield,
    cashOnCashReturn,
    breakEvenYears,
    risks,
    showCTA,
    ctaText,
    fmt,
  } = analysis

  const showInvestorMetrics = !isEndUser && toNum(inputs.expectedAnnualRent) > 0

  return (
    <div className="space-y-6">
      {/* Score Card */}
      <div
        className={cn(
          'rounded-2xl p-6 md:p-8 border-2 transition-all',
          verdict === 'green'
            ? 'bg-emerald-500/5 border-emerald-500/30'
            : verdict === 'yellow'
            ? 'bg-amber-500/5 border-amber-500/30'
            : 'bg-red-500/5 border-red-500/30'
        )}
      >
        <div className="flex flex-col items-center">
          {/* Score Ring */}
          <div
            className={cn(
              'w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-3 border-4 transition-transform',
              verdict === 'green'
                ? 'border-emerald-500/50 bg-emerald-500/10'
                : verdict === 'yellow'
                ? 'border-amber-500/50 bg-amber-500/10'
                : 'border-red-500/50 bg-red-500/10'
            )}
          >
            <span
              className={cn(
                'text-4xl md:text-5xl font-bold',
                verdict === 'green'
                  ? 'text-emerald-400'
                  : verdict === 'yellow'
                  ? 'text-amber-400'
                  : 'text-red-400'
              )}
            >
              {score}
            </span>
          </div>

          <div className="text-midnight-400 text-sm mb-2">{comfortLevel}</div>

          <div
            className={cn(
              'px-5 py-2 rounded-lg font-bold text-lg flex items-center gap-2',
              verdict === 'green'
                ? 'badge-green'
                : verdict === 'yellow'
                ? 'badge-yellow'
                : 'badge-red'
            )}
          >
            {verdict === 'green' && <CheckCircle className="w-5 h-5" />}
            {verdict === 'yellow' && <AlertTriangle className="w-5 h-5" />}
            {verdict === 'red' && <XCircle className="w-5 h-5" />}
            {verdictText}
          </div>

          {/* Quick Stats - 2x2 on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mt-6">
            <div className="text-center p-3 rounded-lg bg-midnight-800/50">
              <div className="text-lg font-bold text-white">{fmt(totalUpfront)}</div>
              <div className="text-xs text-midnight-400">Upfront</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-midnight-800/50">
              <div className="text-lg font-bold text-white">{fmt(monthlyDuringConstruction)}</div>
              <div className="text-xs text-midnight-400">Monthly</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-midnight-800/50">
              <div
                className={cn(
                  'text-lg font-bold',
                  surplusPre >= 0 ? 'text-emerald-400' : 'text-red-400'
                )}
              >
                {fmt(surplusPre)}
              </div>
              <div className="text-xs text-midnight-400">Surplus</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-midnight-800/50">
              <div
                className={cn(
                  'text-lg font-bold',
                  liquidityBuffer >= 0 ? 'text-white' : 'text-red-400'
                )}
              >
                {fmt(liquidityBuffer)}
              </div>
              <div className="text-xs text-midnight-400">Left</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      {showCTA && (
        <div className="bg-gradient-to-r from-gold-600/20 to-gold-500/10 border border-gold-500/30 rounded-xl p-5">
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
            <p className="text-white">{ctaText}</p>
          </div>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gold-500 text-midnight-900 font-bold py-3 px-6 rounded-lg hover:bg-gold-400 transition-all"
          >
            <CalendarCheck className="w-5 h-5" />
            Book Free Consultation
          </a>
          <div className="flex items-center justify-center gap-4 mt-3 text-xs text-midnight-400">
            <span className="flex items-center gap-1">
              <Video className="w-3 h-3" /> Video call
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> 30 min
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Free
            </span>
          </div>
        </div>
      )}

      {/* Pre-Handover Breakdown */}
      <div className="card-dark rounded-xl p-5">
        <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-gold-500" />
          During Construction ({constructionMonths} months)
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-midnight-400">Income</span>
            <span className="text-white">{fmt(monthlyIncome)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-midnight-400">− Expenses</span>
            <span className="text-red-400">-{fmt(monthlyExpenses)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-midnight-400">− Current Rent</span>
            <span className="text-red-400">-{fmt(currentRent)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-midnight-400">− Installment</span>
            <span className="text-red-400">-{fmt(monthlyDuringConstruction)}</span>
          </div>
          <div
            className={cn(
              'flex justify-between pt-2 border-t border-midnight-700 font-medium',
              surplusPre >= 0 ? 'text-emerald-400' : 'text-red-400'
            )}
          >
            <span>= Surplus ({surplusRatioPre.toFixed(0)}%)</span>
            <span>{fmt(surplusPre)}</span>
          </div>
        </div>
        {onHandoverAmount > 0 && (
          <div className="mt-3 p-2 rounded bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            Handover: {fmt(onHandoverAmount)} AED lump sum
          </div>
        )}
      </div>

      {/* Post-Handover Breakdown */}
      <div className="card-dark rounded-xl p-5">
        <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-emerald-500" />
          After Handover
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-midnight-400">Income</span>
            <span className="text-white">{fmt(monthlyIncome)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-midnight-400">− Expenses</span>
            <span className="text-red-400">-{fmt(monthlyExpenses)}</span>
          </div>
          {!isEndUser && (
            <div className="flex justify-between">
              <span className="text-midnight-400">− Rent</span>
              <span className="text-red-400">-{fmt(currentRent)}</span>
            </div>
          )}
          {monthlyPostHandover > 0 && (
            <div className="flex justify-between">
              <span className="text-midnight-400">− Installment</span>
              <span className="text-red-400">-{fmt(monthlyPostHandover)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-midnight-400">− Service Charge</span>
            <span className="text-red-400">-{fmt(monthlyServiceCharge)}</span>
          </div>
          {isEndUser && rentSaved > 0 && (
            <div className="flex justify-between text-emerald-400">
              <span>+ Rent Saved</span>
              <span>+{fmt(rentSaved)}</span>
            </div>
          )}
          {!isEndUser && rentalIncome > 0 && (
            <div className="flex justify-between text-emerald-400">
              <span>+ Rental Income</span>
              <span>+{fmt(rentalIncome)}</span>
            </div>
          )}
          <div
            className={cn(
              'flex justify-between pt-2 border-t border-midnight-700 font-medium',
              surplusPost >= 0 ? 'text-emerald-400' : 'text-red-400'
            )}
          >
            <span>= Surplus ({surplusRatioPost.toFixed(0)}%)</span>
            <span>{fmt(surplusPost)}</span>
          </div>
        </div>
      </div>

      {/* Investor Extras */}
      {showInvestorMetrics && (
        <div className="card-dark rounded-xl p-5">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-gold-500" />
            Investment Metrics
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 rounded-lg bg-midnight-800/50">
              <div className="text-lg font-bold text-gold-400">{netYield.toFixed(1)}%</div>
              <div className="text-xs text-midnight-400">Net Yield</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-midnight-800/50">
              <div className="text-lg font-bold text-gold-400">{cashOnCashReturn.toFixed(1)}%</div>
              <div className="text-xs text-midnight-400">Cash-on-Cash</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-midnight-800/50">
              <div className="text-lg font-bold text-gold-400">{breakEvenYears.toFixed(1)}</div>
              <div className="text-xs text-midnight-400">Break-even (yrs)</div>
            </div>
          </div>
        </div>
      )}

      {/* Risks */}
      {risks.length > 0 && (
        <div className="card-dark rounded-xl p-5">
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4 text-gold-500" />
            Analysis
          </h3>
          <div className="space-y-2">
            {risks.map((risk, idx) => (
              <div
                key={idx}
                className={cn(
                  'flex items-start gap-2 p-2 rounded-lg text-sm',
                  risk.severity === 'critical'
                    ? 'bg-red-500/10 text-red-300'
                    : risk.severity === 'high'
                    ? 'bg-orange-500/10 text-orange-300'
                    : risk.severity === 'positive'
                    ? 'bg-emerald-500/10 text-emerald-300'
                    : 'bg-blue-500/10 text-blue-300'
                )}
              >
                {risk.severity === 'positive' ? (
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                ) : risk.severity === 'info' ? (
                  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                )}
                <span>{risk.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Methodology */}
      <div className="card-dark rounded-xl p-4">
        <button
          onClick={() => setShowMethodology(!showMethodology)}
          className="w-full flex items-center justify-between text-midnight-400 text-sm"
        >
          <span>How is this calculated?</span>
          {showMethodology ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {showMethodology && (
          <div className="mt-3 pt-3 border-t border-midnight-700 text-xs text-midnight-500 space-y-1">
            <p>• Score based on surplus ratio + savings coverage</p>
            <p>• GO AHEAD (70+): ≥25% surplus or strong savings backup</p>
            <p>• REVIEW (40-69): 5-25% surplus or savings-dependent</p>
            <p>• NOT RECOMMENDED (&lt;40): Negative surplus, weak savings</p>
            <p>• Service charges & rental income apply from handover</p>
          </div>
        )}
      </div>

      {/* Start Over */}
      <button
        onClick={onReset}
        className="w-full py-3 text-midnight-400 text-sm hover:text-white transition-colors"
      >
        Start Over
      </button>
    </div>
  )
}
