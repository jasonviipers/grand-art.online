"use client"

import { motion } from "framer-motion"

export function SpectaclesHero() {
  return (
    <div className="relative h-[60vh] min-h-[500px] bg-black">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=2400"
          alt="Art Performance"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="relative h-full flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Spectacles</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
            Experience the fusion of art and performance in our curated exhibitions
          </p>
        </motion.div>
      </div>
    </div>
  )
}