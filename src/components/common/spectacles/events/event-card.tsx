"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

interface Event {
  id: number
  title: string
  date: string
  image: string
  description: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
          <div className="flex items-center text-muted-foreground mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formattedDate}</span>
          </div>
          <p className="text-muted-foreground mb-6">{event.description}</p>
          <Button className="w-full md:w-auto">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  )
}