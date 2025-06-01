"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Search, User, X, Leaf } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MainNavItem {
  title: string
  href: string
}

interface MobileMenuProps {
  mainNavItems: MainNavItem[]
  closeMobileMenu: () => void
}

export default function MobileMenu({ mainNavItems, closeMobileMenu }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <SheetContent side="right" className="w-full sm:w-80 pr-0 bg-primary">
      <SheetHeader className="text-left mb-6">
        <div className="flex items-center justify-between">
          <SheetTitle className="text-comfy-cream font-serif text-2xl flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            Comfy
          </SheetTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={closeMobileMenu}
            className="text-comfy-cream hover:text-comfy-cream/90 hover:bg-primary/40"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </SheetHeader>
      
      <div className="space-y-6 px-2">
        {/* Mobile Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-comfy-cream opacity-70" />
          <Input 
            className="pl-10 bg-primary/40 border-primary/20 text-comfy-cream placeholder:text-comfy-cream/70"
            placeholder="Search products..." 
          />
        </div>
        
        {/* Navigation Links */}
        <div className="space-y-1">
          <h3 className="text-comfy-cream/70 text-sm font-medium mb-2 pl-3">Shop by category</h3>
          {mainNavItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={cn(
                "flex items-center py-3 px-3 text-comfy-cream/90 hover:text-comfy-cream hover:bg-primary/40 rounded-md",
                pathname.includes(item.href) && "bg-primary/40 text-comfy-cream"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
        
        <Separator className="bg-comfy-cream/10" />
        
        {/* Account */}
        <div className="space-y-1">
          <Link
            href="/account"
            onClick={closeMobileMenu}
            className="flex items-center py-3 px-3 text-comfy-cream/90 hover:text-comfy-cream hover:bg-primary/40 rounded-md"
          >
            <User className="h-4 w-4 mr-2" />
            My Account
          </Link>
        </div>
      </div>
    </SheetContent>
  )
}