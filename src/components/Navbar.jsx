import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, toggleCart, cartItems } = useCart();

  return (
    <nav className="bg-gradient-to-r from-green-200 to-green-300 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Go Super Food"
            className="h-16 md:h-20 object-contain transition-transform hover:scale-105"
          />
          <div className="flex flex-col justify-center leading-tight">
            <span
              className="text-green-800 text-2xl md:text-3xl font-bold uppercase"
              style={{ fontFamily: "'Audiowide', cursive" }}
            >
              GO
            </span>
            <span
              className="text-green-700 text-lg md:text-xl font-semibold uppercase relative"
              style={{ fontFamily: "'Audiowide', cursive" }}
            >
              SUPER FOOD
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-700"></span>
            </span>
            <span
              className="text-green-800 text-sm md:text-base"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              For Super Human Beings
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <Link
            to="/about-us"
            className="hover:text-green-900 transition duration-200"
          >
            About Us
          </Link>
          <Link
            to="/community"
            className="hover:text-green-900 transition duration-200"
          >
            Community
          </Link>
          <Link
            to="/newsletter"
            className="hover:text-green-900 transition duration-200"
          >
            Newsletter
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-900 transition duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          {/* User Icon */}
          <Link to="/signup" className="hover:text-green-900 transition">
            <User size={24} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-10 flex flex-col space-y-6 font-medium text-gray-800 text-lg">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <Link
            to="/about-us"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-700 transition"
          >
            About Us
          </Link>
          <Link
            to="/community"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-700 transition"
          >
            Community
          </Link>
          <Link
            to="/newsletter"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-700 transition"
          >
            Newsletter
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
