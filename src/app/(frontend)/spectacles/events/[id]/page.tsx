"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Mail, Phone, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { addToCalendar } from "@/lib/utils"
import { events } from "@/lib/data/events"
import { use } from "react"

interface EventPageProps {
  params: Promise<{
    id: string
  }>
}

export default  function EventPage({ params }: EventPageProps) {
  const paramsData = use(params);
  const event = events.find(e => e.id === paramsData.id)

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="relative h-[400px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-[2fr,1fr] gap-12"
        >
          {/* Main Content */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{event.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">
              {event.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3" />
                <span>{format(new Date(event.date), "EEEE, MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                <span>{event.time} - {event.endTime}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>{event.location.name}<br />{event.location.address}</span>
              </div>
            </div>

            {/* Organizer Info */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Event Organizer</h3>
              <div className="space-y-2">
                <p>{event.organizer.name}</p>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${event.organizer.email}`} className="text-primary">
                    {event.organizer.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${event.organizer.phone}`} className="text-primary">
                    {event.organizer.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {event.registration.required && (
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold mb-4">Registration</h3>
                {event.registration.remaining !== undefined && (
                  <p className="text-sm mb-4">
                    {event.registration.remaining} spots remaining
                  </p>
                )}
                <Button className="w-full">Register Now</Button>
              </div>
            )}

            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold mb-4">Add to Calendar</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => addToCalendar(event)}
                >
                  Add to Calendar
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigator.share({
                    title: event.title,
                    text: event.shortDescription,
                    url: window.location.href
                  })}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Event
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}