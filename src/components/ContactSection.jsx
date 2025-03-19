import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <div className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-600">
          Get in Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-8 h-8 mr-4 text-green-600" />
                <h3 className="text-2xl font-semibold">Office Locations</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-medium">Bhubaneswar Office</p>
                  <p className="text-sm">
                    Prateeksha, Plot No-2079/3571, Sriramnagar,<br />
                    Samantrapur, Bhubaneswar-751002, Odisha
                  </p>
                </div>
                <div>
                  <p className="font-medium">Pune Office</p>
                  <p className="text-sm">
                    Flat No-10, Karmakshetra Housing Society,<br />
                    PCNTDA, Ravet, Pune, Maharashtra-412101
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="w-8 h-8 mr-4 text-green-600" />
                <h3 className="text-2xl font-semibold">Contact Details</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Phone: +91 89175 52860</p>
                <p>Email: gosuperfoodsind@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
