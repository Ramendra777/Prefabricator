import { useCostCalculation } from '@/hooks'
import { Input, Select, RangeSlider } from '@/components/core'

export function CostCalculator() {
  const { inputs, updateInputs } = useCostCalculation()

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Project Specifications
      </h2>
      
      <Input
        label="Built-up Area (sq.ft)"
        name="area"
        type="number"
        value={inputs.area}
        onChange={(e) => updateInputs('area', Number(e.target.value))}
        min="500"
      />
      
      <Select
        label="Material System"
        value={inputs.material}
        onChange={(value) => updateInputs('material', value)}
        options={[
          { value: 'steel-panel', label: 'Steel Frame' },
          { value: 'precast-concrete', label: 'Precast Concrete' },
          { value: 'light-gauge-steel', label: 'Light Gauge Steel' }
        ]}
      />
      
      <RangeSlider
        label={`Floors: ${inputs.floors}`}
        min={1}
        max={3}
        value={inputs.floors}
        onChange={(value) => updateInputs('floors', value)}
      />
    </div>
  )
}