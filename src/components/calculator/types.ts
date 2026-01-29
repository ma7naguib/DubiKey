// ========== INPUT TYPES ==========
export interface CalculatorInputs {
  // Step 1: Goal
  purchaseGoal: 'investment' | 'enduser' | ''
  
  // Step 2: Property
  propertyPrice: string
  unitSize: string
  expectedAnnualRent: string
  
  // Step 3: Income & Expenses
  monthlyIncome: string
  monthlyExpenses: string
  currentMonthlyRent: string
  
  // Step 4: Savings
  liquidSavings: string
  
  // Step 5: Payment Plan
  downPaymentPct: string
  duringConstructionPct: string
  constructionMonths: string
  onHandoverPct: string
  postHandoverPct: string
  postHandoverMonths: string
  
  // Step 6: Fees
  dldFeePct: string
  additionalFees: string
  serviceChargePerSqft: string
}

// ========== ANALYSIS TYPES ==========
export type RiskSeverity = 'critical' | 'high' | 'medium' | 'positive' | 'info'

export interface Risk {
  severity: RiskSeverity
  text: string
}

export type Verdict = 'green' | 'yellow' | 'red'

export interface AnalysisResult {
  // Costs
  totalUpfront: number
  downPaymentAmount: number
  dldCost: number
  liquidityBuffer: number
  
  // Installments
  monthlyDuringConstruction: number
  onHandoverAmount: number
  monthlyPostHandover: number
  duringConstructionAmount: number
  postHandoverAmount: number
  totalConstructionCost: number
  
  // Service
  annualServiceCharge: number
  monthlyServiceCharge: number
  
  // Coverage
  savingsCoverConstruction: boolean
  monthsCoverageFromSavings: number
  
  // Pre-handover
  surplusPre: number
  surplusRatioPre: number
  
  // Post-handover
  surplusPost: number
  surplusRatioPost: number
  rentSaved: number
  rentalIncome: number
  
  // Investor metrics
  netAnnualRent: number
  monthlyNetRent: number
  netYield: number
  cashOnCashReturn: number
  breakEvenYears: number
  
  // Score
  score: number
  verdict: Verdict
  verdictText: string
  comfortLevel: string
  
  // Risks & CTA
  risks: Risk[]
  showCTA: boolean
  ctaText: string
  
  // Meta
  isEndUser: boolean
  constructionMonths: number
  monthlyIncome: number
  monthlyExpenses: number
  currentRent: number
  
  // Helper
  fmt: (num: number) => string
}

// ========== STEP VALIDATION ==========
export interface StepValidation {
  1: boolean
  2: boolean
  3: boolean
  4: boolean
  5: boolean
  6: boolean
}

// ========== PAYMENT PRESET ==========
export interface PaymentPreset {
  label: string
  down: number
  during: number
  handover: number
  post: number
}
