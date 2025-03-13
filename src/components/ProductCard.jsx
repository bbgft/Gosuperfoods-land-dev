import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: product.quantity ? product.quantity + 1 : 1, // Ensure at least quantity 1
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-green-600 font-bold">Rs.{product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through">
              Rs.{product.originalPrice}
            </span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Add to Cart
        </button>
        {/* <button className="bg-orange-400 text-white px-4 py-2 rounded-lg mt-2 w-full">
          Buy it Now
        </button> */}
      </div>
    </div>
  );
}

export default ProductCard;
