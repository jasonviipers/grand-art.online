"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CheckoutFormData } from "@/types/product-type"


interface CheckoutPaymentProps {
  data: CheckoutFormData
  onChange: (data: Partial<CheckoutFormData>) => void
  onBack: () => void
  onSubmit: () => void
  isValid: boolean
}

export function CheckoutPayment({
  data,
  onChange,
  onBack,
  onSubmit,
  isValid
}: CheckoutPaymentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Payment Details</h2>
      
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input
          id="cardNumber"
          value={data.cardNumber}
          onChange={(e) => onChange({ cardNumber: e.target.value })}
          placeholder="1234 5678 9012 3456"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiryDate">Expiry Date</Label>
          <Input
            id="expiryDate"
            value={data.expiryDate}
            onChange={(e) => onChange({ expiryDate: e.target.value })}
            placeholder="MM/YY"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            type="password"
            maxLength={4}
            value={data.cvv}
            onChange={(e) => onChange({ cvv: e.target.value })}
            placeholder="123"
          />
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={onSubmit}
          disabled={!isValid}
          className="flex-1"
        >
          Complete Order
        </Button>
      </div>
    </motion.div>
  )
}