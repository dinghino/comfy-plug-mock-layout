"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Menu, Search, ShoppingBag, User, ChevronDown,
  Leaf, X, AlignJustify 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { headerVariants } from "./header-variants"

import MobileMenu from "@/components/layout/mobile-menu"
import CartDrawer from "@/components/cart/cart-drawer"

const mainNavItems = [
  { title: "Flowers", href: "/products?category=flowers" },
  { title: "Edibles", href: "/products?category=edibles" },
  { title: "Oils & Tinctures", href: "/products?category=oils" },
  { title: "Pre-Rolls", href: "/products?category=pre-rolls" },
  { title: "Accessories", href: "/products?category=accessories" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const classes = headerVariants({ scrolled })

  return (
    <header className={classes.root()}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            {/* <Leaf className={header.icon()} />
            <span className={header.brand()}>Comfy</span> */}
            <Image  className={classes.logo()} alt="comfyplug logo" src="/nav-bar-logo.png" width={210} height={24} />
          </Link>

          {/* Desktop Navigation */}
          <nav className={classes.nav()}>
            {/* Search */}
            <div className="relative w-64">
              <Search className={classes.searchIcon()} />
              <Input 
                className={classes.search()}
                placeholder="Search products..." 
              />
            </div>
            
            {/* Account */}
            <Button 
              variant="ghost" 
              className={classes.button()}
            >
              <User className="h-5 w-5 mr-2" />
              <span>Account</span>
            </Button>
            
            {/* Cart */}
            <Button 
              variant="ghost" 
              className={classes.button()}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              <span>Cart (3)</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className={classes.mobileNav()}>
            <Button 
              variant="ghost" 
              className={classes.button()}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={classes.button()}
                >
                  <AlignJustify className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <MobileMenu 
                mainNavItems={mainNavItems} 
                closeMobileMenu={() => setIsMobileMenuOpen(false)} 
              />
            </Sheet>
          </div>
        </div>

        {/* Categories Menu - Desktop Only */}
        <div className={classes.categories()}>
          <nav className="flex items-center justify-center space-x-8">
            {mainNavItems.map((item) => {
              const isActive = pathname.includes(item.href)
              return (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={headerVariants({ 
                    scrolled,
                    active: isActive 
                  }).categoryLink()}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  )
}