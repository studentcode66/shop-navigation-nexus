
import { Navigation } from "@/components/Navigation";

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
        
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="product-card">
                  <div className="aspect-square bg-gray-100"></div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Essential Tee</h3>
                    <p className="text-gray-600">$49.99</p>
                  </div>
                </div>
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
