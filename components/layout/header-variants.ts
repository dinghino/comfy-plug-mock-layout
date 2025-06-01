import { tv } from "tailwind-variants"

export const headerVariants = tv({
  slots: {
    root: [
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
      "bg-primary py-4",
    ],
    scrolled: "bg-white shadow-md py-2",
    logo: "flex items-center gap-2",
    icon: "h-6 w-6 transition-colors",
    brand: "font-serif text-2xl font-bold transition-colors",
    nav: "hidden md:flex items-center space-x-8",
    search: [
      "relative w-64",
      "pl-10 border-primary/20 transition-colors",
    ],
    searchIcon: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-70 transition-colors",
    button: "transition-colors",
    mobileNav: "flex items-center space-x-4 md:hidden",
    categories: "hidden md:block py-2 transition-all duration-300",
    categoryLink: "font-medium text-sm transition-colors",
  },
  variants: {
    scrolled: {
      true: {
        root: "bg-white shadow-md py-2",
        icon: "text-comfy-darkGreen",
        brand: "text-comfy-darkGreen",
        search: [
          "bg-white/10 text-comfy-darkGreen",
          "placeholder:text-comfy-darkGreen/70 focus:border-comfy-darkGreen",
        ],
        searchIcon: "text-comfy-darkGreen",
        button: "text-comfy-darkGreen hover:text-comfy-darkGreen/90 hover:bg-comfy-darkGreen/10",
        categoryLink: "text-comfy-darkGreen/90 hover:text-comfy-darkGreen",
      },
      false: {
        icon: "text-comfy-cream",
        brand: "text-comfy-cream",
        search: [
          "bg-primary/40 text-comfy-cream",
          "placeholder:text-comfy-cream/70 focus:border-comfy-cream",
        ],
        searchIcon: "text-comfy-cream",
        button: "text-comfy-cream hover:text-comfy-cream/90 hover:bg-primary/40",
        categoryLink: "text-comfy-cream/90 hover:text-comfy-cream",
      },
    },
    active: {
      true: {
        categoryLink: "underline underline-offset-4",
      },
    },
  },
})