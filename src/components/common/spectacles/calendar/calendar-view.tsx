"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarGrid } from "./calendar-grid"
import type { Event } from "@/types/event-type"
import { EventList } from "./event-list"


interface CalendarViewProps {
  events: Event[]
}

export function CalendarView({ events }: CalendarViewProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  return (
    <div className="grid md:grid-cols-[400px,1fr] gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <CalendarGrid
          events={events}
          onDateSelect={setSelectedDate}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-card rounded-lg p-6 shadow-sm"
      >
        <EventList
          events={events}
          selectedDate={selectedDate}
        />
      </motion.div>
    </div>
  )
}