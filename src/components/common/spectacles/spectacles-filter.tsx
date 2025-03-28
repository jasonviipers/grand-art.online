"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SPECTACLE_CATEGORIES, type SpectacleCategory } from "@/types/spectacle-types"

interface SpectaclesFilterProps {
  activeFilter: SpectacleCategory
  onFilterChange: (category: SpectacleCategory) => void
}

export function SpectaclesFilter({ activeFilter, onFilterChange }: SpectaclesFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-2 justify-center mb-8"
    >
      {SPECTACLE_CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          onClick={() => onFilterChange(category)}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </motion.div>
  )
}