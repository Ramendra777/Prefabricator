import { CalculationInputs, CostCalculationResult } from './index'

export interface AppState {
  inputs: CalculationInputs
  results: CostCalculationResult
  savedProjects: ProjectSummary[]
}

export interface ProjectSummary {
  id: string
  name: string
  area: number
  totalCost: number
  lastModified: string
}

export interface AppContextType {
  state: AppState
  updateInputs: (key: keyof CalculationInputs, value: any) => void
  calculateCosts: () => void
  saveProject: (name: string) => void
  loadProject: (id: string) => void
}