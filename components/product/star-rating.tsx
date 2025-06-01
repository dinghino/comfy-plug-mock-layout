import { Star, StarHalf } from "lucide-react"
import {tv, type VariantProps} from 'tailwind-variants'

const variants = tv({
  base: 'fill-amber-400 text-amber-400',
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5" 
    },
    fill: {
      full: '',
      empty: 'text-gray-300',
    }
  },
  defaultVariants: {
    size: 'sm',
    fill: 'empty'
  }
})

interface StarRatingProps {
  rating: number
  size?: "sm" | "md" | "lg"
}

export function StarRating({ rating, size = "sm" }: StarRatingProps) {
  // Calculate full stars, half stars, and empty stars
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <Star key={i} className={variants({size, fill: 'full'})} />
          )
        } else if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf key={i} className={variants({size, fill: 'full'})} />
          )
        } else {
          return (
            <Star key={i} className={variants({size, fill: 'empty'})} />
          )
        }
      })}
    </div>
  )
}