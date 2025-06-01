import Link from "next/link"
import { Leaf } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="bg-comfy-darkGreen text-comfy-cream pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="font-serif text-2xl font-bold">Comfy</span>
            </Link>
            <p className="text-comfy-cream/80 max-w-xs">
              Premium cannabis products for your comfort and wellness. Quality you can trust.
            </p>
          </div>
          
          {/* Shop */}
          <div className="col-span-1">
            <h3 className="font-serif text-xl mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=flowers" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Flowers
                </Link>
              </li>
              <li>
                <Link href="/products?category=edibles" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Edibles
                </Link>
              </li>
              <li>
                <Link href="/products?category=oils" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Oils & Tinctures
                </Link>
              </li>
              <li>
                <Link href="/products?category=pre-rolls" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Pre-Rolls
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help */}
          <div className="col-span-1">
            <h3 className="font-serif text-xl mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-serif text-xl mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-comfy-cream/80 hover:text-comfy-cream transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-comfy-cream/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-comfy-cream/60 text-sm">
            &copy; {new Date().getFullYear()} Comfy Cannabis. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-comfy-cream/60 hover:text-comfy-cream text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-comfy-cream/60 hover:text-comfy-cream text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-comfy-cream/60 hover:text-comfy-cream text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer