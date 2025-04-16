import { CostBreakdown } from '@/src/components/calculator/CostBreakdown'
import { CostCalculator } from '@/src/components/calculator/CostCalculator'
import { CostSheet } from '@/src/components/calculator/CostSheet'
import { ModelViewer } from '@/src/components/visualization/ModelViewer'
import { AppLayout } from '@/src/components/core/AppLayout'

export default function HomePage() {
  return (
    <AppLayout title="Prefab Cost Estimator">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <CostCalculator />
          </div>
          <CostSheet />
        </div>

        {/* Right Column - Outputs */}
        <div className="space-y-6">
          <ModelViewer />
          <CostBreakdown />
        </div>
      </div>
    </AppLayout>
  )
}