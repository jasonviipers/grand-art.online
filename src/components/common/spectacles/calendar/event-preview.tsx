"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Event } from "@/types/event-type"
import { formatEventDate, formatEventTime } from "@/lib/utils"

interface EventPreviewProps {
  event: Event
}

export function EventPreview({ event }: EventPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatEventDate(event.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>
              {formatEventTime(event.time)} - {formatEventTime(event.endTime)}
            </span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location.name}</span>
          </div>
        </div>

        <p className="text-sm mb-4">{event.shortDescription}</p>

        <div className="flex items-center justify-between">
          <Link href={`/spectacles/events/${event.id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
          {event.registration.required && (
            <Button>Register Now</Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}