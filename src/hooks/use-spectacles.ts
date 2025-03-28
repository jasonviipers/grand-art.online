"use client"

import { spectacles } from "@/lib/data/spectacles"
import { SpectacleCategory } from "@/types/spectacle-types"
import { useState, useMemo } from "react"

export function useSpectacles() {
  const [activeFilter, setActiveFilter] = useState<SpectacleCategory>("All")

  const filteredSpectacles = useMemo(() => {
    if (activeFilter === "All") return spectacles
    return spectacles.filter(spectacle => spectacle.category === activeFilter)
  }, [activeFilter])

  return {
    spectacles: filteredSpectacles,
    activeFilter,
    setActiveFilter
  }
}