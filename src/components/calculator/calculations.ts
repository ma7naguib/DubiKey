import { CalculatorInputs, AnalysisResult, Risk } from './types'
import { QUALIFIED_LEAD, SCORE_THRESHOLDS } from './constants'

// ========== HELPERS ==========
export const toNum = (val: string): number => {
  if (val === '') return 0
  const parsed = parseFloat(val)
  return isNaN(parsed) ? 0 : parsed
}

export const fmt = (num: number): string => {
  const rounded = Math.round(num)
  if (rounded < 0) return '-' + Math.abs(rounded).toLocaleString('en-AE')
  return rounded.toLocaleString('en-AE')
}

// ========== MAIN CALCULATION ==========
export function calculateAnalysis(inputs: CalculatorInputs): AnalysisResult {
  // ===== EXTRACT INPUTS (NO DEFAULTS!) =====
  const price = toNum(inputs.propertyPrice)
  const isEndUser = inputs.purchaseGoal === 'enduser'
  const monthlyIncome = toNum(inputs.monthlyIncome)
  const monthlyExpenses = toNum(inputs.monthlyExpenses)
  const currentRent = toNum(inputs.currentMonthlyRent)
  const liquidSavings = toNum(inputs.liquidSavings)
  const unitSize = toNum(inputs.unitSize)
  const expectedAnnualRent = toNum(inputs.expectedAnnualRent)

  // Payment Plan
  const downPct = toNum(inputs.downPaymentPct)
  const duringPct = toNum(inputs.duringConstructionPct)
  const constructionMonths = toNum(inputs.constructionMonths)
  const onHandoverPct = toNum(inputs.onHandoverPct)
  const postPct = toNum(inputs.postHandoverPct)
  const postMonths = toNum(inputs.postHandoverMonths) || 24

  // Fees (ONLY if entered - NO DEFAULTS!)
  const dldFeePct = toNum(inputs.dldFeePct)
  const additionalFees = toNum(inputs.additionalFees)
  const serviceChargePerSqft = toNum(inputs.serviceChargePerSqft)

  // ===== UPFRONT COSTS =====
  const downPaymentAmount = price * (downPct / 100)
  const dldCost = price * (dldFeePct / 100)
  const totalUpfront = downPaymentAmount + dldCost + additionalFees
  const liquidityBuffer = liquidSavings - totalUpfront

  // ===== INSTALLMENTS =====
  const duringConstructionAmount = price * (duringPct / 100)
  const monthlyDuringConstruction = 
    constructionMonths > 0 && duringPct > 0
      ? duringConstructionAmount / constructionMonths
      : 0

  const onHandoverAmount = price * (onHandoverPct / 100)

  const postHandoverAmount = price * (postPct / 100)
  const monthlyPostHandover = 
    postMonths > 0 && postPct > 0
      ? postHandoverAmount / postMonths
      : 0

  // ===== SERVICE CHARGE =====
  const annualServiceCharge = 
    unitSize > 0 && serviceChargePerSqft > 0
      ? unitSize * serviceChargePerSqft
      : 0
  const monthlyServiceCharge = annualServiceCharge / 12

  // ===== RENTAL (Investor) =====
  const grossAnnualRent = expectedAnnualRent
  const netAnnualRent = grossAnnualRent - annualServiceCharge
  const monthlyNetRent = Math.max(0, netAnnualRent / 12)
  const netYield = price > 0 ? (Math.max(0, netAnnualRent) / price) * 100 : 0

  // ===== COVERAGE CALCULATION =====
  const totalConstructionCost = duringConstructionAmount + onHandoverAmount
  const savingsCoverConstruction = liquidityBuffer >= totalConstructionCost
  const savingsCoverWithBuffer = liquidityBuffer >= totalConstructionCost * 1.2
  const monthsCoverageFromSavings = 
    monthlyDuringConstruction > 0
      ? liquidityBuffer / monthlyDuringConstruction
      : 0

  // ===== PRE-HANDOVER SURPLUS =====
  const preHandoverExpenses = monthlyExpenses + currentRent + monthlyDuringConstruction
  const surplusPre = monthlyIncome - preHandoverExpenses
  const surplusRatioPre = monthlyIncome > 0 ? (surplusPre / monthlyIncome) * 100 : 0

  // ===== POST-HANDOVER SURPLUS =====
  let surplusPost: number
  let surplusRatioPost: number
  let rentSaved = 0
  let rentalIncome = 0

  if (isEndUser) {
    // End User: saves rent, pays service charge
    rentSaved = currentRent
    const postExpenses = monthlyExpenses + monthlyPostHandover + monthlyServiceCharge
    surplusPost = monthlyIncome - postExpenses
    surplusRatioPost = monthlyIncome > 0 ? (surplusPost / monthlyIncome) * 100 : 0
  } else {
    // Investor: still pays rent, gets rental income
    rentalIncome = monthlyNetRent
    const postExpenses = monthlyExpenses + currentRent + monthlyPostHandover - monthlyNetRent
    surplusPost = monthlyIncome - postExpenses
    surplusRatioPost = monthlyIncome > 0 ? (surplusPost / monthlyIncome) * 100 : 0
  }

  // ===== INVESTOR METRICS =====
  const totalInvestment = totalUpfront + duringConstructionAmount + onHandoverAmount
  const annualCashFlow = netAnnualRent - (monthlyPostHandover * 12)
  const cashOnCashReturn = totalInvestment > 0 ? (annualCashFlow / totalInvestment) * 100 : 0
  const breakEvenYears = netAnnualRent > 0 ? totalInvestment / netAnnualRent : 0

  // ===== SCORE CALCULATION =====
  let score = 0
  const risks: Risk[] = []

  // Check 1: Can't afford upfront
  if (liquidityBuffer < 0) {
    score = 0
    risks.push({
      severity: 'critical',
      text: `Insufficient savings: Need ${fmt(totalUpfront)} AED, have ${fmt(liquidSavings)} AED`,
    })
  }
  // Check 2: Negative/zero surplus BUT strong savings cover construction
  else if (surplusPre <= 0 && savingsCoverConstruction) {
    // Score range 55-75 based on buffer ratio
    const bufferRatio = liquidityBuffer / totalConstructionCost
    score = 55 + Math.min(20, bufferRatio * 15)

    risks.push({
      severity: 'info',
      text: `Cash flow depends on savings buffer (${fmt(liquidityBuffer)} AED covers ${Math.round(monthsCoverageFromSavings)} months)`,
    })

    if (surplusPre < 0) {
      risks.push({
        severity: 'high',
        text: `Monthly deficit of ${fmt(Math.abs(surplusPre))} AED during construction`,
      })
    }
  }
  // Check 3: Negative/zero surplus AND weak savings
  else if (surplusPre <= 0) {
    score = Math.max(0, 20 + surplusPre / 500)
    risks.push({
      severity: 'critical',
      text: `Monthly deficit of ${fmt(Math.abs(surplusPre))} AED without sufficient savings backup`,
    })
  }
  // Check 4: Positive surplus - score based on ratio
  else {
    if (surplusRatioPre >= 40) {
      score = 90 + Math.min(10, (surplusRatioPre - 40) / 4)
      risks.push({
        severity: 'positive',
        text: `Excellent: ${surplusRatioPre.toFixed(0)}% of income remains (${fmt(surplusPre)} AED/month)`,
      })
    } else if (surplusRatioPre >= 25) {
      score = 75 + (surplusRatioPre - 25) * 0.6
      risks.push({
        severity: 'positive',
        text: `Strong: ${surplusRatioPre.toFixed(0)}% surplus (${fmt(surplusPre)} AED/month)`,
      })
    } else if (surplusRatioPre >= 15) {
      score = 65 + (surplusRatioPre - 15)
      risks.push({
        severity: 'positive',
        text: `Good: ${surplusRatioPre.toFixed(0)}% surplus (${fmt(surplusPre)} AED/month)`,
      })
    } else if (surplusRatioPre >= 10) {
      if (savingsCoverWithBuffer) {
        score = 70 + (surplusRatioPre - 10) * 2
        risks.push({
          severity: 'positive',
          text: `${surplusRatioPre.toFixed(0)}% surplus with strong savings backup`,
        })
      } else {
        score = 55 + (surplusRatioPre - 10) * 2
        risks.push({
          severity: 'info',
          text: `${surplusRatioPre.toFixed(0)}% surplus - consider building more savings`,
        })
      }
    } else if (surplusRatioPre >= 5) {
      score = 40 + (surplusRatioPre - 5) * 3
      risks.push({
        severity: 'info',
        text: `Tight: ${surplusRatioPre.toFixed(0)}% surplus - manageable with discipline`,
      })
    } else {
      score = 30 + surplusRatioPre * 2
      risks.push({
        severity: 'high',
        text: `Very tight: Only ${surplusRatioPre.toFixed(1)}% surplus`,
      })
    }
  }

  // Additional risk: Large handover payment
  if (onHandoverAmount > 0 && liquidityBuffer < onHandoverAmount * 1.5) {
    risks.push({
      severity: 'info',
      text: `Large handover payment: ${fmt(onHandoverAmount)} AED due at key collection`,
    })
  }

  // End user bonus info
  if (isEndUser && currentRent > 0 && score > 0) {
    risks.push({
      severity: 'positive',
      text: `After handover: Save ${fmt(currentRent)} AED/month (no more rent)`,
    })
  }

  // Investor yield info
  if (!isEndUser && expectedAnnualRent > 0 && score > 0) {
    if (netYield >= 5) {
      risks.push({
        severity: 'positive',
        text: `Good yield: ${netYield.toFixed(1)}% net (${fmt(monthlyNetRent)} AED/month)`,
      })
    } else if (netYield > 0) {
      risks.push({
        severity: 'info',
        text: `Yield: ${netYield.toFixed(1)}% net (${fmt(monthlyNetRent)} AED/month)`,
      })
    }
  }

  // Finalize score (0-100)
  score = Math.round(Math.max(0, Math.min(100, score)))

  // ===== VERDICT =====
  let verdict: 'green' | 'yellow' | 'red'
  let verdictText: string
  let comfortLevel: string

  if (score >= SCORE_THRESHOLDS.goAhead) {
    verdict = 'green'
    verdictText = 'GO AHEAD'
    comfortLevel = score >= 85 ? 'Very Comfortable' : 'Comfortable'
  } else if (score >= SCORE_THRESHOLDS.review) {
    verdict = 'yellow'
    verdictText = 'REVIEW OPTIONS'
    comfortLevel = score >= 55 ? 'Manageable' : 'Tight Budget'
  } else {
    verdict = 'red'
    verdictText = 'NOT RECOMMENDED'
    comfortLevel = score >= 20 ? 'High Risk' : 'Not Affordable'
  }

  // ===== CTA VISIBILITY =====
  // Show for GO AHEAD, REVIEW OPTIONS
  // Also show for NOT RECOMMENDED if user is qualified lead
  const isQualifiedLead =
    price >= QUALIFIED_LEAD.minPrice &&
    liquidSavings >= QUALIFIED_LEAD.minSavings &&
    monthlyIncome >= QUALIFIED_LEAD.minIncome

  const showCTA =
    verdict === 'green' ||
    verdict === 'yellow' ||
    (verdict === 'red' && isQualifiedLead)

  const ctaText =
    verdict === 'green'
      ? "Great numbers! Let's find you the best deal."
      : verdict === 'yellow'
      ? "Let's explore better options for your budget."
      : "You may be overreaching on price. Let's find a better fit."

  // Limit risks to 4 max, sorted by severity
  const severityOrder = { critical: 0, high: 1, medium: 2, info: 3, positive: 4 }
  const sortedRisks = risks
    .sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity])
    .slice(0, 4)

  return {
    // Costs
    totalUpfront,
    downPaymentAmount,
    dldCost,
    liquidityBuffer,
    // Installments
    monthlyDuringConstruction,
    onHandoverAmount,
    monthlyPostHandover,
    duringConstructionAmount,
    postHandoverAmount,
    totalConstructionCost,
    // Service
    annualServiceCharge,
    monthlyServiceCharge,
    // Coverage
    savingsCoverConstruction,
    monthsCoverageFromSavings,
    // Pre-handover
    surplusPre,
    surplusRatioPre,
    // Post-handover
    surplusPost,
    surplusRatioPost,
    rentSaved,
    rentalIncome,
    // Investor
    netAnnualRent,
    monthlyNetRent,
    netYield,
    cashOnCashReturn,
    breakEvenYears,
    // Score
    score,
    verdict,
    verdictText,
    comfortLevel,
    // Risks & CTA
    risks: sortedRisks,
    showCTA,
    ctaText,
    // Meta
    isEndUser,
    constructionMonths,
    monthlyIncome,
    monthlyExpenses,
    currentRent,
    // Helper
    fmt,
  }
}
