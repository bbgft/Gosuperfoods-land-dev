import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Using Cart Context

const Checkout = () => {
   const { cartItems, total } = useCart(); // Get cart data from context

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
   });

   const shippingCost = 10; // Flat shipping cost
   const totalAmount = total + shippingCost; // Calculate final total

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Shipping Info:", formData);
      console.log("Cart Items:", cartItems);
   };

   return (
      <div className="min-h-screen bg-gray-100 py-10 px-4">
         <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 my-6 text-center">
               Checkout
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
               {/* Left - Shipping Form */}
               <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                     Shipping Address
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                     {[
                        { name: "name", placeholder: "Full Name", type: "text" },
                        { name: "email", placeholder: "Email", type: "email" },
                        { name: "phone", placeholder: "Phone Number", type: "tel" },
                        { name: "address", placeholder: "Street Address", type: "text" },
                        { name: "city", placeholder: "City", type: "text" },
                        { name: "postalCode", placeholder: "Postal Code", type: "number" },
                        { name: "country", placeholder: "Country", type: "text" },
                     ].map((field) => (
                        <input
                           key={field.name}
                           name={field.name}
                           type={field.type}
                           placeholder={field.placeholder}
                           value={formData[field.name]}
                           onChange={handleChange}
                           className="w-full p-3 border rounded-md focus:ring-2 focus:ring-green-500"
                           required
                        />
                     ))}

                     <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition"
                     >
                        Pay for your order
                     </button>
                  </form>
               </div>

               {/* Right - Order Summary */}
               <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                     Order Summary
                  </h3>

                  <div className="space-y-3 text-lg">
                     {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between">
                           <span>{item.name} x {item.quantity}</span>
                           <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                     ))}

                     <hr className="my-3" />
                     <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>Rs. {total.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Shipping Fee:</span>
                        <span>Rs. {shippingCost.toFixed(2)}</span>
                     </div>
                     <hr className="my-3" />
                     <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>Rs. {totalAmount.toFixed(2)}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Checkout;
