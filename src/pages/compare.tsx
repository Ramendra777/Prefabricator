import { AppLayout } from '@src/components/core/AppLayout'
import { ComparisonTable } from '@src/components/comparison/ComparisonTable'
import { SavingsCard } from '@src/components/comparison/SavingsCard'
import { FiClock, FiDollarSign, FiFeather } from 'react-icons/fi'

export default function ComparisonPage() {
  return (
    <AppLayout title="Prefab vs Traditional Comparison">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Construction Method Comparison
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          See how prefab compares to traditional construction
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SavingsCard 
            title="Cost Savings" 
            value="15-25%" 
            icon={<FiDollarSign className="text-green-500" />}
            description="Typical savings on material and labor"
          />
          <SavingsCard 
            title="Time Savings" 
            value="6-9 months" 
            icon={<FiClock className="text-blue-500" />}
            description="Faster project completion"
          />
          <SavingsCard 
            title="Waste Reduction" 
            value="30-50%" 
            icon={<FiFeather className="text-emerald-500" />}
            description="Less material waste on site"
          />
        </div>
        
        <ComparisonTable />
      </div>
    </AppLayout>
  )
}