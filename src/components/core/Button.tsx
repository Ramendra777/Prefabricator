import { ReactNode } from 'react'
import { FiDownload, FiPrinter, FiPlus, FiMinus } from 'react-icons/fi'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'download' | 'print' | 'plus' | 'minus'
  className?: string
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'rounded-lg font-medium transition-all flex items-center justify-center gap-2'
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md',
    secondary: 'bg-green-600 hover:bg-green-700 text-white shadow-md',
    outline: 'border border-gray-300 hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400',
    ghost: 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
  }
  
  const iconMap = {
    download: <FiDownload />,
    print: <FiPrinter />,
    plus: <FiPlus />,
    minus: <FiMinus />
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {icon && iconMap[icon]}
      {children}
    </button>
  )
}