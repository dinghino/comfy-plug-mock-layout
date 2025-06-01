import { Suspense } from "react"
import { ProductGrid } from "@/components/product/product-grid"
import { products } from "@/lib/data"

interface ProductsPageProps {
  searchParams: {
    category?: string
  }
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  // Filter products by category if provided in query params
  const categoryFilter = searchParams.category
  const filteredProducts = categoryFilter 
    ? products.filter(product => product.category === categoryFilter)
    : products
    
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGrid 
            initialProducts={filteredProducts}
            category={categoryFilter}
          />
        </Suspense>
      </div>
    </div>
  )
}