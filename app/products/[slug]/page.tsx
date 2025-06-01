import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ShoppingCart, Leaf, Truck, Shield, Undo, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { StarRating } from "@/components/product/star-rating"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { getProductBySlug, getProductsByCategory, getAllProducts } from "@/lib/data"
import { ProductCard } from "@/components/product/product-card"
import AppBreadcrumbs from "@/components/layout/breadcrumbs"

interface ProductPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all product pages at build time
export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const product = getProductBySlug(slug)
  
  if (!product) {
    notFound()
  }
  
  // Get related products from the same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4)
  
  const discount = product.discountedPrice 
    ? Math.round((1 - product.discountedPrice / product.price) * 100) 
    : 0
  
  return (
    <div className="pt-32 pb-16">
      <div className="container">
        {/* Breadcrumbs */}
        <AppBreadcrumbs
          className="mb-8"
          links={[
          { href:'/products', label: 'Products' },
          { href: `/products?category=${product.category}`, label: product.category },
          { href: '', label: product.name }
          ]} />
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center text-sm font-medium mb-8 hover:text-comfy-darkGreen"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        
        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
              <Image 
                src={product.images[0]} 
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              
              {discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-comfy-darkGreen text-comfy-cream text-sm px-3 py-1">
                  {discount}% OFF
                </Badge>
              )}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(0, 3).map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <Badge 
              variant="outline" 
              className="mb-4 text-xs capitalize border-comfy-lightGreen/30 text-comfy-lightGreen"
            >
              {product.category}
            </Badge>
            
            <h1 className="font-serif text-3xl md:text-4xl font-medium mb-3">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-6">
              <StarRating rating={product.rating} size="md" />
              <span className="ml-2 text-sm text-gray-600">
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
            
            <div className="flex items-baseline mb-6">
              {product.discountedPrice ? (
                <>
                  <span className="text-2xl font-medium text-comfy-darkGreen">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-lg line-through text-gray-500">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium text-comfy-darkGreen">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>
            
            {/* THC/CBD Content */}
            {(product.thc > 0 || product.cbd > 0) && (
              <div className="mb-6 flex gap-4">
                {product.thc > 0 && (
                  <div className="bg-muted rounded-md px-4 py-3">
                    <div className="text-xs text-gray-600 mb-1">THC</div>
                    <div className="font-medium">{product.thc}%</div>
                  </div>
                )}
                
                {product.cbd > 0 && (
                  <div className="bg-muted rounded-md px-4 py-3">
                    <div className="text-xs text-gray-600 mb-1">CBD</div>
                    <div className="font-medium">
                      {product.cbd > 1 ? product.cbd.toFixed(1) + '%' : product.cbd + 'mg'}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Effects */}
            {product.effects.length > 0 && (
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Effects</div>
                <div className="flex flex-wrap gap-2">
                  {product.effects.map((effect, index) => (
                    <span key={index} className="text-sm px-3 py-1 bg-muted rounded-full">
                      {effect}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Add to cart section */}
            <div className="p-6 bg-muted rounded-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Leaf className="h-5 w-5 text-comfy-lightGreen mr-2" />
                  <span className="font-medium">
                    {product.stock > 10 
                      ? "In Stock" 
                      : product.stock > 0 
                        ? `Only ${product.stock} left` 
                        : "Out of Stock"
                    }
                  </span>
                </div>
                
                <div className="text-sm text-gray-600">
                  SKU: {product.id.padStart(6, '0')}
                </div>
              </div>
              
              <div className="flex gap-3 mb-4">
                <select 
                  className="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  defaultValue="1"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                
                <Button className="flex-1 bg-comfy-lightGreen hover:bg-comfy-darkGreen">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
              
              {/* Shipping info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Truck className="h-4 w-4 mr-2" />
                  Free shipping on orders over $75
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure payment process
                </div>
                <div className="flex items-center text-gray-600">
                  <Undo className="h-4 w-4 mr-2" />
                  Easy returns within 30 days
                </div>
              </div>
            </div>
            
            {/* Product Details Accordion */}
            <Accordion type="single" collapsible className="mb-6">
              {product.details.map((detail, index) => (
                <AccordionItem key={index} value={`detail-${index}`}>
                  <AccordionTrigger>{detail.title}</AccordionTrigger>
                  <AccordionContent>{detail.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        {/* Product Tabs - Reviews, etc */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent mb-6">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-comfy-darkGreen data-[state=active]:bg-transparent">
                Description
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-comfy-darkGreen data-[state=active]:bg-transparent">
                Reviews ({product.reviewCount})
              </TabsTrigger>
              <TabsTrigger value="shipping" className="rounded-none border-b-2 border-transparent data-[state=active]:border-comfy-darkGreen data-[state=active]:bg-transparent">
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-0">
              <div className="prose max-w-none">
                <p className="mb-4">
                  {product.description}
                </p>
                <p>
                  Our premium {product.name} is carefully cultivated to provide a consistent and enjoyable experience. Each batch is lab-tested to ensure quality and potency, so you can trust that you're getting a product that meets our high standards.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0">
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <StarRating rating={product.rating} size="lg" />
                  <span className="ml-2 font-medium">{product.rating.toFixed(1)} out of 5</span>
                </div>
                <span className="text-gray-600">Based on {product.reviewCount} reviews</span>
              </div>
              
              <p className="text-gray-600">
                This is a placeholder for customer reviews. In a real implementation, this would show actual customer reviews and ratings.
              </p>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-0">
              <div className="prose max-w-none">
                <h3 className="text-xl font-serif mb-4">Shipping Policy</h3>
                <p className="mb-4">
                  We offer free standard shipping on all orders over $75. Orders under $75 will incur a shipping fee of $5.99. Most orders are processed within 1-2 business days.
                </p>
                
                <h3 className="text-xl font-serif mb-4 mt-6">Return Policy</h3>
                <p>
                  If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please note that the item must be unopened and in its original packaging.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-8">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}