"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Event } from "@/types/event-type"

interface DayCellProps {
  date: Date
  events: Event[]
  isSelected: boolean
  className?: string
  onClick?: () => void
}

export function DayCell({ date, events, isSelected, className, onClick }: DayCellProps) {
  const hasEvents = events.length > 0

  return (
    <motion.div
      whileHover={{ scale: hasEvents ? 1.1 : 1 }}
      className={cn(
        "relative",
        hasEvents && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          className,
          hasEvents && "font-bold text-primary",
          isSelected && "bg-primary text-primary-foreground"
        )}
      >
        {format(date, "d")}
        {hasEvents && (
          <Badge
            variant="secondary"
            className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
          >
            {events.length}
          </Badge>
        )}
      </div>
    </motion.div>
  )
}