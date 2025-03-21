import logoImage from "../assets/go-superfoods logo.webp";

export default function Who_We_Are() {
  return (
    <div className=" bg-green-50 flex items-center py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={logoImage}
            alt="Go Superfoods Logo"
            className="w-64 md:w-80 lg:w-96 animate-float drop-shadow-xl"
          />
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 leading-tight">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong>Go Superfoods</strong>, we're more than a food-tech
            startup—we're passionate advocates for wellness, sustainability, and
            mindful living.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our journey started with one goal: to make nutrient-dense superfoods
            accessible to all. Today, we proudly drive global health change—one
            meal at a time.
          </p>
          <div>
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              Discover Our Story →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
