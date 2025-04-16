import { MaterialType, ConstructionType } from './index'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export interface SelectProps {
  label?: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  className?: string
  required?: boolean
}

export interface ModelGalleryProps {
  materialType?: MaterialType
  floors?: number
  showControls?: boolean
  className?: string
  autoRotate?: boolean
}

export interface PrefabModelProps {
  materialType?: MaterialType
  floors?: number
  showWireframe?: boolean
}