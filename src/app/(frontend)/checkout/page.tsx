"use client"

import { CheckoutSteps } from "@/components/checkout/checkout-steps"
import { CheckoutSummary } from "@/components/checkout/checkout-summary"
import { useCheckout } from "@/hooks/use-checkout"

export default function CheckoutPage() {
  const { 
    step,
    setStep,
    formData,
    updateFormData,
    isFormValid,
    handleSubmit
  } = useCheckout()

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutSteps
              currentStep={step}
              onStepChange={setStep}
              formData={formData}
              onUpdateForm={updateFormData}
              isValid={isFormValid}
              onSubmit={handleSubmit}
            />
          </div>
          <div className="lg:col-span-1">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  )
}