// Core application types
export type MaterialType = 'steel' | 'concrete' | 'wood'
export type ConstructionType = 'steel-panel' | 'precast-concrete' | 'light-gauge-steel'
export type LocationType = 'tier1' | 'tier2' | 'tier3'

// Cost calculation types
export interface CostBreakdownItem {
  name: string
  value: number
}

export interface CostCalculationResult {
  materialCost: number
  laborCost: number
  foundationCost: number
  transportCost: number
  gst: number
  total: number
  breakdown: CostBreakdownItem[]
}

export interface CalculationInputs {
  area: number
  material: ConstructionType
  location: LocationType
  floors: number
}

// 3D Visualization types
export interface ModelPreset {
  id: number
  name: string
  type: MaterialType
  floors: number
  area: number
}

// Component Props types
export interface SavingsCardProps {
  title: string
  value: string
  icon: React.ReactNode
  description: string
}

export interface ComparisonTableRow {
  feature: string
  prefab: string
  traditional: string
  advantage: 'prefab' | 'traditional'
}

// Export all types as a single namespace
export * as AppTypes from './index'