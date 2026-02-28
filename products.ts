export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  affiliateUrl: string;
  badge?: string;
};

export const categories = [
  "All",
  "Tech",
  "Home",
  "Fitness",
  "Kitchen",
  "Audio",
] as const;

export const products: Product[] = [
  {
    id: "1",
    title: "Wireless Noise Cancelling Headphones",
    description: "Premium sound with 30-hour battery life and active noise cancellation for immersive listening.",
    price: "$79.99",
    originalPrice: "$129.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 2341,
    category: "Audio",
    affiliateUrl: "https://amazon.com",
    badge: "Best Seller",
  },
  {
    id: "2",
    title: "Smart Home Security Camera",
    description: "1080p HD with night vision, two-way audio, and motion detection alerts to your phone.",
    price: "$34.99",
    originalPrice: "$49.99",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
    rating: 4.4,
    reviewCount: 1892,
    category: "Tech",
    affiliateUrl: "https://amazon.com",
    badge: "Deal",
  },
  {
    id: "3",
    title: "Adjustable Dumbbell Set",
    description: "5-52.5 lbs adjustable dumbbells replacing 15 sets of weights. Space-saving design.",
    price: "$149.00",
    originalPrice: "$199.00",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 3102,
    category: "Fitness",
    affiliateUrl: "https://amazon.com",
  },
  {
    id: "4",
    title: "Robot Vacuum Cleaner",
    description: "Smart mapping, powerful suction, and auto-emptying base. Works with Alexa and Google.",
    price: "$249.99",
    originalPrice: "$399.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 5621,
    category: "Home",
    affiliateUrl: "https://amazon.com",
    badge: "38% Off",
  },
  {
    id: "5",
    title: "Air Fryer 5.8 Quart",
    description: "Crispy results with 95% less oil. Digital touchscreen with 8 preset cooking functions.",
    price: "$59.99",
    originalPrice: "$89.99",
    image: "https://images.unsplash.com/photo-1648733966427-1e02313a175d?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 8234,
    category: "Kitchen",
    affiliateUrl: "https://amazon.com",
    badge: "Top Pick",
  },
  {
    id: "6",
    title: "Mechanical Keyboard RGB",
    description: "Hot-swappable switches, per-key RGB lighting, and premium PBT keycaps for gaming and typing.",
    price: "$69.99",
    originalPrice: "$99.99",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 1456,
    category: "Tech",
    affiliateUrl: "https://amazon.com",
  },
  {
    id: "7",
    title: "Yoga Mat Premium Non-Slip",
    description: "Extra thick 6mm eco-friendly TPE material with alignment lines. Perfect for home workouts.",
    price: "$29.99",
    originalPrice: "$44.99",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    rating: 4.3,
    reviewCount: 2876,
    category: "Fitness",
    affiliateUrl: "https://amazon.com",
    badge: "Deal",
  },
  {
    id: "8",
    title: "Portable Bluetooth Speaker",
    description: "Waterproof IPX7, 24-hour playtime, deep bass with 360° surround sound.",
    price: "$39.99",
    originalPrice: "$59.99",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 4521,
    category: "Audio",
    affiliateUrl: "https://amazon.com",
  },
];
