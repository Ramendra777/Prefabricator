type ToggleProps = {
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
    className?: string
  }
  
  export const Toggle = ({
    label,
    checked,
    onChange,
    className = ''
  }: ToggleProps) => {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        
        <button
          type="button"
          className={`${
            checked ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          onClick={() => onChange(!checked)}
        >
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </button>
      </div>
    )
  }