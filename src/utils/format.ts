/**
 * Format currency for Indian locale
 */
export const formatINR = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }
  
  /**
   * Format area measurements
   */
  export const formatArea = (sqft: number): string => {
    return new Intl.NumberFormat('en-IN').format(sqft) + ' sq.ft'
  }
  
  /**
   * Format dates for Indian locale
   */
  export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date)
  }