import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-md text-center">
        <h1 className="font-serif text-6xl font-medium mb-4">404</h1>
        <p className="text-2xl font-serif mb-4">Page Not Found</p>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}