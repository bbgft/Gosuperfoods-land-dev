import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { isCartOpen, toggleCart, cartItems } = useCart();

  return (
    <nav className="bg-gradient-to-r from-green-200 to-green-300 py-4 fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Increased Logo Size */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Go Super Food" 
            className="h-20 md:h-24 object-contain"
          />
          <div className="flex flex-col items-center justify-center">
            <span 
              className="text-green-800 text-3xl font-bold uppercase"
              style={{ fontFamily: "'Audiowide', cursive" }}
            >
              GO
            </span>
            <span 
              className="text-green-700 text-xl font-semibold uppercase relative"
              style={{ fontFamily: "'Audiowide', cursive" }}
            >
              SUPER FOOD
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-700"></span>
            </span>
            <span
              className="text-green-800 text-base"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              For Super Human Beings
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-semibold text-gray-800">
          <Link to="/products" className="hover:text-green-900">Products</Link>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:text-green-900 inline-flex items-center"
            >
              About Us <ChevronDown size={18} className="ml-1"/>
            </button>
            <div className={`absolute mt-2 bg-white shadow-lg rounded-md transition duration-200 ease-in-out ${
              isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>
              <Link className="block px-4 py-2 hover:bg-green-100" to="/sustainability">
                Sustainability
              </Link>
              <Link className="block px-4 py-2 hover:bg-green-100" to="/sustainability-strategy">
                Sustainability strategy
              </Link>
              <Link className="block px-4 py-2 hover:bg-green-100" to="/our-commitments">
                Our commitments
              </Link>
              <Link className="block px-4 py-2 hover:bg-green-100" to="/policies-reports">
                Policies and reports
              </Link>
            </div>
          </div>

          <Link to="/community" className="hover:text-green-900">Community</Link>
          <Link to="/newsletter" className="text-green-600 font-bold hover:text-green-900">Newsletter</Link>
          <Link to="/contact" className="text-green-700 hover:text-green-900">Contact Us</Link>
        </div>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button className="hover:text-green-900 transition">
            <Search size={22} />
          </button>
          <Link to="/login" className="hover:text-green-900 transition">
            <User size={22} />
          </Link>
          <button className="relative hover:text-green-900 transition" onClick={toggleCart}>
            <ShoppingCart size={22} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-700 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform transition-transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
          <X size={28} />
        </button>
        <div className="mt-16 flex flex-col space-y-5 px-6 font-medium">
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/community" onClick={() => setIsMenuOpen(false)}>Community</Link>
          <Link to="/newsletter" onClick={() => setIsMenuOpen(false)}>Newsletter</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>

      {/* Cart Component */}
      {isCartOpen && <Cart />}
    </nav>
  );
}

export default Navbar;
