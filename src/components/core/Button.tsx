import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  outline: 'border border-gray-300 hover:border-gray-400 text-gray-700'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'rounded font-medium transition-all flex items-center justify-center'
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'