import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 299,
    description: 'Perfect for small teams getting started with global hiring.',
    features: [
      'Up to 5 employees',
      'Basic payroll processing',
      'Standard compliance support',
      'Email support',
      'Basic reporting',
    ],
  },
  {
    name: 'Professional',
    price: 599,
    description: 'Ideal for growing companies with international teams.',
    features: [
      'Up to 20 employees',
      'Advanced payroll features',
      'Priority compliance support',
      'Priority email & chat support',
      'Advanced reporting',
      'API access',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations requiring custom solutions.',
    features: [
      'Unlimited employees',
      'Custom payroll solutions',
      'Dedicated compliance team',
      '24/7 priority support',
      'Custom reporting',
      'Custom API integration',
      'Dedicated account manager',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Choose the plan that best fits your business needs
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                tier.featured ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  {typeof tier.price === 'number' ? (
                    <>
                      <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                      <span className="ml-1 text-xl text-gray-500">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  )}
                </div>
                <p className="mt-4 text-gray-500">{tier.description}</p>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8">
                <button
                  className={`w-full rounded-full px-4 py-2 transition ${
                    tier.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;