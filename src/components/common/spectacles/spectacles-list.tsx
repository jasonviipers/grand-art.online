"use client"

import { motion } from "framer-motion"
import { SpectacleCard } from "./spectacle-card"
import { type Spectacle } from "@/types/spectacle-types"

interface SpectaclesListProps {
  spectacles: Spectacle[]
}

export function SpectaclesList({ spectacles }: SpectaclesListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {spectacles.map((spectacle, index) => (
        <motion.div
          key={spectacle.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <SpectacleCard spectacle={spectacle} />
        </motion.div>
      ))}
    </div>
  )
}