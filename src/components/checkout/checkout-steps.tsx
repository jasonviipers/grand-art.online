"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckoutProgress } from "./checkout-progress"
import type { CheckoutFormData } from "@/types/product-type"
import { CheckoutBilling } from "./steps/checkout-billing"
import { CheckoutShipping } from "./steps/checkout-shipping"
import { CheckoutPayment } from "./steps/checkout-payment"


interface CheckoutStepsProps {
  currentStep: number
  onStepChange: (step: number) => void
  formData: CheckoutFormData
  onUpdateForm: (data: Partial<CheckoutFormData>) => void
  isValid: boolean
  onSubmit: () => void
}

export function CheckoutSteps({
  currentStep,
  onStepChange,
  formData,
  onUpdateForm,
  isValid,
  onSubmit
}: CheckoutStepsProps) {
  return (
    <div className=" rounded-lg shadow-lg p-6">
      <CheckoutProgress currentStep={currentStep} onStepClick={onStepChange} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {currentStep === 1 && (
            <CheckoutBilling
              data={formData}
              onChange={onUpdateForm}
              onNext={() => onStepChange(2)}
            />
          )}
          {currentStep === 2 && (
            <CheckoutShipping 
              data={formData}
              onChange={onUpdateForm}
              onBack={() => onStepChange(1)}
              onNext={() => onStepChange(3)}
            />
          )}
          {currentStep === 3 && (
            <CheckoutPayment
              data={formData}
              onChange={onUpdateForm}
              onBack={() => onStepChange(2)}
              onSubmit={onSubmit}
              isValid={isValid}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}