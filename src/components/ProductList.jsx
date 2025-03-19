import { useState } from "react";
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard'
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
  },
  {
    id: 2,
    name: "PowerBite",
    price: 1500,
    originalPrice: 2100,
    image: product2,
    description: "Boost your energy levels with PowerBite!",
  },
  {
    id: 3,
    name: "Spirulina Powder",
    price: 940,
    originalPrice: 1300,
    image: product3,
    description: "Rich in nutrients and antioxidants.",
  },
];

export default function ProductList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </div>
  );
}

// function ProductCard({ product }) {
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="border rounded-lg p-4 shadow-lg text-center">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded-md"
//       />
//       <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
//       <p className="text-gray-600">{product.description}</p>
//       <p className="text-lg font-bold mt-2">Rs. {product.price}</p>
//       <div className="flex justify-center items-center mt-3">
//         <button
//           className="px-3 py-1 bg-gray-200 rounded-l"
//           onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//         >
//           -
//         </button>
//         <span className="px-4">{quantity}</span>
//         <button
//           className="px-3 py-1 bg-gray-200 rounded-r"
//           onClick={() => setQuantity(quantity + 1)}
//         >
//           +
//         </button>
//       </div>
//       <button
//         onClick={() => addToCart(product)}
//         className="bg-green-500 text-white px-4 py-2 rounded mt-3 w-full">
//         Add to Cart
//       </button>
//       <button
//         className="bg-black text-white px-4 py-2 rounded mt-2 w-full">
//         Buy it Now
//       </button>
//     </div>
//   );
// }
