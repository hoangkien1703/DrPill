import React from 'react';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Paracetamol",
      price: 35000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Giỏ Hàng</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Giỏ hàng trống</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-blue-600 font-medium">
                      {item.price.toLocaleString('vi-VN')}đ
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border rounded">-</button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button className="px-3 py-1 border rounded">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Tổng cộng:</span>
                <span className="text-xl font-bold text-blue-600">
                  {total.toLocaleString('vi-VN')}đ
                </span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
                Thanh Toán
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;