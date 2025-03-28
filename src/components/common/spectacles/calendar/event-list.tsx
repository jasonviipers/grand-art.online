"use client"

import { motion, AnimatePresence } from "framer-motion"
import { EventPreview } from "./event-preview"
import { Event } from "@/types/event-type"
import { formatEventDate, getEventsByDate } from "@/lib/utils"


interface EventListProps {
  events: Event[]
  selectedDate: Date
}

export function EventList({ events, selectedDate }: EventListProps) {
  const selectedEvents = getEventsByDate(events, selectedDate)

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold mb-4">
        Events for {formatEventDate(selectedDate.toISOString().split('T')[0])}
      </h3>
      
      <AnimatePresence mode="wait">
        {selectedEvents.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {selectedEvents.map(event => (
              <EventPreview key={event.id} event={event} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-muted-foreground py-12"
          >
            No events scheduled for this date
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}