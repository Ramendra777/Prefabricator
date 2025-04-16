import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx'

interface TableRow {
  id: number
  qty: number | string
  desc: string
  rate: number | string
  unit: string
  amount: number
}

export const generatePDF = (data: TableRow[], total: number) => {
  const doc = new jsPDF()
  
  // Title
  doc.setFontSize(18)
  doc.text('PREFAB CONSTRUCTION COST ESTIMATE', 14, 20)
  
  // Table
  autoTable(doc, {
    head: [['Item', 'Qty', 'Description', 'Rate', 'Unit', 'Amount (₹)']],
    body: data.map(row => [
      row.id,
      typeof row.qty === 'number' ? row.qty.toString() : row.qty,
      row.desc,
      typeof row.rate === 'number' ? row.rate.toString() : row.rate,
      row.unit,
      row.amount.toLocaleString('en-IN')
    ]),
    startY: 30,
    headStyles: { fillColor: [41, 128, 185] }
  })

  // Total row
  autoTable(doc, {
    body: [[
      { content: 'TOTAL COST', colSpan: 5, styles: { halign: 'right' } },
      { content: '₹' + total.toLocaleString('en-IN'), styles: { fontStyle: 'bold' } }
    ]],
    startY: (doc as any).lastAutoTable.finalY + 10
  })

  doc.save('prefab-cost-estimate.pdf')
}

export const generateExcel = (data: TableRow[], total: number) => {
  const worksheetData = [
    ['Item', 'Qty', 'Description', 'Rate', 'Unit', 'Amount (₹)'],
    ...data.map(row => [
      row.id,
      row.qty,
      row.desc,
      row.rate,
      row.unit,
      row.amount
    ]),
    ['', '', '', '', 'TOTAL COST', total]
  ]

  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData)
  
  // Add some styling
  worksheet['!cols'] = [
    { width: 5 },  // Item
    { width: 8 },  // Qty
    { width: 35 }, // Description
    { width: 10 }, // Rate
    { width: 8 },  // Unit
    { width: 15 }  // Amount
  ]

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Cost Estimate')
  XLSX.writeFile(workbook, 'prefab-cost-estimate.xlsx')
}