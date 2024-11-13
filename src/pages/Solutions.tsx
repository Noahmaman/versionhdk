import React from 'react';
import { Users, Building2, Briefcase } from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise',
    icon: Building2,
    description: 'Scale your global workforce with enterprise-grade HR solutions.',
    features: [
      'Custom compliance frameworks',
      'Dedicated account management',
      'Advanced reporting & analytics',
      'Custom API integration',
    ],
  },
  {
    title: 'Growing Teams',
    icon: Users,
    description: 'Perfect for fast-growing companies expanding internationally.',
    features: [
      'Quick employee onboarding',
      'Automated payroll processing',
      'Basic compliance support',
      'Standard reporting',
    ],
  },
  {
    title: 'Contractors',
    icon: Briefcase,
    description: 'Manage international contractors with ease and compliance.',
    features: [
      'Contractor agreements',
      'Payment management',
      'Tax form collection',
      'Time tracking',
    ],
  },
];

const Solutions = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Solutions for Every Business
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Choose the perfect solution for your global workforce management needs
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <solution.icon className="h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-2xl font-semibold text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-gray-500">{solution.description}</p>
                <ul className="mt-8 space-y-4">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button className="w-full bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;