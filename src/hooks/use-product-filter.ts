"use client"

import { Product, ProductCategory } from '@/types/product-type'
import { useState, useMemo } from 'react'


export function useProductFilter(products: Product[]) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("All")

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products
    }
    return products.filter(product => product.category === activeCategory)
  }, [products, activeCategory])

  return {
    activeCategory,
    setActiveCategory,
    filteredProducts
  }
}