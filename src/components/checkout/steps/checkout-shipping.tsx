"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { CheckoutFormData } from "@/types/product-type"

interface CheckoutShippingProps {
  data: CheckoutFormData
  onChange: (data: Partial<CheckoutFormData>) => void
  onBack: () => void
  onNext: () => void
}

export function CheckoutShipping({ data, onChange, onBack, onNext }: CheckoutShippingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">Shipping Address</h2>
      
      <div className="space-y-2">
        <Label htmlFor="address">Street Address</Label>
        <Input
          id="address"
          value={data.address}
          onChange={(e) => onChange({ address: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="postalCode">Postal Code</Label>
          <Input
            id="postalCode"
            value={data.postalCode}
            onChange={(e) => onChange({ postalCode: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          value={data.country}
          onChange={(e) => onChange({ country: e.target.value })}
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Continue to Payment
        </Button>
      </div>
    </motion.div>
  )
}