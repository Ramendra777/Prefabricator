type Option = {
    value: string
    label: string
  }
  
  type SelectProps = {
    label?: string
    value: string
    onChange: (value: string) => void
    options: Option[]
    className?: string
    required?: boolean
  }
  
  export const Select = ({
    label,
    value,
    onChange,
    options,
    className = '',
    required = false
  }: SelectProps) => {
    return (
      <div className={`space-y-1 ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
            {required && <span className="text-red-500"> *</span>}
          </label>
        )}
        
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }