"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES, type ProductCategory } from "@/types/product-type";

interface ProductCategoriesProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

export function ProductCategories({ activeCategory, onCategoryChange }: ProductCategoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap gap-2 justify-center mb-12"
    >
      {PRODUCT_CATEGORIES.map((category) => (
        <motion.div
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}