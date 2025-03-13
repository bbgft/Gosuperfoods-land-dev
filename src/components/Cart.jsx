import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, toggleCart } = useCart();

  // Ensure valid total calculation
  const total = cartItems.reduce((acc, item) => {
    const itemTotal = Number(item.price) * (Number(item.quantity) || 1);
    return acc + itemTotal;
  }, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full">
          <X size={20} />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">Rs. {Number(item.price).toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, Math.max(1, Number(e.target.value)))}
                    className="w-12 text-center font-semibold text-lg border rounded"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 bg-red-100 hover:bg-red-200 rounded ml-2"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-6 bg-white border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-semibold">Rs. {total.toFixed(2)}</span>
          </div>
          <Link to='/checkout'>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
