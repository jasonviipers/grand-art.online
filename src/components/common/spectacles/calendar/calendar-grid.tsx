"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Event } from "@/types/event-type"
import { groupEventsByDate } from "@/lib/utils"
import { DayCell } from "./day-cell"

interface CalendarGridProps {
  events: Event[]
  onDateSelect: (date: Date) => void
}

export function CalendarGrid({ events, onDateSelect }: CalendarGridProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const eventsByDate = groupEventsByDate(events)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date || new Date())
    if (date) onDateSelect(date)
  }

  const handleMonthChange = (month: Date) => {
    setCurrentDate(month)
  }

  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleDateSelect}
        month={currentDate}
        onMonthChange={handleMonthChange}
        className="rounded-md "

        components={{
          Day: ({ date, ...props }) => {
            const dateStr = format(date, "yyyy-MM-dd")
            const dayEvents = eventsByDate[dateStr] || []
            const isSelected = selectedDate ? format(selectedDate, "yyyy-MM-dd") === dateStr : false
            return (
              <DayCell
                date={date}
                events={dayEvents}
                isSelected={isSelected}
                className={`relative p-3 cursor-pointer hover:bg-muted transition-colors ${
                  dayEvents.length > 0 ? 'font-semibold' : ''
                }`}
                onClick={() => handleDateSelect(date)}
              />
            )
          }
        }}
      />
    </div>
  )
}