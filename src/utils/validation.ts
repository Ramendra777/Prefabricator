/**
 * Validate construction input parameters
 */
export const validateInputs = (
    area: number,
    floors: number
  ): { isValid: boolean; errors: string[] } => {
    const errors: string[] = []
  
    if (area < 500) errors.push('Minimum area must be 500 sq.ft')
    if (area > 10000) errors.push('Maximum area limited to 10,000 sq.ft')
    if (floors < 1) errors.push('Minimum 1 floor required')
    if (floors > 3) errors.push('Maximum 3 floors allowed')
  
    return {
      isValid: errors.length === 0,
      errors
    }
  }
  
  /**
   * Validate email for Indian formats
   */
  export const validateEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|co\.in|org)$/i.test(email)
  }