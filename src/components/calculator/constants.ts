import { CalculatorInputs, PaymentPreset } from './types'

// ========== STORAGE ==========
export const STORAGE_KEY = 'dubikey-calculator-inputs'
export const DEBOUNCE_MS = 300

// ========== INITIAL STATE ==========
export const INITIAL_INPUTS: CalculatorInputs = {
  purchaseGoal: '',
  propertyPrice: '',
  unitSize: '',
  expectedAnnualRent: '',
  monthlyIncome: '',
  monthlyExpenses: '',
  currentMonthlyRent: '',
  liquidSavings: '',
  downPaymentPct: '',
  duringConstructionPct: '',
  constructionMonths: '',
  onHandoverPct: '',
  postHandoverPct: '',
  postHandoverMonths: '',
  dldFeePct: '',
  additionalFees: '',
  serviceChargePerSqft: '',
}

// ========== PAYMENT PRESETS ==========
export const PAYMENT_PRESETS: PaymentPreset[] = [
  { label: '80/20', down: 20, during: 60, handover: 10, post: 10 },
  { label: '70/30', down: 20, during: 50, handover: 20, post: 10 },
  { label: '60/40', down: 20, during: 40, handover: 20, post: 20 },
]

// ========== QUALIFIED LEAD THRESHOLDS ==========
export const QUALIFIED_LEAD = {
  minPrice: 1_000_000,
  minSavings: 300_000,
  minIncome: 25_000,
}

// ========== SCORE THRESHOLDS ==========
export const SCORE_THRESHOLDS = {
  goAhead: 70,
  review: 40,
}

// ========== CTA ==========
export const CAL_LINK = 'https://cal.com/dubikey/30min'

// ========== TOTAL STEPS ==========
export const TOTAL_STEPS = 7
