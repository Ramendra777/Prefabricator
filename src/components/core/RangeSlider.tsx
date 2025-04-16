type RangeSliderProps = {
    label: string
    value: number
    onChange: (value: number) => void
    min: number
    max: number
    step?: number
    className?: string
  }
  
  export const RangeSlider = ({
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    className = ''
  }: RangeSliderProps) => {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {value}
          </span>
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
        />
        
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    )
  }