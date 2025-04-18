import { ConstructionType, LocationType, CostCalculationResult } from '@/types'

/**
 * Calculate prefab construction costs with Indian market rates
 */
export const calculatePrefabCost = (
  area: number,
  material: ConstructionType,
  location: LocationType,
  floors: number
): CostCalculationResult => {
  // Material rates (₹/sq.ft) - Indian market prices
  const MATERIAL_RATES: Record<ConstructionType, number> = {
    'steel-panel': 1400,
    'precast-concrete': 1800,
    'light-gauge-steel': 2200
  }

  // Location multipliers for Indian regions
  const LOCATION_MULTIPLIERS: Record<LocationType, number> = {
    tier1: 1.2,  // Metro cities
    tier2: 1.1,  // Tier-2 cities
    tier3: 1.0   // Rural areas
  }

  // Labor costs (₹/sq.ft) - Indian labor rates
  const LABOR_RATES: Record<ConstructionType, number> = {
    'steel-panel': 350,
    'precast-concrete': 380,
    'light-gauge-steel': 400
  }

  // Base calculations
  const materialCost = area * MATERIAL_RATES[material] * LOCATION_MULTIPLIERS[location]
  const laborCost = area * LABOR_RATES[material]
  const foundationCost = area * (floors > 1 ? 400 : 300) // Stronger foundation for multi-floor
  const transportCost = location === 'tier1' ? 25000 : location === 'tier2' ? 35000 : 50000 // Transportation in ₹

  // Indian taxes
  const subtotal = materialCost + laborCost + foundationCost + transportCost
  const gst = subtotal * 0.18 // 18% GST
  const total = subtotal + gst

  return {
    materialCost,
    laborCost,
    foundationCost,
    transportCost,
    gst,
    total,
    breakdown: [
      { name: 'Materials', value: materialCost },
      { name: 'Labor', value: laborCost },
      { name: 'Foundation', value: foundationCost },
      { name: 'Transport', value: transportCost },
      { name: 'GST (18%)', value: gst }
    ]
  }
}

/**
 * Calculate traditional construction costs for comparison
 */
export const calculateTraditionalCost = (area: number): number => {
  // Average traditional construction cost in India (₹/sq.ft)
  return area * 2200 // Conservative estimate
}