import { Star, StarHalf } from "lucide-react"

interface StarRatingProps {
  rating: number
  size?: "sm" | "md" | "lg"
}

export function StarRating({ rating, size = "sm" }: StarRatingProps) {
  // Calculate full stars, half stars, and empty stars
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  
  const starSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  }
  
  const sizeClass = starSizes[size]
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <Star
              key={i}
              className={`${sizeClass} fill-amber-400 text-amber-400`}
            />
          )
        } else if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf
              key={i}
              className={`${sizeClass} fill-amber-400 text-amber-400`}
            />
          )
        } else {
          return (
            <Star
              key={i}
              className={`${sizeClass} text-gray-300`}
            />
          )
        }
      })}
    </div>
  )
}