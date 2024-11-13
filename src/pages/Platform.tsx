import React from 'react';
import { Globe2, Shield, Briefcase, Building2, BarChart3, Clock } from 'lucide-react';

const features = [
  {
    title: 'Global Payroll',
    description: 'Automated payroll processing in 150+ countries with built-in compliance and tax calculations.',
    icon: BarChart3,
    color: 'bg-blue-600',
  },
  {
    title: 'Compliance Management',
    description: 'Stay compliant with local labor laws, tax regulations, and employment requirements.',
    icon: Shield,
    color: 'bg-green-600',
  },
  {
    title: 'Time & Attendance',
    description: 'Track working hours, manage time-off requests, and monitor attendance across time zones.',
    icon: Clock,
    color: 'bg-purple-600',
  },
];

const Platform = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Powerful Platform for</span>
              <span className="block text-blue-600">Global HR Management</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Streamline your global workforce management with our comprehensive HR platform. Handle everything from payroll to compliance in one place.
            </p>
          </div>

          <div className="mt-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="relative bg-white rounded-2xl shadow-xl p-8">
                  <div className={`absolute -top-6 left-6 ${feature.color} rounded-xl p-3`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-4 text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;