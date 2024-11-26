import { Link, useLocation } from 'react-router-dom';
import { MessageSquareText, Pill, BookOpen, ShoppingCart, User, Plus } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const menuItems = [
    {
      icon: <MessageSquareText className="h-5 w-5" />,
      text: 'Tư Vấn Y Tế',
      path: '/consultation'
    },
    {
      icon: <Pill className="h-5 w-5" />,
      text: 'Nhà Thuốc',
      path: '/pharmacy'
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      text: 'Tin Tức Y Tế',
      path: '/blog'
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      text: 'Giỏ Hàng',
      path: '/cart'
    },
    {
      icon: <User className="h-5 w-5" />,
      text: 'Tài Khoản',
      path: '/profile'
    }
  ];

  return (
    <div className="w-[260px] bg-gray-50 border-r border-gray-200 flex flex-col h-full">
      <div className="p-3">
        <Link 
          to="/consultation" 
          className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span className="text-gray-700">Tư vấn mới</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center gap-3 p-3 mx-2 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-gray-200'
                : 'hover:bg-gray-100'
            }`}
          >
            {item.icon}
            <span className="text-gray-700">{item.text}</span>
          </Link>
        ))}
      </div>

      <div className="p-3 border-t border-gray-200">
        <div className="flex items-center gap-3 p-3">
          <User className="h-5 w-5" />
          <span className="text-gray-700">DrPill Healthcare</span>
        </div>
      </div>
    </div>
  );
}