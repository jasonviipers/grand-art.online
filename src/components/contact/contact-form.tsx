"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null)

  const inputVariants = {
    focused: { scale: 1.02, boxShadow: "0 0 0 2px var(--primary)" },
    unfocused: { scale: 1, boxShadow: "none" }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-4">
        <motion.div
          animate={focused === "name" ? "focused" : "unfocused"}
          variants={inputVariants}
        >
          <Input
            placeholder="Your Name"
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className="w-full"
          />
        </motion.div>

        <motion.div
          animate={focused === "email" ? "focused" : "unfocused"}
          variants={inputVariants}
        >
          <Input
            type="email"
            placeholder="Your Email"
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className="w-full"
          />
        </motion.div>

        <motion.div
          animate={focused === "message" ? "focused" : "unfocused"}
          variants={inputVariants}
        >
          <Textarea
            placeholder="Your Message"
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className="w-full min-h-[150px]"
          />
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button className="w-full" size="lg">
          <Send className="w-4 h-4 mr-2" />
          Send Message
        </Button>
      </motion.div>
    </motion.form>
  )
}