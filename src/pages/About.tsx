
import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24">
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-gray-600">
                Crafting limited edition essentials for those who appreciate quality and exclusivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  We believe in creating high-quality, timeless pieces that stand out through their 
                  craftsmanship and attention to detail. Each product is carefully designed and produced 
                  in limited quantities to ensure exclusivity and maintain our high standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to sustainability means we use only the finest materials while 
                  minimizing our environmental impact through responsible production practices.
                </p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Quality", "Sustainability", "Community"].map((value) => (
                <div key={value} className="text-center p-6 bg-secondary rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{value}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
