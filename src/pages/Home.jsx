import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductList from '../components/ProductList';
import Who_We_Are from '../components/Who_We_Are';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Discover the Power of Moringa!",
    description: "Nutrient Rich Super-Food - Energize Your Life with Moringa's Natural Vitality!"
  },
  {
    image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Energy & Wellness, they do excel!",
    description: "Experience the natural goodness of our premium products."
  }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-2xl px-4">
            <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-lg mb-8">{slides[currentSlide].description}</p>
            <Link to="/about">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Products Section */}
      <ProductList />

      {/* Who We Are Section */}
      <Who_We_Are />
    </div>
  );
}

export default Home;