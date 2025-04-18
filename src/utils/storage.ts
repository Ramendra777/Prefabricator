/**
 * Save project data to localStorage with Indian timestamp
 */
export const saveProject = (projectData: any): void => {
    try {
      const projects = JSON.parse(localStorage.getItem('prefabProjects') || '[]')
      const newProject = {
        ...projectData,
        savedAt: new Date().toLocaleString('en-IN')
      }
      localStorage.setItem('prefabProjects', JSON.stringify([...projects, newProject]))
    } catch (error) {
      console.error('Failed to save project:', error)
    }
  }
  
  /**
   * Load projects from localStorage
   */
  export const loadProjects = (): any[] => {
    try {
      return JSON.parse(localStorage.getItem('prefabProjects') || '[]')
    } catch (error) {
      console.error('Failed to load projects:', error)
      return []
    }
  }