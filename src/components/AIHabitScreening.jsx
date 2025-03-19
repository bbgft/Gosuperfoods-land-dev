import { Link } from 'react-router-dom';

function AIHabitScreening() {
  return (
    <div className="min-h-screen flex items-center bg-green-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3 text-green-600">
          🥗 AI-Powered Food Habit Screening
        </h2>
        <h3 className="text-xl font-medium mb-4 text-gray-700">
          Get Personalized Insights to Optimize Your Nutrition
        </h3>
        <p className="mb-6 max-w-2xl mx-auto text-gray-600 text-sm">
          Not sure if your food habits are meeting your nutritional needs? Our advanced AI-powered screening evaluates your diet, identifies nutritional gaps, and creates a personalized nutrition improvement plan.
        </p>

        <div className="relative flex flex-col items-center justify-center py-8 space-y-6 md:space-y-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full blur-md opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-gradient-start to-gradient-end rounded-full p-1">
              <img
                src="/src/assets/ai-assistant.png"
                alt="AI Assistant"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full shadow-xl animate-float"
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-0 md:justify-center md:items-center">
            <div className="bg-gray-100 rounded-xl p-4 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative md:w-60">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-100"></div>
              <h4 className="text-brand-blue font-bold text-xl mb-3">Personalized AI Analysis</h4>
              <p className="text-base text-dark-gray leading-relaxed">
                Receive a detailed, AI-driven nutrition report personalized for you.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative md:w-60">
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-100"></div>
              <h4 className="text-brand-blue font-bold text-xl mb-3">Identify Nutritional Gaps</h4>
              <p className="text-base text-dark-gray leading-relaxed">
                Discover missing nutrients and superfoods your diet needs.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative md:w-60">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-100"></div>
              <h4 className="text-brand-blue font-bold text-xl mb-3">Clear Recommendations</h4>
              <p className="text-base text-dark-gray leading-relaxed">
                Get easy-to-follow nutritional advice tailored precisely to you.
              </p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative md:w-60">
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-100"></div>
              <h4 className="text-brand-blue font-bold text-xl mb-3">Achieve Your Health Goals</h4>
              <p className="text-base text-dark-gray leading-relaxed">
                Boost your energy and immunity with targeted nutritional guidance.
              </p>
            </div>
          </div>
        </div>

        <Link to="/nutrition-report">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md">
            Request Your AI Nutrition Report →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AIHabitScreening;
