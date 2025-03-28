"use client"

import { useCartStore } from "@/lib/store/use-cart-store"
import { CheckoutFormData } from "@/types/product-type"
import { useState, useCallback, useMemo } from "react"


const initialFormData: CheckoutFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
  cardNumber: "",
  expiryDate: "",
  cvv: ""
}

export function useCheckout() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData)
  const { items } = useCartStore()

  const updateFormData = useCallback((data: Partial<CheckoutFormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }, [])

  const isFormValid = useMemo(() => {
    switch (step) {
      case 1:
        return Boolean(
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone
        )
      case 2:
        return Boolean(
          formData.address &&
          formData.city &&
          formData.postalCode &&
          formData.country
        )
      case 3:
        return Boolean(
          formData.cardNumber &&
          formData.expiryDate &&
          formData.cvv
        )
      default:
        return false
    }
  }, [step, formData])

  const handleSubmit = useCallback(() => {
    if (!isFormValid || items.length === 0) return
    // Handle order submission
    console.log("Order submitted:", { formData, items })
  }, [formData, items, isFormValid])

  return {
    step,
    setStep,
    formData,
    updateFormData,
    isFormValid,
    handleSubmit
  }
}