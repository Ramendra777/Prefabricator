import { useCostCalculation } from '@src/hooks/useCostCalculation'

export function ComparisonTable() {
  const { inputs } = useCostCalculation()
  
  // Calculate costs for both methods
  const prefabCost = inputs.area * 1800 // Average prefab rate
  const traditionalCost = inputs.area * 2200 // Average traditional rate
  
  const comparisonData = [
    {
      feature: 'Construction Time',
      prefab: '4-8 weeks',
      traditional: '6-12 months',
      advantage: 'prefab'
    },
    {
      feature: 'Material Waste',
      prefab: '5-10%',
      traditional: '15-30%',
      advantage: 'prefab'
    },
    {
      feature: 'Labor Required',
      prefab: '3-5 workers',
      traditional: '8-12 workers',
      advantage: 'prefab'
    },
    {
      feature: 'Design Flexibility',
      prefab: 'Moderate',
      traditional: 'High',
      advantage: 'traditional'
    },
    {
      feature: 'Weather Dependency',
      prefab: 'Low',
      traditional: 'High',
      advantage: 'prefab'
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Feature
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Prefab Construction
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Traditional Construction
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {comparisonData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {row.feature}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.advantage === 'prefab' ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-500 dark:text-gray-300'}`}>
                {row.prefab}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.advantage === 'traditional' ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-500 dark:text-gray-300'}`}>
                {row.traditional}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 dark:bg-gray-700 font-bold">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              Estimated Cost ({inputs.area} sq.ft)
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">
              ₹{prefabCost.toLocaleString('en-IN')}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
              ₹{traditionalCost.toLocaleString('en-IN')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}