import { FaSchool, FaHandsHelping, FaUsers } from 'react-icons/fa';

export default function CommunityPrograms() {
  return (
    <div className="min-h-screen flex items-center bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-600">
          Community & Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Educate Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-600 mb-4">
              <FaSchool className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Educate
            </h3>
            <p className="text-gray-600 text-center">
              Our Superfoods School Program teaches nutrition and healthy living to communities.
            </p>
          </div>

          {/* Empower Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-600 mb-4">
              <FaHandsHelping className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Empower
            </h3>
            <p className="text-gray-600 text-center">
              We create social enterprises that empower local communities through sustainable practices.
            </p>
          </div>

          {/* Engage Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-green-600 mb-4">
              <FaUsers className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              Engage
            </h3>
            <p className="text-gray-600 text-center">
              We engage communities through workshops, events, and collaborative projects.
            </p>
          </div>
        </div>

        {/* Ambassador Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-600 mb-6">
            Join the Superfood Revolution!
          </h3>
          <p className="text-gray-600 mb-8">
            Become a Go Superfoods Ambassador and help spread the message of health and sustainability.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
