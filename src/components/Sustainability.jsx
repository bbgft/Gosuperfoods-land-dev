import { FaLeaf, FaHandsHelping, FaRecycle } from 'react-icons/fa';

export default function Sustainability() {
  return (
    <div className="min-h-screen flex items-center bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-600">
          Sustainability & Ethical Sourcing
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Local Farmers Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-600 mb-4">
              <FaHandsHelping className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Supporting Local Farmers
            </h3>
            <p className="text-gray-600 text-center">
              We partner directly with local farmers to ensure fair trade practices and support local communities.
            </p>
          </div>

          {/* Carbon Neutral Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-600 mb-4">
              <FaLeaf className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Carbon-Neutral Production
            </h3>
            <p className="text-gray-600 text-center">
              Our production processes are designed to minimize carbon footprint and offset emissions.
            </p>
          </div>

          {/* Biodiversity Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-600 mb-4">
              <FaRecycle className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Biodiversity Protection
            </h3>
            <p className="text-gray-600 text-center">
              We actively work to protect and preserve biodiversity in our sourcing regions.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Go Superfoods, we prioritize sustainable and eco-friendly sourcing to deliver high-quality products while protecting our planet.
          </p>
        </div>
      </div>
    </div>
  );
}
