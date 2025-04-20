import { useCostCalculation } from '@src/hooks/useCostCalculation'
import { Input } from '@src/components/core/Input'
import { Select } from '@src/components/core/Select'
import { RangeSlider } from '@src/components/core/RangeSlider'

export function CostCalculator() {
  const { inputs, updateInputs } = useCostCalculation()

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInputs('area', Number(e.target.value))
  }

  const handleMaterialChange = (value: string) => {
    // Type assertion if needed
    updateInputs('material', value as 'steel-panel' | 'precast-concrete' | 'light-gauge-steel')
  }

  const handleFloorsChange = (value: number) => {
    updateInputs('floors', value)
  }

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
        onChange={handleAreaChange}
        min={500}
      />
      
      <Select
        label="Material System"
        value={inputs.material}
        onChange={handleMaterialChange}
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
        onChange={handleFloorsChange}
      />
    </div>
  )
}