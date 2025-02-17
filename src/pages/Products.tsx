
import { Navigation } from "@/components/Navigation";
import { Star, Filter } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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
    total: 1000,
    category: "T-Shirts"
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
    total: 1000,
    category: "Sweaters"
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
    total: 1000,
    category: "Hoodies"
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

const Products = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Collapsible on mobile */}
            <div className="w-full md:w-64 space-y-6">
              <div className="flex items-center justify-between md:justify-start">
                <h2 className="text-lg font-semibold">Filters</h2>
                {isMobile && (
                  <Button variant="ghost" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {["All", "T-Shirts", "Sweaters", "Hoodies"].map((category) => (
                      <label key={category} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="space-y-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="200" 
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$0</span>
                      <span>$200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        <div className="p-4 space-y-2">
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
