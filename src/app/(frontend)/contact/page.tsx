"use client"

import { ContactDetails } from "@/components/contact/contact-details"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"
import { motion } from "framer-motion"


export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team. We'd love to hear from you and discuss art, history, and culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactDetails />
          </div>
        </div>

        <div className="mb-12">
          <ContactMap />
        </div>
      </div>
    </div>
  )
}