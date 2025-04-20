import { CostCalculator } from '@src/components/calculator/CostCalculator'
import { CostBreakdown } from '@src/components/calculator/CostBreakdown'
import { CostSheet } from '@src/components/calculator/CostSheet'
import { ModelViewer } from '@src/components/visualization/ModelViewer'
import { AppLayout } from '@src/components/core/AppLayout'
import { useCostCalculation } from '@src/hooks/useCostCalculation'
import { useState } from 'react'
 
export default function HomePage() {
  const [show3D, setShow3D] = useState(false)
  const { total } = useCostCalculation()

  return (
    <AppLayout title="Prefab Cost Calculator">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <CostCalculator />
          </div>
          <CostSheet />
        </div>

        {/* Visualization Section */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                3D Model Preview
              </h3>
              <button
                onClick={() => setShow3D(!show3D)}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
              >
                {show3D ? 'Hide' : 'Show'}
              </button>
            </div>
            {show3D && <ModelViewer />}
          </div>
          <CostBreakdown />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Total Estimated Cost: ₹{total.toLocaleString('en-IN')}
        </h3>
      </div>
    </AppLayout>
  )
}