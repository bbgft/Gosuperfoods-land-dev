import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.webp';

function HeroSection() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Empowering a Healthier World"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white shadow-lg">
            Empowering a Healthier World,
          </h1>

          <p className="text-2xl md:text-3xl mb-8 text-white shadow-lg">
            One Superfood at a Time!
          </p>

          <Link to="/about">
            <button className="bg-green-600 text-white px-10 md:px-12 py-4 rounded-lg font-bold hover:bg-green-800 hover:scale-105 transition duration-300 transform">
              Join Our Movement →
            </button>
          </Link>

          <div className="mt-8 inline-block bg-black bg-opacity-50 px-6 py-4 rounded">
            <p className="italic text-lg md:text-xl text-white shadow-lg">
              We are dedicated to providing nutritious superfoods that positively impact your health and well-being—making it accessible to everyone, every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
