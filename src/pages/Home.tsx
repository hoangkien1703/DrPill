import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquareText, Pill, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">DrPill - Bác Sĩ AI Của Bạn</h1>
        <p className="text-xl text-gray-600">Tư vấn y tế thông minh và mua thuốc trực tuyến</p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <MessageSquareText className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Tư Vấn Y Tế AI</h2>
          <p className="text-gray-600 mb-4">Nhận tư vấn y tế từ AI thông minh 24/7</p>
          <Link to="/consultation" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Tư vấn ngay
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Pill className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Nhà Thuốc Online</h2>
          <p className="text-gray-600 mb-4">Đặt mua thuốc trực tuyến dễ dàng</p>
          <Link to="/pharmacy" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Mua thuốc
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <Truck className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Giao Hàng Tận Nơi</h2>
          <p className="text-gray-600 mb-4">Nhận thuốc tại nhà nhanh chóng</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;