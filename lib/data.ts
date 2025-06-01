export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  details: ProductDetail[];
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
  thc: number;
  cbd: number;
  effects: string[];
  images: string[];
  featured: boolean;
  stock: number;
}

export interface ProductDetail {
  title: string;
  content: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Cloud Nine",
    slug: "cloud-nine",
    category: "flowers",
    description: "Experience true relaxation with our premium Cloud Nine flower. This indica-dominant strain offers a smooth, earthy flavor with hints of berry and pine.",
    details: [
      {
        title: "Strain",
        content: "Indica-dominant hybrid (70% Indica, 30% Sativa)"
      },
      {
        title: "Flavor Profile",
        content: "Earthy with hints of berry and pine"
      },
      {
        title: "Aroma",
        content: "Sweet and woody with subtle citrus notes"
      },
      {
        title: "Grow Info",
        content: "Indoor grown in small batches with organic soil"
      }
    ],
    price: 49.99,
    discountedPrice: 39.99,
    rating: 4.8,
    reviewCount: 124,
    thc: 22.5,
    cbd: 0.1,
    effects: ["Relaxed", "Sleepy", "Happy", "Hungry"],
    images: [
      "https://images.pexels.com/photos/606506/pexels-photo-606506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7667918/pexels-photo-7667918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7667889/pexels-photo-7667889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: true,
    stock: 25
  },
  {
    id: "2",
    name: "Tranquility Tincture",
    slug: "tranquility-tincture",
    category: "oils",
    description: "Our Tranquility Tincture provides a balanced CBD/THC ratio for relaxation without heavy sedation. Perfect for unwinding after a long day.",
    details: [
      {
        title: "Extract Type",
        content: "Full spectrum with terpene enhancement"
      },
      {
        title: "Base",
        content: "Organic MCT oil from coconut"
      },
      {
        title: "Suggested Use",
        content: "Place 1-2 droppers under tongue for 60 seconds before swallowing"
      },
      {
        title: "Storage",
        content: "Store in a cool, dark place away from direct sunlight"
      }
    ],
    price: 65.00,
    rating: 4.7,
    reviewCount: 89,
    thc: 5.0,
    cbd: 15.0,
    effects: ["Calm", "Balanced", "Focused", "Relief"],
    images: [
      "https://images.pexels.com/photos/4713301/pexels-photo-4713301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: true,
    stock: 42
  },
  {
    id: "3",
    name: "Euphoria Edibles",
    slug: "euphoria-edibles",
    category: "edibles",
    description: "Delicious artisanal chocolate truffles infused with our premium cannabis extract. Each piece delivers a precisely measured dose for a consistent experience.",
    details: [
      {
        title: "Ingredients",
        content: "Organic chocolate, natural flavors, cannabis extract, organic cane sugar"
      },
      {
        title: "Dosage",
        content: "10mg THC per piece, 100mg THC total per package"
      },
      {
        title: "Flavors",
        content: "Dark chocolate, milk chocolate, sea salt caramel, raspberry"
      },
      {
        title: "Dietary Info",
        content: "Gluten-free, vegan options available"
      }
    ],
    price: 28.00,
    rating: 4.9,
    reviewCount: 156,
    thc: 10.0,
    cbd: 0.0,
    effects: ["Euphoric", "Creative", "Uplifted", "Giggly"],
    images: [
      "https://images.pexels.com/photos/2373195/pexels-photo-2373195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5846019/pexels-photo-5846019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: false,
    stock: 78
  },
  {
    id: "4",
    name: "Zen Garden",
    slug: "zen-garden",
    category: "flowers",
    description: "A perfectly balanced hybrid strain that promotes creativity and sociability while keeping your mind clear and focused.",
    details: [
      {
        title: "Strain",
        content: "Balanced hybrid (50% Indica, 50% Sativa)"
      },
      {
        title: "Flavor Profile",
        content: "Sweet citrus with hints of lavender and spice"
      },
      {
        title: "Aroma",
        content: "Bright, citrusy, with floral undertones"
      },
      {
        title: "Grow Info",
        content: "Greenhouse grown with living soil and natural light"
      }
    ],
    price: 54.99,
    rating: 4.6,
    reviewCount: 98,
    thc: 18.5,
    cbd: 0.5,
    effects: ["Creative", "Focused", "Uplifted", "Sociable"],
    images: [
      "https://images.pexels.com/photos/7667774/pexels-photo-7667774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7667908/pexels-photo-7667908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: true,
    stock: 30
  },
  {
    id: "5",
    name: "Serenity Pre-Rolls",
    slug: "serenity-pre-rolls",
    category: "pre-rolls",
    description: "Perfectly rolled joints using our premium Serenity strain. Each pre-roll is hand-crafted for an even, slow burn and comes in a protective tube.",
    details: [
      {
        title: "Contents",
        content: "100% premium flower, no trim or shake"
      },
      {
        title: "Strain",
        content: "Serenity - Indica dominant hybrid"
      },
      {
        title: "Pack Options",
        content: "3-pack or 6-pack, individual tubes"
      },
      {
        title: "Paper",
        content: "Organic hemp paper with natural gum"
      }
    ],
    price: 24.99,
    rating: 4.5,
    reviewCount: 67,
    thc: 20.0,
    cbd: 0.3,
    effects: ["Relaxed", "Euphoric", "Creative", "Sleepy"],
    images: [
      "https://images.pexels.com/photos/6185176/pexels-photo-6185176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7667866/pexels-photo-7667866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: false,
    stock: 50
  },
  {
    id: "6",
    name: "Clarity Vape Pen",
    slug: "clarity-vape-pen",
    category: "accessories",
    description: "Premium vaporizer pen with temperature control and long battery life. The sleek design fits comfortably in your hand and pocket.",
    details: [
      {
        title: "Battery",
        content: "1100mAh rechargeable lithium-ion, USB-C charging"
      },
      {
        title: "Temperature Settings",
        content: "3 precision settings (Low: 350°F, Medium: 380°F, High: 420°F)"
      },
      {
        title: "Chamber",
        content: "Ceramic heating element with no burning or combustion"
      },
      {
        title: "Warranty",
        content: "2-year manufacturer warranty"
      }
    ],
    price: 79.99,
    discountedPrice: 69.99,
    rating: 4.7,
    reviewCount: 112,
    thc: 0,
    cbd: 0,
    effects: [],
    images: [
      "https://images.pexels.com/photos/6682743/pexels-photo-6682743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/4470161/pexels-photo-4470161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: true,
    stock: 18
  },
  {
    id: "7",
    name: "Bliss Balm",
    slug: "bliss-balm",
    category: "oils",
    description: "This topical CBD balm provides targeted relief for sore muscles and joints. The luxurious formula absorbs quickly without greasy residue.",
    details: [
      {
        title: "Ingredients",
        content: "Shea butter, coconut oil, beeswax, full-spectrum CBD oil, essential oils"
      },
      {
        title: "Potency",
        content: "500mg CBD per 2oz jar"
      },
      {
        title: "Scent",
        content: "Subtle lavender and eucalyptus blend"
      },
      {
        title: "Usage",
        content: "Apply small amount to affected area up to 3-4 times daily"
      }
    ],
    price: 45.00,
    rating: 4.9,
    reviewCount: 76,
    thc: 0.0,
    cbd: 500.0,
    effects: ["Relief", "Soothing", "Calming"],
    images: [
      "https://images.pexels.com/photos/6303714/pexels-photo-6303714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5217956/pexels-photo-5217956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: false,
    stock: 22
  },
  {
    id: "8",
    name: "Dream Catcher",
    slug: "dream-catcher",
    category: "flowers",
    description: "A powerful indica strain perfect for evening use, Dream Catcher helps melt away stress and prepare your mind and body for deep, restorative sleep.",
    details: [
      {
        title: "Strain",
        content: "Pure Indica"
      },
      {
        title: "Flavor Profile",
        content: "Sweet and earthy with hints of grape and vanilla"
      },
      {
        title: "Aroma",
        content: "Rich, musky, with subtle sweet notes"
      },
      {
        title: "Grow Info",
        content: "Indoor grown in controlled environment for maximum potency"
      }
    ],
    price: 52.99,
    rating: 4.8,
    reviewCount: 103,
    thc: 24.0,
    cbd: 0.1,
    effects: ["Sleepy", "Relaxed", "Pain Relief", "Happy"],
    images: [
      "https://images.pexels.com/photos/7667876/pexels-photo-7667876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/7667859/pexels-photo-7667859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    featured: true,
    stock: 15
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getAllProducts(): Product[] {
  return products
}