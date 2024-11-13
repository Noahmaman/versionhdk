import React from 'react';
import { Globe2, Shield, Briefcase, Building2, BarChart3, Clock } from 'lucide-react';

const features = [
  {
    name: 'Global Compliance',
    description: 'Stay compliant with local labor laws and regulations in 150+ countries.',
    icon: Shield,
  },
  {
    name: 'Automated Payroll',
    description: 'Process payments in multiple currencies with automated tax calculations.',
    icon: BarChart3,
  },
  {
    name: 'Contract Management',
    description: 'Generate compliant contracts and manage team documentation effortlessly.',
    icon: Briefcase,
  },
  {
    name: 'Entity Setup',
    description: 'Establish your business presence globally without setting up local entities.',
    icon: Building2,
  },
  {
    name: 'Global Coverage',
    description: 'Hire employees and contractors in over 150 countries worldwide.',
    icon: Globe2,
  },
  {
    name: 'Time Tracking',
    description: 'Monitor working hours and manage time-off requests efficiently.',
    icon: Clock,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage global teams
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            One platform to hire, pay, and manage your international team with complete compliance.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="absolute h-12 w-12 rounded-md bg-blue-600 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;