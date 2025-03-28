import { SpectacleCategory } from "./spectacle-types"

export interface Event {
  id: string
  title: string
  description: string
  shortDescription: string
  date: string
  time: string
  endTime: string
  location: {
    name: string
    address: string
    coordinates?: {
      lat: number
      lng: number
    }
  }
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
  recurring?: {
    frequency: 'daily' | 'weekly' | 'monthly'
    until: string
  }
}