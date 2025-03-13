import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'

const products = [
  {
    id: 1,
    name: "Moringa Capsules",
    originalPrice: 1750,
    price: 1000,
    image: product1,
    description: "Nature's Super Food",
    alert: "Moringa supplements are not recommended for pregnant women or individuals with piles or kidney issues",
    special: 'Traditional Panjeeri Mixed with Power Booster Ingredients',
    isAbsoluteSpecial: 'Discover the perfect blend of tradition and modern nutrition with our Traditional Panjeeri Mixed with Power Booster Ingredients. This wholesome and nutrient-packed delicacy is crafted from a time-honored recipe, enriched with carefully selected power-boosting superfoods to energize your day',
    ingredients: ["Almonds", "Almonds", "Green Gram", "Dry Dates", "Samolina", "Coconut", "Poppy seeds", "Fox Nuts", "Cashew Nuts", "Walnuts", "Fennel Seeds", "Pumpkin Seeds", "Seasame Seeds", "Mix Melon Seeds(4maghaz)", "Edible Gum", "Desi Ghee", "Desi Gur"],
    banefis: ["All the ingredients used are a great Power Booster",
      "Almonds are best for your skin glow",
      "Edible Gum best for your bone strength",
      "Coconut controls your sugar",
      "Green Gram is best for source of protein and give immunity and digestion",
      "Semolina is naturally high in iron and works as folic acid increasing the conception rate in women",
      "Seasame seeds lowers cholestrol level and blood pressure",
      "Pumpkin seeds plays vital role in fertility",
      "cashew nuts",],

  },
  {
    id: 2,
    name: "PowerBite",
    originalPrice: 2100,
    price: 1500,
    image: product2,
    description: "Boost your energy levels with PowerBite!",
    alert: "PowerBite contains nuts and is not suitable for individuals with nut allergies",
    special: 'Traditional Panjeeri Mixed with Power Booster Ingredients',
    isAbsoluteSpecial: 'Discover the perfect blend of tradition and modern nutrition with our Traditional Panjeeri Mixed with Power Booster Ingredients. This wholesome and nutrient-packed delicacy is crafted from a time-honored recipe, enriched with carefully selected power-boosting superfoods to energize your day.',
    ingredients: ["Almonds", "Almonds", "Green Gram", "Dry Dates", "Samolina", "Coconut", "Poppy seeds", "Fox Nuts", "Cashew Nuts", "Walnuts", "Fennel Seeds", "Pumpkin Seeds", "Seasame Seeds", "Mix Melon Seeds(4maghaz)", "Edible Gum", "Desi Ghee", "Desi Gur"],
    banefis: ["All the ingredients used are a great Power Booster",
      "Almonds are best for your skin glow",
      "Edible Gum best for your bone strength",
      "Coconut controls your sugar",
      "Green Gram is best for source of protein and give immunity and digestion",
      "Semolina is naturally high in iron and works as folic acid increasing the conception rate in women",
      "Seasame seeds lowers cholestrol level and blood pressure",
      "Pumpkin seeds plays vital role in fertility",
      "cashew nuts",],
  },
  {
    id: 3,
    name: "Spirulina Powder",
    originalPrice: 1300,
    price: 940,
    image: product3,
    description: "Rich in nutrients and antioxidants",
    alert: "Consult a healthcare professional before use if you have any medical conditions",
    special: 'Traditional Panjeeri Mixed with Power Booster Ingredients',
    isAbsoluteSpecial: 'Discover the perfect blend of tradition and modern nutrition with our Traditional Panjeeri Mixed with Power Booster Ingredients. This wholesome and nutrient-packed delicacy is crafted from a time-honored recipe, enriched with carefully selected power-boosting superfoods to energize your day',
    ingredients: ["Almonds", "Almonds", "Green Gram", "Dry Dates", "Samolina", "Coconut", "Poppy seeds", "Fox Nuts", "Cashew Nuts", "Walnuts", "Fennel Seeds", "Pumpkin Seeds", "Seasame Seeds", "Mix Melon Seeds(4maghaz)", "Edible Gum", "Desi Ghee", "Desi Gur"],
    banefis: ["All the ingredients used are a great Power Booster",
      "Almonds are best for your skin glow",
      "Edible Gum best for your bone strength",
      "Coconut controls your sugar",
      "Green Gram is best for source of protein and give immunity and digestion",
      "Semolina is naturally high in iron and works as folic acid increasing the conception rate in women",
      "Seasame seeds lowers cholestrol level and blood pressure",
      "Pumpkin seeds plays vital role in fertility",
      "cashew nuts",],
  },
];

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, cartItems, updateQuantity } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  const cartItem = cartItems.find((item) => item.id === product?.id);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  if (!product) {
    return <h2 className="text-center text-red-600">Product not found.</h2>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 mt-10 py-5 md:grid-cols-2 gap-8">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-green-600">Rs.{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">Rs.{product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 border-r hover:bg-gray-100" onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}>-</button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-none focus:ring-0"
                />
                <button className="px-3 py-1 border-l hover:bg-gray-100" onClick={() => handleQuantityChange(quantity + 1)}>+</button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200">
              Add to Cart
            </button>
            <Link to='/checkout'>
              {/* <button className="bg-orange-400 text-white px-4 py-2 rounded-lg mt-2 w-full">
                Buy it Now
              </button> */}
            </Link>
          </div>

          {product.alert && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-700"><strong>ALERT:</strong> {product.alert}</p>
            </div>
          )}

          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">
              {product.special}
            </h1>
            <p className="text-lg text-gray-700 text-center mb-8">
              {product.isAbsoluteSpecial}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            {product.ingredients.map((item, index) => (
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li key={index}>{item}</li>
              </ul>
            ))}


            <h2 className="text-2xl font-semibold mt-6 mb-4">Benefits</h2>
            {product.banefis.map((item, index) => (
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li key={index}>{item}</li>
              </ul>
            ))}


            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-gray-700">#weightloss #weightgain #eyesight #bonehealth #controldiabetes</p>
              {/* <p className="mt-2 text-gray-600">Share.</p> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
