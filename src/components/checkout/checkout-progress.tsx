"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface CheckoutProgressProps {
  currentStep: number
  onStepClick: (step: number) => void
}

const steps = [
  { number: 1, title: "Billing" },
  { number: 2, title: "Shipping" },
  { number: 3, title: "Payment" }
]

export function CheckoutProgress({ currentStep, onStepClick }: CheckoutProgressProps) {
  return (
    <div className="relative flex justify-between">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.number
        const isCurrent = currentStep === step.number
        
        return (
          <motion.button
            key={step.number}
            className="flex flex-col items-center relative z-10"
            onClick={() => onStepClick(step.number)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                isCompleted || isCurrent
                  ? "border-primary bg-card text-white"
                  : "border-gray-300 "
              }`}
              animate={{
                scale: isCurrent ? 1.1 : 1,
                borderColor: isCompleted || isCurrent ? "var(--primary)" : "#D1D5DB"
              }}
            >
              {isCompleted ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{step.number}</span>
              )}
            </motion.div>
            <span className="mt-2 text-sm font-medium">{step.title}</span>
          </motion.button>
        )
      })}
      
      <div className="absolute top-5 left-0 w-full h-[2px] -z-10">
        <motion.div
          className="h-full bg-primary origin-left"
          animate={{
            scaleX: (currentStep - 1) / (steps.length - 1)
          }}
        />
      </div>
    </div>
  )
}