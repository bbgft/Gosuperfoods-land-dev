import { FaLeaf, FaHandsHelping, FaRecycle } from "react-icons/fa";

export default function Sustainability() {
  const features = [
    {
      icon: <FaHandsHelping className="w-12 h-12 text-green-600" />,
      title: "Supporting Local Farmers",
      desc: "We partner directly with local farmers to ensure fair trade practices and empower rural communities.",
    },
    {
      icon: <FaLeaf className="w-12 h-12 text-green-600" />,
      title: "Carbon-Neutral Production",
      desc: "Our eco-conscious processes minimize emissions while promoting a cleaner, greener planet.",
    },
    {
      icon: <FaRecycle className="w-12 h-12 text-green-600" />,
      title: "Biodiversity Protection",
      desc: "We take active steps to protect the ecosystems and biodiversity of our sourcing regions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          🌍 Sustainability & Ethical Sourcing
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14">
          At Go Superfoods, sustainability isn't just a commitment — it's
          embedded in everything we do, from farm to fork.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md border border-green-100 rounded-xl p-8 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-md md:text-lg text-gray-700 max-w-2xl mx-auto">
            Together, we’re building a future where health, fairness, and
            environmental care go hand in hand.
          </p>
        </div>
      </div>
    </div>
  );
}
