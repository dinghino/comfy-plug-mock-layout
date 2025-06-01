"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product/product-card"
import { products, Product } from "@/lib/data"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

interface ProductGridProps {
  initialProducts?: Product[]
  category?: string
}

export function ProductGrid({ initialProducts, category }: ProductGridProps) {
  const allProducts = initialProducts || products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
  const [sortOption, setSortOption] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")

  const handleSort = (value: string) => {
    setSortOption(value)
    
    let sorted = [...filteredProducts]
    
    switch(value) {
      case "price-low":
        sorted.sort((a, b) => {
          const priceA = a.discountedPrice || a.price
          const priceB = b.discountedPrice || b.price
          return priceA - priceB
        })
        break
      case "price-high":
        sorted.sort((a, b) => {
          const priceA = a.discountedPrice || a.price
          const priceB = b.discountedPrice || b.price
          return priceB - priceA
        })
        break
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        // In a real app, would sort by date
        sorted.sort((a, b) => parseInt(b.id) - parseInt(a.id))
        break
      case "featured":
      default:
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
    
    setFilteredProducts(sorted)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    
    if (!query) {
      setFilteredProducts(allProducts)
    } else {
      const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.effects.some(effect => effect.toLowerCase().includes(query))
      )
      setFilteredProducts(filtered)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-end">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-medium">
            {category 
              ? `${category.charAt(0).toUpperCase() + category.slice(1)}`
              : "All Products"
            }
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredProducts.length} products
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Label htmlFor="search-products" className="sr-only">Search products</Label>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="search-products"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          
          <div className="w-full sm:w-44">
            <Label htmlFor="sort-products" className="sr-only">Sort by</Label>
            <Select value={sortOption} onValueChange={handleSort}>
              <SelectTrigger id="sort-products" className="w-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}