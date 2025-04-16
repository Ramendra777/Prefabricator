import { ReactNode } from 'react'

interface SavingsCardProps {
  title: string
  value: string
  icon: ReactNode
  description: string
}

export function SavingsCard({ title, value, icon, description }: SavingsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        </div>
      </div>
    </div>
  )
}