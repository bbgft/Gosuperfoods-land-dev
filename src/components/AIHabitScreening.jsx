import { Link } from "react-router-dom";
import aiAssistantImage from "../assets/ai-assistant.png";

function AIHabitScreening() {
  const features = [
    {
      title: "Personalized AI Analysis",
      desc: "Receive a detailed, AI-driven nutrition report tailored specifically for your unique habits.",
      icon: "🧠",
    },
    {
      title: "Identify Nutritional Gaps",
      desc: "Uncover missing nutrients and discover superfoods that align with your wellness goals.",
      icon: "🧬",
    },
    {
      title: "Clear Recommendations",
      desc: "Get simple, science-backed suggestions to instantly improve your food choices.",
      icon: "📋",
    },
    {
      title: "Achieve Your Health Goals",
      desc: "Boost your immunity, energy, and overall health through targeted food habit insights.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-4 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-700">
          🥗 AI-Powered Food Habit Screening
        </h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
          Get Personalized Insights to Optimize Your Nutrition
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          Wondering if your current eating habits are actually supporting your
          health? Our intelligent screening tool uses AI to analyze your food
          patterns and generate a tailored nutrition plan—just for you.
        </p>

        {/* AI Assistant Image */}
        <div className="flex justify-center mb-14">
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-green-200 to-green-400 p-1 shadow-lg animate-float">
            <img
              src={aiAssistantImage}
              alt="AI Assistant"
              className="rounded-full w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transform transition-all hover:-translate-y-1 hover:scale-105 border border-green-100"
            >
              <div className="text-4xl mb-4 text-green-600">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/nutrition-report">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Request Your AI Nutrition Report →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AIHabitScreening;
