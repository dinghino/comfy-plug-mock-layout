import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Product } from "@/lib/data"

interface CartItemProps {
  product: Product
  quantity: number
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
}

export function CartItem({ 
  product, 
  quantity, 
  onRemove,
  onUpdateQuantity
}: CartItemProps) {
  const { id, name, slug, images, price, discountedPrice } = product
  const actualPrice = discountedPrice || price
  const totalPrice = actualPrice * quantity
  
  return (
    <div className="flex py-4 gap-4">
      {/* Product Image */}
      <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
        <Link href={`/products/${slug}`}>
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <Link href={`/products/${slug}`} className="hover:text-comfy-darkGreen transition-colors">
          <h4 className="font-medium line-clamp-1">{name}</h4>
        </Link>
        
        <div className="mt-1 flex items-center text-sm text-gray-600">
          <span>${actualPrice.toFixed(2)}</span>
          {discountedPrice && (
            <span className="ml-2 line-through text-gray-400">${price.toFixed(2)}</span>
          )}
        </div>
        
        {/* Quantity Controls */}
        <div className="flex items-center mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => quantity > 1 && onUpdateQuantity(id, quantity - 1)}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      {/* Price and Remove */}
      <div className="flex flex-col items-end justify-between">
        <div className="font-medium">${totalPrice.toFixed(2)}</div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-gray-600"
          onClick={() => onRemove(id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}