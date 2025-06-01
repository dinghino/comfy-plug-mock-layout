import Link from "next/link"
import Image from "next/image"
import { ArrowRight, LeafIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product/product-card"
import { getFeaturedProducts } from "@/lib/data"

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-comfy-darkGreen z-0">
          <Image
            src="https://images.pexels.com/photos/7667888/pexels-photo-7667888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cannabis background"
            fill
            className="object-cover object-center mix-blend-overlay opacity-50"
          />
        </div>
        
        <div className="container relative z-10 py-20 md:py-32 text-center text-comfy-cream">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight">
            Premium Cannabis Products for Your Comfort and Wellness
          </h1>
          
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-comfy-cream/90">
            Discover our curated selection of high-quality cannabis products designed to elevate your experience and enhance your wellbeing.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-comfy-lightGreen hover:bg-comfy-lightGreen/90 text-white">
              <Link href="/products">
                Shop All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-comfy-cream text-comfy-cream hover:bg-comfy-cream/10">
              <Link href="/about">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-comfy-cream/30">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center">Shop by Category</h2>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Flowers", image: "https://images.pexels.com/photos/7667774/pexels-photo-7667774.jpeg", slug: "flowers" },
              { name: "Edibles", image: "https://images.pexels.com/photos/2373195/pexels-photo-2373195.jpeg", slug: "edibles" },
              { name: "Oils & Tinctures", image: "https://images.pexels.com/photos/4713301/pexels-photo-4713301.jpeg", slug: "oils" },
              { name: "Pre-Rolls", image: "https://images.pexels.com/photos/6185176/pexels-photo-6185176.jpeg", slug: "pre-rolls" },
              { name: "Accessories", image: "https://images.pexels.com/photos/6682743/pexels-photo-6682743.jpeg", slug: "accessories" }
            ].map((category) => (
              <Link 
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-comfy-darkGreen/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-serif text-lg md:text-xl font-medium">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Featured Products</h2>
            <Button asChild variant="outline" className="mt-4 md:mt-0 border-comfy-darkGreen text-comfy-darkGreen hover:bg-comfy-darkGreen/10">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-comfy-darkGreen text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Commitment to Quality</h2>
              <p className="text-comfy-cream/90 mb-4 leading-relaxed">
                At Comfy, we believe in the power of high-quality cannabis to improve lives. Our products are carefully sourced, rigorously tested, and thoughtfully crafted to provide consistent, exceptional experiences.
              </p>
              <p className="text-comfy-cream/90 mb-6 leading-relaxed">
                From our sustainable growing practices to our innovative product development, we're dedicated to setting the standard for excellence in the industry.
              </p>
              <Button asChild className="bg-comfy-lightGreen hover:bg-comfy-lightGreen/90 text-white">
                <Link href="/about">
                  About Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6157229/pexels-photo-6157229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our growing facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Why Choose Comfy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Organically Grown",
                description: "All our products are grown using organic practices, free from harmful pesticides and chemicals."
              },
              {
                icon: "🔍",
                title: "Lab Tested",
                description: "Every batch is rigorously tested for potency, purity, and consistency to ensure the highest quality."
              },
              {
                icon: "📦",
                title: "Discreet Delivery",
                description: "Your privacy matters. All orders are shipped in plain, unmarked packaging with carbon offset shipping."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-100 hover:border-comfy-lightGreen/30 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-serif text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container text-center max-w-3xl mx-auto">
          <LeafIcon className="h-8 w-8 mx-auto mb-4 text-comfy-darkGreen" />
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Stay Connected</h2>
          <p className="mb-6 text-gray-600">
            Subscribe to our newsletter for product updates, wellness tips, and exclusive offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-comfy-darkGreen hover:bg-comfy-darkGreen/90 text-white">
              Subscribe
            </Button>
          </div>
          
          <p className="mt-4 text-xs text-gray-500">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  )
}