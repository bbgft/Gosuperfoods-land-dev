function EmpowerBusiness() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2
          className="text-5xl font-extrabold mb-4 text-green-700 leading-tight"
          style={{
            fontFamily: "Poppins, sans-serif",
            animation: "fadeInUp 1s ease-out forwards",
          }}
        >
          Empower Your Business with Go Super Foods
        </h2>
        <h3
          className="text-2xl md:text-3xl font-medium mb-8 text-green-600"
          style={{
            fontFamily: "Poppins, sans-serif",
            animation: "fadeInUp 1s ease-out forwards",
            animationDelay: "0.2s",
          }}
        >
          Turnkey Training to Deliver Superfoods Straight to Your Customers
        </h3>
        <p
          className="mx-auto mb-12 max-w-2xl text-gray-700 text-lg leading-relaxed"
          style={{
            animation: "fadeInUp 1s ease-out forwards",
            animationDelay: "0.4s",
          }}
        >
          At <strong className="text-green-700">Go Super Foods</strong>, we
          equip your business with actionable training to source, prepare, and
          deliver high-impact, nutrient-rich superfoods—profitably and at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
          {[
            {
              icon: "🎓",
              title: "Expert-led Training Modules",
              desc: "Step-by-step lessons on selecting, preparing, and serving quality superfoods.",
            },
            {
              icon: "🚚",
              title: "Efficient Sourcing & Supply Chain",
              desc: "Guidance on building sustainable and cost-effective supply channels.",
            },
            {
              icon: "📍",
              title: "Customized Delivery Solutions",
              desc: "Strategies for seamless doorstep delivery integration.",
            },
            {
              icon: "📈",
              title: "Marketing & Sales Insights",
              desc: "Learn how to attract loyal customers and increase revenue.",
            },
            {
              icon: "🎧",
              title: "Ongoing Support & Resources",
              desc: "Stay sharp with continuous updates and support.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]"
              style={{
                animation: "fadeInUp 0.8s ease-out forwards",
                animationDelay: `${0.2 + idx * 0.2}s`,
              }}
            >
              <div className="flex justify-center mb-4">
                <span className="text-5xl bg-green-100 text-green-600 p-4 rounded-full shadow-sm transition-transform duration-300 hover:scale-110">
                  {card.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-indigo-600">
                {card.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition duration-300 hover:bg-green-700 hover:scale-105 hover:shadow-xl animate-bounce">
            Request Training Info →
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmpowerBusiness;
