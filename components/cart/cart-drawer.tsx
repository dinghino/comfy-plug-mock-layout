"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, ArrowRight, AlertCircle } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/components/cart/cart-item"
import { products, getProductById } from "@/lib/data"

// Mock cart data
const initialCartItems = [
  { productId: "1", quantity: 2 },
  { productId: "2", quantity: 1 },
  { productId: "6", quantity: 1 },
]

interface CartItem {
  productId: string
  quantity: number
}

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.productId !== id))
  }
  
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prev => prev.map(item => 
      item.productId === id ? { ...item, quantity } : item
    ))
  }
  
  const cartProducts = cartItems.map(item => {
    const product = getProductById(item.productId)
    return { ...item, product }
  }).filter(item => item.product !== undefined)
  
  const subtotal = cartProducts.reduce((total, item) => {
    const price = item.product?.discountedPrice || item.product?.price || 0
    return total + (price * item.quantity)
  }, 0)
  
  const shipping = 5.99
  const total = subtotal + shipping
  
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-serif text-2xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>
        
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
            <div className="bg-muted rounded-full p-6 mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-serif text-xl mb-2">Your cart is empty</h3>
            <p className="text-gray-600 mb-6 max-w-xs">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button 
              onClick={() => onOpenChange(false)} 
              asChild
              className="bg-comfy-darkGreen hover:bg-comfy-darkGreen/90"
            >
              <Link href="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto -mx-6 px-6">
              <div className="divide-y">
                {cartProducts.map(({ product, quantity }) => (
                  product && (
                    <CartItem 
                      key={product.id}
                      product={product}
                      quantity={quantity}
                      onRemove={removeItem}
                      onUpdateQuantity={updateQuantity}
                    />
                  )
                ))}
              </div>
            </div>
            
            <div className="pt-6">
              <Separator className="mb-6" />
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Button 
                  asChild
                  className="w-full bg-comfy-darkGreen hover:bg-comfy-darkGreen/90"
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-comfy-darkGreen text-comfy-darkGreen hover:bg-comfy-darkGreen/10"
                  onClick={() => onOpenChange(false)}
                >
                  Continue Shopping
                </Button>
              </div>
              
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                <AlertCircle className="h-4 w-4" />
                <p>Products are for adults 21+ only. ID verification required at checkout.</p>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}