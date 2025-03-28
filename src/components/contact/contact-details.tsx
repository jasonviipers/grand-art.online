"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Art Gallery Street, Paris, France"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+33 1 23 45 67 89"
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@grandart.com"
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Tuesday - Sunday: 10:00 - 18:00"
  }
]

export function ContactDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon
        return (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{detail.title}</h3>
                <p className="text-muted-foreground">{detail.content}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}