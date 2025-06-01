import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarRating } from "@/components/product/star-rating"

import { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name, slug, price, discountedPrice, rating, reviewCount, images, category, effects } = product
  const discount = discountedPrice ? Math.round((1 - discountedPrice / price) * 100) : 0
  
  return (
    <Card className="overflow-hidden group animate-fade-in h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <Link href={`/products/${slug}`}>
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105"
          />
          
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-comfy-darkGreen text-comfy-cream">
              {discount}% OFF
            </Badge>
          )}
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </Link>
      </div>
      
      <CardContent className="pt-4 pb-0 flex-1">
        <div className="flex justify-between items-start mb-1">
          <Badge variant="outline" className="text-xs capitalize border-comfy-lightGreen/30 text-comfy-lightGreen">
            {category}
          </Badge>
          <StarRating rating={rating} />
        </div>
        
        <Link href={`/products/${slug}`} className="block mt-2 group-hover:text-comfy-darkGreen">
          <h3 className="font-serif text-lg font-medium line-clamp-1">{name}</h3>
        </Link>
        
        <div className="flex items-baseline mt-1 mb-2">
          {discountedPrice ? (
            <>
              <span className="text-lg font-medium text-comfy-darkGreen">${discountedPrice.toFixed(2)}</span>
              <span className="ml-2 text-sm line-through text-gray-500">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-lg font-medium text-comfy-darkGreen">${price.toFixed(2)}</span>
          )}
        </div>
        
        {effects.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {effects.slice(0, 2).map((effect, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                {effect}
              </span>
            ))}
            {effects.length > 2 && (
              <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                +{effects.length - 2}
              </span>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-2 pb-4 gap-2">
        <Button 
          variant="default" 
          size="sm" 
          className="w-full bg-comfy-lightGreen hover:bg-comfy-darkGreen transition-colors"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          asChild
          className="w-1/3 border-comfy-lightGreen text-comfy-lightGreen hover:bg-comfy-lightGreen/10"
        >
          <Link href={`/products/${slug}`}>
            <Eye className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}