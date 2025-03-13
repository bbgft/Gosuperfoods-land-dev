import { FaLeaf, FaGlobe, FaUsers } from "react-icons/fa";

export default function About() {
   return (
      <div className="bg-gray-100">
         {/* Hero Section */}
         <section className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-center px-4"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?healthy,food')" }}>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
               <h1 className="text-4xl pt-10 font-bold">Welcome to Go Superfoods!</h1>
               <p className="text-lg mt-2">Empowering health with nutrient-dense superfoods.</p>
            </div>
         </section>

         {/* About Content */}
         <div className="max-w-4xl mx-auto py-12 px-6">
            {/* Mission Section */}
            <section className="text-center">
               <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
               <p className="text-gray-700 text-lg">
                  Our mission is to provide high-quality, sustainable, and accessible superfoods that make a
                  positive impact on our customers' lives and the planet.
               </p>
            </section>

            {/* Products Section */}
            <section className="mt-12">
               <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Our Products</h2>
               <div className="grid md:grid-cols-3 gap-6">
                  {[
                     { title: "Superfood Powders", desc: "Organic and non-GMO superfood powders." },
                     { title: "Snack Bars", desc: "Superfood-rich snack bars packed with nutrients." },
                     { title: "Functional Beverages", desc: "Drinks infused with powerful superfoods." }
                  ].map((item, index) => (
                     <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </section>

            {/* Values Section */}
            <section className="mt-12">
               <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Our Values</h2>
               <div className="grid md:grid-cols-3 gap-6">
                  {[
                     { icon: <FaLeaf className="text-green-600 text-4xl" />, title: "Quality", desc: "We source only the best superfoods." },
                     { icon: <FaGlobe className="text-blue-600 text-4xl" />, title: "Sustainability", desc: "Environmentally friendly & sustainable sourcing." },
                     { icon: <FaUsers className="text-orange-600 text-4xl" />, title: "Accessibility", desc: "Superfoods for everyone, everywhere." }
                  ].map((item, index) => (
                     <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                        <div className="mb-3">{item.icon}</div>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </section>
         </div>
      </div>
   );
}
