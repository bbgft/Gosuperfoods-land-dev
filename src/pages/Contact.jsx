import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

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
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
         <div className="bg-white rounded-2xl mt-10 shadow-lg p-8 max-w-4xl w-full">
            <h2 className="text-3xl font-semibold text-green-700 text-center mb-6">
               Contact Us
            </h2>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
               <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                     <Mail className="mr-2 text-green-600" /> support@gosuperfoods.com
                  </p>
                  <p className="flex items-center text-gray-600">
                     <Phone className="mr-2 text-green-600" /> +1 (234) 567-890
                  </p>
                  <p className="flex items-center text-gray-600">
                     <MapPin className="mr-2 text-green-600" /> Bhubaneswar, Odisha, IN
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-4">
                     <a href="#" className="text-green-600 hover:text-green-800">
                        <Facebook size={24} />
                     </a>
                     <a href="#" className="text-green-600 hover:text-green-800">
                        <Twitter size={24} />
                     </a>
                     <a href="#" className="text-green-600 hover:text-green-800">
                        <Instagram size={24} />
                     </a>
                  </div>
               </div>

               {/* Google Maps Embed */}
               <iframe
                  className="rounded-lg w-full h-40 md:h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369217.4940409096!2d85.74389693323606!3d20.38500628439374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093f772fff7d%3A0x72871134c3465d01!2sHotel%20Lal%20Qila!5e0!3m2!1sen!2sin!4v1741790474844!5m2!1sen!2sin"
                  loading="lazy"
               ></iframe>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
               <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
               />
               <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
               />
               <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
               />
               <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
               ></textarea>
               <textarea
                  name="comments"
                  rows="2"
                  placeholder="Additional Comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
               ></textarea>
               <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
               >
                  Send Message
               </button>
            </form>
         </div>
      </div >
   );
}
