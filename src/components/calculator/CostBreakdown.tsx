import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useCostCalculation } from '@src/hooks/useCostCalculation'

ChartJS.register(ArcElement, Tooltip, Legend)

export function CostBreakdown() {
  const { breakdown, total } = useCostCalculation()

  const data = {
    labels: breakdown.map(item => item.name),
    datasets: [{
      data: breakdown.map(item => item.value),
      backgroundColor: [
        '#3B82F6', // Material
        '#10B981', // Labor
        '#F59E0B', // Foundation
        '#6366F1', // Transport
        '#EF4444'  // GST
      ]
    }]
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Cost Breakdown
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64">
          <Pie data={data} />
        </div>
        
        <div className="space-y-3">
          {breakdown.map((item) => (
            <div key={item.name} className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
              <span className="font-medium">₹{item.value.toLocaleString('en-IN')}</span>
            </div>
          ))}
          
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between font-bold text-lg">
              <span>Total Cost</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}