"use client"
import { useSpectacles } from "@/hooks/use-spectacles"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { SpectaclesHero } from "@/components/common/spectacles/spectacles-hero"
import { SpectaclesFilter } from "@/components/common/spectacles/spectacles-filter"
import { SpectaclesList } from "@/components/common/spectacles/spectacles-list"
import { CalendarView } from "@/components/common/spectacles/calendar/calendar-view"
import { events } from "@/lib/data/events"

export default function SpectaclesPage() {
  const { spectacles, activeFilter, setActiveFilter } = useSpectacles()

  return (
    <div className="min-h-screen">
      <SpectaclesHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <SpectaclesFilter
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>

            <TabsContent value="list" className="mt-6">
              <SpectaclesList spectacles={spectacles} />
            </TabsContent>

            <TabsContent value="calendar" className="mt-6">
              <CalendarView events={events} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
