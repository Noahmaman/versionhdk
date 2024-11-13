import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/platform', label: 'Platform' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/pricing', label: 'Pricing' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">GlobalHR</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } transition`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/login"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Log in
            </Link>
            <Link 
              to="/signup"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Sign up
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;