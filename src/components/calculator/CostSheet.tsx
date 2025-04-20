import { useCostCalculation } from '@src/hooks/useCostCalculation'
import { Button } from '@src/components/core/Button'
import { generatePDF, generateExcel } from '@src/utils/export'

export function CostSheet() {
  const { breakdown, total, inputs } = useCostCalculation()

  const tableData = [
    { id: 1, qty: inputs.area, desc: 'Modular Material', rate: 2000, unit: 'sq.ft', amount: breakdown[0].value },
    { id: 2, qty: 'Lumpsum', desc: 'Installation', rate: 'Lumpsum', unit: '', amount: breakdown[1].value },
    { id: 3, qty: inputs.floors, desc: 'Foundation', rate: 300, unit: 'floor', amount: breakdown[2].value },
    { id: 4, qty: 'Lumpsum', desc: 'Transportation', rate: 'Lumpsum', unit: '', amount: 50000 },
    { id: 5, qty: '', desc: 'GST (18%)', rate: '18%', unit: '', amount: breakdown[3].value }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          Detailed Cost Sheet
        </h3>
        <div className="flex gap-2">
        <Button 
            variant="secondary" 
            onClick={() => generatePDF(
              "Cost Breakdown Report",
              tableData.map(item => ({
                name: item.desc,
                value: item.amount
              })),
              total,
              "cost-breakdown"
            )}
          >
            Export PDF
          </Button>
          <Button onClick={() => generateExcel(tableData, total)}>
            Export Excel
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Item</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Qty</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rate</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Unit</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount (₹)</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {tableData.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">{row.id}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {typeof row.qty === 'number' ? row.qty.toLocaleString('en-IN') : row.qty}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{row.desc}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {typeof row.rate === 'number' ? row.rate.toLocaleString('en-IN') : row.rate}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-white">{row.unit}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  ₹{row.amount.toLocaleString('en-IN')}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50 dark:bg-gray-700 font-bold">
              <td colSpan={5} className="px-4 py-3 text-right text-sm text-gray-900 dark:text-white">TOTAL COST</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                ₹{total.toLocaleString('en-IN')}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}