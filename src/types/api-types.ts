export interface MaterialCostResponse {
    material: string
    ratePerSqFt: number
    locationMultipliers: Record<string, number>
  }
  
  export interface ProjectEstimateResponse {
    id: string
    totalCost: number
    breakdown: {
      materials: number
      labor: number
      foundation: number
      transport: number
      taxes: number
    }
    createdAt: string
  }