import { Spectacle } from "@/types/spectacle-types";

export const spectacles: Spectacle[] = [
  {
    id: 1,
    title: "The History of Painting",
    description: "A comprehensive journey through the evolution of painting techniques",
    shortDescription: "A comprehensive journey through the evolution of painting techniques",
    endTime: "16:00",
    date: "2024-03-15",
    time: "14:00",
    location: "Main Gallery",
    category: "Exhibitions",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80&w=1200",
    organizer: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "123-456-7890"
    },
    registration: {
      required: true,
      url: "/register/the-history-of-painting",
      deadline: "2024-03-14",
      capacity: 100,
      remaining: 45
    }
  },   
  {
    id: 2,
    title: "Modern Art Workshop",
    description: "Interactive workshop exploring contemporary art techniques",
    shortDescription: "Interactive workshop exploring contemporary art techniques",
    endTime: "16:00",
    date: "2024-03-20",
    time: "10:00",
    location: "Studio B",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200",
    organizer: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "123-456-7890"
    },
    registration: {
      required: true,
      url: "/register/modern-art-workshop",
      deadline: "2024-03-14",
      capacity: 50,
      remaining: 25
    }
  },
  {
    id: 3,
    title: "Contemporary Dance Performance",
    description: "A fusion of modern dance and visual arts",
    shortDescription: "A fusion of modern dance and visual arts",
    endTime: "19:30",
    date: "2024-03-25",
    time: "19:30",
    location: "Performance Hall",
    category: "Performances",
    image: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&q=80&w=1200",
    organizer: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "123-456-7890"
    },
    registration: {
      required: true,
      url: "/register/contemporary-dance-performance",
      deadline: "2024-03-14",
      capacity: 100,
      remaining: 75
    }
  },
  {
    id: 5,
    title: "Art Restoration Workshop",
    description: "Learn the techniques of art restoration from expert conservators",
    shortDescription: "Learn the techniques of art restoration from expert conservators",
    endTime: "19:30",
    date: "2024-04-05",
    time: "14:00",
    location: "Studio A",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=1200",
    organizer: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "123-456-7890"
    },
    registration: {
      required: true,
      url: "/register/art-restoration-workshop",    
      deadline: "2024-03-14",
      capacity: 50,
      remaining: 25
    }
  }
]