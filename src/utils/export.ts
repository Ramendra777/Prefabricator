import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx'
import type { CostBreakdownItem } from '@/types/index'

/**
 * Generate PDF report with Indian number formatting
 */
export const generatePDF = (
  title: string,
  breakdown: CostBreakdownItem[],
  total: number,
  fileName = 'prefab-estimate.pdf'
): void => {
  const doc = new jsPDF()
  
  // Title with Indian rupee symbol
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text(title, 14, 20)
  
  // Cost breakdown table
  autoTable(doc, {
    head: [['Item', 'Amount (₹)']],
    body: breakdown.map(item => [
      item.name,
      new Intl.NumberFormat('en-IN').format(item.value)
    ]),
    startY: 30,
    styles: { 
      font: 'helvetica',
      fontSize: 10,
      cellPadding: 5
    },
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: 255,
      fontStyle: 'bold'
    }
  })

  // Total with Indian formatting
  autoTable(doc, {
    body: [[
      { 
        content: 'TOTAL COST', 
        styles: { fontStyle: 'bold', halign: 'right' } 
      },
      { 
        content: '₹' + new Intl.NumberFormat('en-IN').format(total),
        styles: { fontStyle: 'bold' }
      }
    ]],
    startY: (doc as any).lastAutoTable.finalY + 10
  })

  doc.save(fileName)
}

/**
 * Export to Excel with Indian formatting
 */
export const generateExcel = (
  data: any[],
  total?: number,  // Make total optional
  sheetName = 'Cost Estimate',
  fileName = 'prefab-estimate.xlsx'
): void => {
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(data)

  // Add Indian rupee format
  const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1')
  for (let C = range.s.c; C <= range.e.c; ++C) {
    const header = XLSX.utils.encode_col(C) + '1'
    if (worksheet[header]?.v.includes('Amount')) {
      for (let R = range.s.r + 1; R <= range.e.r; ++R) {
        const cell = XLSX.utils.encode_cell({ r: R, c: C })
        if (worksheet[cell]) {
          worksheet[cell].z = '[₹]#,##0.00'
        }
      }
    }
  }

  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)
  XLSX.writeFile(workbook, fileName)
}