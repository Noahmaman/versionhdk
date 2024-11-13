import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <span className="inline-flex items-center text-sm font-semibold text-blue-600 mb-4">
                New Feature
                <span className="ml-2 text-gray-500">Global Payroll Automation</span>
              </span>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6">
                <span className="block">Hire & Pay Teams</span>
                <span className="block text-blue-600">Anywhere in the World</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Simplify global hiring with our all-in-one platform for compliance, payroll, and team management in 150+ countries.
              </p>
              <div className="mt-10 sm:mt-12">
                <div className="sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Book a demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none rounded-lg shadow-2xl"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;