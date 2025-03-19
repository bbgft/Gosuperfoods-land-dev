export default function Who_We_Are() {
  return (
    <div className="min-h-screen flex items-center bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/src/assets/go-superfoods logo.webp" 
              alt="Go Superfoods Logo"
              className="w-3/4 mx-auto md:w-full animate-float"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-green-800">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                At Go Superfoods, we're more than just a food-tech startup—we're
                passionate advocates for health, wellness, and sustainability.
              </p>
              <p className="leading-relaxed">
                Founded on the belief that everyone deserves access to nutrient-rich
                superfoods, our mission is to positively impact global health one
                meal at a time.
              </p>
            </div>
            <button
              className="bg-green-700 text-white px-10 py-4 rounded-xl hover:bg-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover Our Story →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
