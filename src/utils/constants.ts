import { ConstructionType, LocationType } from '@/types'

export const MATERIAL_OPTIONS: { value: ConstructionType; label: string }[] = [
  { value: 'steel-panel', label: 'Steel Frame System' },
  { value: 'precast-concrete', label: 'Precast Concrete' },
  { value: 'light-gauge-steel', label: 'Light Gauge Steel' }
]

export const LOCATION_OPTIONS: { value: LocationType; label: string }[] = [
  { value: 'tier1', label: 'Metro City (Delhi, Mumbai, etc.)' },
  { value: 'tier2', label: 'State Capital' },
  { value: 'tier3', label: 'Small Town/Rural' }
]

export const DEFAULT_VALUES = {
  area: 1000,
  material: 'precast-concrete' as ConstructionType,
  location: 'tier1' as LocationType,
  floors: 1
}