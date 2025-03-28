export interface Spectacle {
    id: number
    title: string
    description: string
    shortDescription: string
    endTime: string
    date: string
    time: string
    location: string
    category: SpectacleCategory
    image: string
    organizer: {
      name: string
      email: string
      phone: string
    }
    registration: {
      required: boolean
      url?: string
      deadline?: string
      capacity?: number
      remaining?: number
    }
  }
  
  export const SPECTACLE_CATEGORIES = [
    "All",
    "Exhibitions",
    "Performances",
    "Workshops",
    "Lectures"
  ] as const
  
  export type SpectacleCategory = typeof SPECTACLE_CATEGORIES[number]