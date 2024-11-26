import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { 
  MessageSquareText, 
  Pill, 
  User, 
  Globe, 
  BookOpen,
  Menu as MenuIcon 
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { user, signOut } = useAuth();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Pill className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">DrPill</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/consultation" className="nav-link">
              <MessageSquareText className="h-5 w-5" />
              <span>Tư Vấn Y Tế</span>
            </Link>
            <Link to="/pharmacy" className="nav-link">
              <Pill className="h-5 w-5" />
              <span>Nhà Thuốc</span>
            </Link>
            <Link to="/blog" className="nav-link">
              <BookOpen className="h-5 w-5" />
              <span>Tin Tức Y Tế</span>
            </Link>

            {/* Language Switcher */}
            <Menu as="div" className="relative">
              <Menu.Button className="nav-link">
                <Globe className="h-5 w-5" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm w-full text-left`}
                      onClick={() => changeLanguage('vi')}
                    >
                      Tiếng Việt
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm w-full text-left`}
                      onClick={() => changeLanguage('en')}
                    >
                      English
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

            {/* User Menu */}
            {user ? (
              <Menu as="div" className="relative">
                <Menu.Button className="nav-link">
                  <User className="h-5 w-5" />
                  <span>{user.displayName || 'Tài Khoản'}</span>
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } block px-4 py-2 text-sm`}
                      >
                        Hồ Sơ
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } block px-4 py-2 text-sm w-full text-left text-red-600`}
                        onClick={signOut}
                      >
                        Đăng Xuất
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            ) : (
              <Link to="/auth" className="nav-link">
                <User className="h-5 w-5" />
                <span>Đăng Nhập</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Menu as="div" className="md:hidden">
            <Menu.Button className="p-2">
              <MenuIcon className="h-6 w-6" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/consultation"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm`}
                  >
                    Tư Vấn Y Tế
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/pharmacy"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm`}
                  >
                    Nhà Thuốc
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/blog"
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } block px-4 py-2 text-sm`}
                  >
                    Tin Tức Y Tế
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
}