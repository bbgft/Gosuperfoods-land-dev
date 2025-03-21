import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Info & Map */}
        <div className="w-full lg:w-1/2 p-8 lg:p-10 bg-green-600 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
            <p className="text-white/90 mb-6">
              We'd love to hear from you! Reach out with questions, feedback, or
              just to say hello.
            </p>

            <div className="space-y-4 text-white">
              <p className="flex items-center">
                <Mail className="mr-3" /> support@gosuperfoods.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-3" /> +1 (234) 567-890
              </p>
              <p className="flex items-center">
                <MapPin className="mr-3" /> Bhubaneswar, Odisha, IN
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white/80 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-white/80 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-white/80 transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="location"
              className="w-full h-48 rounded-xl border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369217.4940409096!2d85.74389693323606!3d20.38500628439374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093f772fff7d%3A0x72871134c3465d01!2sHotel%20Lal%20Qila!5e0!3m2!1sen!2sin!4v1741790474844!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-10">
          <h3 className="text-2xl font-semibold text-green-700 mb-6">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            <textarea
              name="comments"
              rows="2"
              placeholder="Additional Comments (Optional)"
              value={formData.comments}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 hover:scale-[1.02] transition-all duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
