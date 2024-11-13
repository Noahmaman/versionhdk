import React from 'react';

const stats = [
  { id: 1, name: 'Countries Supported', value: '150+' },
  { id: 2, name: 'Global Customers', value: '10,000+' },
  { id: 3, name: 'Compliance Rate', value: '100%' },
  { id: 4, name: 'Time Saved', value: '85%' },
];

const Stats = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by companies worldwide
          </h2>
          <p className="mt-3 text-xl text-blue-200 sm:mt-4">
            Join thousands of companies managing their global workforce with our platform
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col mt-10 sm:mt-0">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-blue-200">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;