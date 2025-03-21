import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-600 text-white">
      {/* Newsletter Section */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our emails</h2>
          <p className="mb-6 text-green-100">
            Be the first to know about exclusive offers, health tips, and new
            superfood launches.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-green-500 mx-6 sm:mx-12"></div>

      {/* Footer Bottom */}
      <div className="py-6 text-center text-sm text-green-100">
        © 2025, <span className="font-semibold text-white">Go Superfoods</span>.
        Powered by{" "}
        <span className="font-semibold text-white">Bank 'O' Bima</span>.
      </div>
    </footer>
  );
}

export default Footer;
