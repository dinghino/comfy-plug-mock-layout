"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ArrowLeft, CreditCard, Truck, ShieldCheck, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

// Mock cart data
const cartItems = [
  { id: "1", name: "Cloud Nine", price: 39.99, quantity: 2, image: "https://images.pexels.com/photos/606506/pexels-photo-606506.jpeg" },
  { id: "2", name: "Tranquility Tincture", price: 65.00, quantity: 1, image: "https://images.pexels.com/photos/4713301/pexels-photo-4713301.jpeg" },
  { id: "6", name: "Clarity Vape Pen", price: 69.99, quantity: 1, image: "https://images.pexels.com/photos/6682743/pexels-photo-6682743.jpeg" }
]

const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
const shipping = 5.99
const tax = subtotal * 0.08 // 8% tax rate
const total = subtotal + shipping + tax

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 py-2 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-comfy-darkGreen">Home</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href="/products" className="hover:text-comfy-darkGreen">Products</Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-gray-700">Checkout</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Checkout Form */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="font-serif text-2xl md:text-3xl">Checkout</h1>
              
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-medium hover:text-comfy-darkGreen"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
            
            {/* Checkout Steps */}
            <div className="flex justify-between mb-8">
              {['Shipping', 'Payment', 'Review'].map((stepName, i) => (
                <div 
                  key={stepName} 
                  className="flex items-center"
                >
                  <div className={`
                    flex items-center justify-center w-8 h-8 rounded-full font-medium text-sm
                    ${step > i+1 
                      ? 'bg-comfy-lightGreen text-white' 
                      : step === i+1 
                        ? 'bg-comfy-darkGreen text-white' 
                        : 'bg-gray-200 text-gray-600'}
                  `}>
                    {step > i+1 ? '✓' : i+1}
                  </div>
                  <span className={`
                    ml-2
                    ${step === i+1 ? 'text-comfy-darkGreen font-medium' : 'text-gray-600'}
                  `}>
                    {stepName}
                  </span>
                  
                  {i < 2 && (
                    <div className="mx-2 h-px w-6 sm:w-12 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-xl mb-4">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <Label htmlFor="address1">Address Line 1</Label>
                    <Input id="address1" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                    <Input id="address2" className="mt-1" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="zipcode">Zip Code</Label>
                      <Input id="zipcode" className="mt-1" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center h-10 mb-6">
                  <Checkbox id="saveAddress" />
                  <label htmlFor="saveAddress" className="ml-2 text-sm">
                    Save this address for future orders
                  </label>
                </div>
                
                <Button 
                  onClick={() => setStep(2)} 
                  className="w-full bg-comfy-darkGreen hover:bg-comfy-darkGreen/90"
                >
                  Continue to Payment
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
            
            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-xl mb-4">Payment Method</h2>
                
                <RadioGroup defaultValue="credit-card" className="mb-6">
                  <div className="flex items-center space-x-2 border p-4 rounded-md mb-3">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex-1 flex items-center cursor-pointer">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border p-4 rounded-md mb-3 opacity-50 cursor-not-allowed">
                    <RadioGroupItem value="paypal" id="paypal" disabled />
                    <Label htmlFor="paypal" className="flex-1 cursor-not-allowed">
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="expiration">Expiration Date</Label>
                    <Input id="expiration" placeholder="MM/YY" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="mt-1" />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" className="mt-1" />
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="border-comfy-darkGreen text-comfy-darkGreen hover:bg-comfy-darkGreen/10"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  
                  <Button 
                    onClick={() => setStep(3)}
                    className="flex-1 bg-comfy-darkGreen hover:bg-comfy-darkGreen/90"
                  >
                    Review Order
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Review */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-xl mb-4">Review Your Order</h2>
                
                <div className="bg-muted p-6 rounded-lg mb-6">
                  <h3 className="font-serif text-lg mb-3">Shipping Address</h3>
                  <p className="text-gray-600">
                    John Doe<br />
                    123 Main Street<br />
                    Apt 4B<br />
                    Portland, OR 97205<br />
                    United States<br />
                    (555) 555-1234
                  </p>
                  
                  <Button 
                    variant="link" 
                    onClick={() => setStep(1)}
                    className="p-0 h-auto text-comfy-darkGreen"
                  >
                    Edit
                  </Button>
                </div>
                
                <div className="bg-muted p-6 rounded-lg mb-6">
                  <h3 className="font-serif text-lg mb-3">Payment Method</h3>
                  <div className="flex items-center text-gray-600">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Visa ending in 4242
                  </div>
                  
                  <Button 
                    variant="link" 
                    onClick={() => setStep(2)}
                    className="p-0 h-auto text-comfy-darkGreen"
                  >
                    Edit
                  </Button>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    <span className="font-medium">Age Verification Required</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    You must be 21 years or older to purchase cannabis products. ID verification will be required upon delivery.
                  </p>
                  <div className="flex items-center">
                    <Checkbox id="ageVerification" required />
                    <label htmlFor="ageVerification" className="ml-2 text-sm font-medium">
                      I confirm that I am 21 years of age or older
                    </label>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(2)}
                    className="border-comfy-darkGreen text-comfy-darkGreen hover:bg-comfy-darkGreen/10"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  
                  <Button 
                    className="flex-1 bg-comfy-darkGreen hover:bg-comfy-darkGreen/90"
                  >
                    Place Order
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-80 order-1 lg:order-2">
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="font-serif text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill
                        className="object-cover" 
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium line-clamp-1">{item.name}</h4>
                      <div className="text-sm text-gray-600">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </div>
                      <div className="text-sm font-medium mt-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <div className="flex items-start">
                  <Truck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Free shipping on orders over $75</span>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure and encrypted payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}