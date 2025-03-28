"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {type  Spectacle } from "@/types/spectacle-types"

interface SpectacleCardProps {
  spectacle: Spectacle
}

export function SpectacleCard({ spectacle }: SpectacleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative aspect-[16/9]">
        <img
          src={spectacle.image}
          alt={spectacle.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{spectacle.title}</h3>
        <p className="text-muted-foreground mb-4">{spectacle.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{spectacle.date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>{spectacle.time}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{spectacle.location}</span>
          </div>
        </div>

        <Button className="w-full">Book Now</Button>
      </div>
    </motion.div>
  )
}