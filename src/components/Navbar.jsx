import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import logo1 from "../assets/Go_Super_Foods_Logo.png";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, toggleCart, cartItems } = useCart();

  return (
    <nav className="bg-green-100 py-3 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between relative">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo1} alt="Super Foods" className="h-16" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {location.pathname !== "/" && (
            <Link to="/" className="hover:text-green-700 transition duration-300">
              Home
            </Link>
          )}
          <Link to="/product/2" className="hover:text-green-700">PowerBite</Link>
          <Link to="/product/1" className="hover:text-green-700">Moringa Capsules</Link>
          <Link to="/product/3" className="hover:text-green-700">Spirulina</Link>
          <Link to="/about" className="hover:text-green-700">About Us</Link>
          <Link to="/contact" className="hover:text-green-700">Contact Us</Link>
        </div>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-green-200 rounded-full">
            <Search size={20} />
          </button>
          <Link to="/login" className="p-2 hover:bg-green-200 rounded-full">
            <User size={20} />
          </Link>
          <button
            className="p-2 hover:bg-green-200 rounded-full relative"
            onClick={toggleCart}
          >
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Fullscreen Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
          <X size={28} />
        </button>

        <div className="flex flex-col space-y-6 p-6 mt-10">
          {location.pathname !== "/" && (
            <Link to="/" className="block text-lg hover:text-green-700" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          )}
          <Link to="/product/2" className="block text-lg hover:text-green-700" onClick={() => setIsMenuOpen(false)}>PowerBite</Link>
          <Link to="/product/1" className="block text-lg hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Moringa Capsules</Link>
          <Link to="/product/3" className="block text-lg hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Spirulina</Link>
          <Link to="/about" className="block text-lg hover:text-green-700" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="block text-lg hover:text-green-700" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>

      {/* Cart Component */}
      {isCartOpen && <Cart />}
    </nav>
  );
}

export default Navbar;
