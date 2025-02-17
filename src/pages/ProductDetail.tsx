
import { Navigation } from "@/components/Navigation";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "Essential Cotton Tee",
    price: 49.99,
    rating: 4.5,
    reviews: 128,
    image: "https://placehold.co/400x400",
    description: "Premium cotton blend, perfect fit, and unmatched comfort. Our Essential Cotton Tee is designed for everyday wear, featuring a classic cut and durable construction that will last through countless washes.",
    remaining: 873,
    total: 1000,
    sizes: ["S", "M", "L", "XL"],
    features: [
      "100% Premium Cotton",
      "Reinforced Stitching",
      "Pre-shrunk Fabric",
      "Classic Fit"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-white cursor-pointer hover:ring-2 ring-primary">
                    <img 
                      src={product.image} 
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : star - product.rating <= 0.5
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-3xl font-bold text-primary">${product.price}</p>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="w-12 h-12"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Quantity</h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Progress value={(product.remaining / product.total) * 100} className="h-2" />
                <p className="text-sm text-gray-500">
                  Only {product.remaining} units left
                </p>
              </div>

              <Button className="w-full h-12 text-lg">
                Add to Cart
              </Button>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">Product Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
