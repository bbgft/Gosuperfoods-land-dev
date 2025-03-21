import { FaSchool, FaHandsHelping, FaUsers } from "react-icons/fa";

export default function CommunityPrograms() {
  const programs = [
    {
      icon: <FaSchool className="w-12 h-12 text-green-600" />,
      title: "Educate",
      desc: "Our Superfoods School Program teaches nutrition and healthy living to communities.",
    },
    {
      icon: <FaHandsHelping className="w-12 h-12 text-green-600" />,
      title: "Empower",
      desc: "We create social enterprises that empower local communities through sustainable practices.",
    },
    {
      icon: <FaUsers className="w-12 h-12 text-green-600" />,
      title: "Engage",
      desc: "We engage communities through workshops, events, and collaborative projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-4 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Community & Programs
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-14">
          We're building strong, healthy, and empowered communities through
          meaningful education, sustainable development, and active engagement.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-20 px-4">
          {programs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md border border-green-100 rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-[1.03]"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full shadow-sm">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Ambassador CTA */}
        <div className="bg-white/90 backdrop-blur-lg border border-green-200 rounded-xl shadow-lg max-w-3xl mx-auto px-10 py-12 text-center transition-all hover:shadow-xl">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            🌱 Join the Superfood Revolution!
          </h3>
          <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
            Become a <strong>Go Superfoods Ambassador</strong> and help spread
            the message of health, sustainability, and community empowerment
            around the world.
          </p>
          <button className="bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-green-700 hover:scale-105 transform transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
