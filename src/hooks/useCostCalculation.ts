import { useState } from 'react'

type MaterialType = 'steel-panel' | 'precast-concrete' | 'light-gauge-steel'
type LocationType = 'tier1' | 'tier2' | 'tier3'

interface InputParams {
  area: number
  material: MaterialType
  location: LocationType
  floors: number
}

export const useCostCalculation = () => {
  const [inputs, setInputs] = useState<InputParams>({
    area: 1000,
    material: 'precast-concrete',
    location: 'tier1',
    floors: 1
  })

  const calculateCosts = () => {
    // Material rates (₹/sq.ft)
    const materialRates = {
      'steel-panel': 1400,
      'precast-concrete': 1800,
      'light-gauge-steel': 2200
    }

    // Location factors
    const locationFactors = {
      'tier1': 1.2, // Metro cities
      'tier2': 1.1, // Tier-2 cities
      'tier3': 1.0  // Rural areas
    }

    // Base calculations
    const materialCost = inputs.area * materialRates[inputs.material] * locationFactors[inputs.location]
    const laborCost = inputs.area * (inputs.material === 'light-gauge-steel' ? 400 : 350)
    const foundationCost = inputs.area * (inputs.floors > 1 ? 400 : 300)
    const subtotal = materialCost + laborCost + foundationCost
    const gst = subtotal * 0.18
    const total = subtotal + gst

    return {
      materialCost,
      laborCost,
      foundationCost,
      gst,
      total,
      breakdown: [
        { name: 'Materials', value: materialCost },
        { name: 'Labor', value: laborCost },
        { name: 'Foundation', value: foundationCost },
        { name: 'GST (18%)', value: gst }
      ]
    }
  }

  const updateInputs = <K extends keyof InputParams>(key: K, value: InputParams[K]) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }

  return {
    inputs,
    updateInputs,
    ...calculateCosts()
  }
}