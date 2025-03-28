import { Event } from "@/types/event-type";

export const events: Event[] = [
  {
    id: "1",
    title: "Renaissance Masters Exhibition",
    description: "A comprehensive journey through the evolution of Renaissance art, featuring original works from the most influential artists of the period. This exhibition provides a unique opportunity to witness the technical brilliance and artistic innovation that defined this pivotal era in art history.",
    shortDescription: "Experience the brilliance of Renaissance art in this unique exhibition.",
    date: "2024-12-15",
    time: "14:00",
    endTime: "18:00",
    location: {
      name: "Main Gallery",
      address: "123 Art Gallery Street, Paris",
      coordinates: {
        lat: 48.8606,
        lng: 2.3376
      }
    },
    category: "Exhibitions",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?auto=format&fit=crop&q=80&w=1200",
    organizer: {
      name: "Marie Laurent",
      email: "marie@grandart.com",
      phone: "+33 1 23 45 67 89"
    },
    registration: {
      required: true,
      url: "/register/renaissance-masters",
      deadline: "2024-03-14",
      capacity: 100,
      remaining: 45
    }
  },
  {
    id: "2",
    title: "Modern Art Workshop",
    description: "Join our expert instructors for an immersive workshop exploring contemporary art techniques. Perfect for both beginners and intermediate artists, this hands-on session will help you develop your unique artistic voice while learning from established contemporary artists.",
    shortDescription: "Interactive workshop exploring contemporary art techniques",
    date: "2024-12-20",
    time: "10:00",
    endTime: "16:00",
    location: {
      name: "Studio B",
      address: "45 Rue des Arts, Paris",
      coordinates: {
        lat: 48.8584,
        lng: 2.3386
      }
    },
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200",
    organizer: {
      name: "Jean Dubois",
      email: "jean@grandart.com",
      phone: "+33 1 23 45 67 90"
    },
    registration: {
      required: true,
      url: "/register/modern-art-workshop",
      deadline: "2024-03-19",
      capacity: 20,
      remaining: 8
    }
  },
  {
    id: "3",
    title: "Art History Lecture Series",
    description: "Delve deep into the Renaissance period with our distinguished art historians. This lecture series will explore the social, political, and cultural contexts that shaped one of art history's most significant periods.",
    shortDescription: "Expert insights into the Renaissance period",
    date: "2024-12-25",
    time: "15:00",
    endTime: "17:00",
    location: {
      name: "Lecture Hall",
      address: "67 Boulevard des Arts, Paris",
      coordinates: {
        lat: 48.8566,
        lng: 2.3522
      }
    },
    category: "Lectures",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    organizer: {
      name: "Sophie Martin",
      email: "sophie@grandart.com",
      phone: "+33 1 23 45 67 91"
    },
    registration: {
      required: true,
      url: "/register/art-history-lecture",
      capacity: 150,
      remaining: 75
    }
  }
]