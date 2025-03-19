function EmpowerBusiness() {
  return (
    <div className="min-h-screen flex items-center bg-green-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in text-green-600" style={{ fontFamily: 'Poppins, sans-serif', animation: 'fadeInUp 1.2s ease-out forwards' }}>
          Empower Your Business with Go Super Foods
        </h2>
        <h3 className="text-3xl font-medium mb-6 animate-fade-in text-green-600" style={{ fontFamily: 'Poppins, sans-serif', animation: 'fadeInUp 1.2s ease-out forwards 0.2s' }}>
          Comprehensive Training for Delivering Super Foods Directly to Your Customers
        </h3>
        <p className="mx-auto mb-10" style={{ lineHeight: '1.6', maxWidth: '750px', color: '#444444' }}>
          At <strong>Go Super Foods</strong>, we specialize in empowering businesses through expert training and support. Learn exactly how to source, prepare, package, and deliver nutritious superfoods directly to your customers’ locations—efficiently and profitably.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10" style={{ marginBottom: '2rem' }}>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderRadius: '10px', animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-4">
              <span className="text-green-600 text-5xl bg-green-100 p-3 rounded-full transform transition duration-300 hover:scale-110">🎓</span>
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#3F51B5' }}>Expert-led Training Modules</h4>
            <p style={{ color: '#555555', lineHeight: '1.6' }}>Step-by-step lessons on selecting, preparing, and serving quality superfoods.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderRadius: '10px', animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-4">
              <span className="text-green-600 text-5xl bg-green-100 p-3 rounded-full transform transition duration-300 hover:scale-110">🚚</span>
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#3F51B5' }}>Efficient Sourcing & Supply Chain</h4>
            <p style={{ color: '#555555', lineHeight: '1.6' }}>Guidance on building sustainable and cost-effective superfood supply channels.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderRadius: '10px', animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.6s' }}>
            <div className="flex justify-center mb-4">
              <span className="text-green-600 text-5xl bg-green-100 p-3 rounded-full transform transition duration-300 hover:scale-110">📍</span>
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#3F51B5' }}>Customized Delivery Solutions</h4>
            <p style={{ color: '#555555', lineHeight: '1.6' }}>Learn proven strategies to smoothly integrate doorstep delivery into your existing operations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:translate-y-1 hover:shadow-xl" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '10px', animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '0.8s' }}>
            <div className="flex justify-center mb-4">
              <span className="text-green-600 text-5xl bg-green-100 p-3 rounded-full transform transition duration-300 hover:scale-110">📈</span>
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#3F51B5' }}>Marketing and Sales Insights</h4>
            <p style={{ color: '#555555', lineHeight: '1.6' }}>Training on effectively promoting superfoods to attract more customers and boost your sales.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:translate-y-1 hover:shadow-xl" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '10px', animation: 'fadeInUp 0.8s ease-out forwards', animationDelay: '1s' }}>
            <div className="flex justify-center mb-4">
              <span className="text-green-600 text-5xl bg-green-100 p-3 rounded-full transform transition duration-300 hover:scale-110">🎧</span>
            </div>
            <h4 className="text-xl font-bold mb-3" style={{ color: '#3F51B5' }}>Continuous Support & Resources</h4>
            <p style={{ color: '#555555', lineHeight: '1.6' }}>Access ongoing support, materials, and updates to stay competitive in the superfood market.</p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-green-600 text-white px-16 py-4 rounded-lg font-bold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Request Training Information →
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmpowerBusiness;
