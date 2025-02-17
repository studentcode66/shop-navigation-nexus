
import { Navigation } from "@/components/Navigation";
import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const products = [
  {
    id: 1,
    name: "Essential Cotton Tee",
    price: 49.99,
    rating: 4.5,
    reviews: 128,
    image: "https://placehold.co/400x400",
    description: "Premium cotton blend, perfect fit, and unmatched comfort.",
    remaining: 873,
    total: 1000
  },
  {
    id: 2,
    name: "Classic Crewneck",
    price: 59.99,
    rating: 4.8,
    reviews: 96,
    image: "https://placehold.co/400x400",
    description: "Timeless design meets modern comfort.",
    remaining: 654,
    total: 1000
  },
  {
    id: 3,
    name: "Signature Hoodie",
    price: 79.99,
    rating: 4.7,
    reviews: 215,
    image: "https://placehold.co/400x400",
    description: "Premium heavyweight cotton blend hoodie.",
    remaining: 432,
    total: 1000
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : star - rating <= 0.5
              ? "fill-yellow-400/50 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section className="hero-section">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm font-medium text-primary mb-8 animate-fadeIn">
                Today's Drop - 873/1000 remaining
              </span>
              <h1 className="text-5xl font-bold text-primary mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Limited Edition Essential Tee
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                Premium cotton blend, perfect fit, and unmatched comfort.
                Available for just 24 hours.
              </p>
              <button className="button-primary animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                Shop Now
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <HoverCard key={product.id}>
                  <HoverCardTrigger asChild>
                    <div className="product-card group cursor-pointer">
                      <div className="relative">
                        <div className="aspect-square bg-gray-100">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {product.remaining}/{product.total}
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <StarRating rating={product.rating} />
                          <span className="text-sm text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-primary">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-500">
                            Free shipping
                          </span>
                        </div>
                        <Progress value={(product.remaining / product.total) * 100} className="h-1" />
                        <button className="w-full button-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <div className="text-sm text-gray-500">
                        Only {product.remaining} left in stock - order soon
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Premium quality, limited edition clothing drops.
                Available for 24 hours only.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on new drops.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
