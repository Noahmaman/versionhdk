import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Global Hiring</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Payroll</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Compliance</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Time Tracking</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">API Reference</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Security</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            © 2024 GlobalHR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;