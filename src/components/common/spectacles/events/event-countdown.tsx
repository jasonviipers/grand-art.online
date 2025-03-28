"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CountdownProps {
  date: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function EventCountdown({ date }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(date).getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [date])

  return (
    <div className="flex justify-center space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-primary/5 rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm text-muted-foreground capitalize">{unit}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}