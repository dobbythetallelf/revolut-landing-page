import React from 'react';
import { CreditCard, Globe, LineChart, Shield } from 'lucide-react';

const RevolutLanding = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Global Banking",
      description: "Seamless international transfers and multi-currency accounts"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Smart Cards",
      description: "Virtual and physical cards with instant spending notifications"
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Investments",
      description: "Stocks, crypto, and commodities at your fingertips"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Security",
      description: "Bank-grade encryption and advanced fraud protection"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Revolut
              <span className="block text-blue-600">Banking Without Boundaries</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Join over 35 million customers revolutionizing the way they manage money globally.
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-500">
              To build the world's first truly global financial super app, where your money works as hard as you do. Whether you're sending money abroad, spending in multiple currencies, or investing in your future, Revolut makes it seamless.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Join the Financial Revolution</h2>
            <p className="mt-4 text-xl text-blue-100">
              Download Revolut today and experience banking without limits
            </p>
            <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold">Global Transfers</h3>
                <p className="mt-2 text-gray-600">Send money to 160+ countries with great exchange rates</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold">Crypto Trading</h3>
                <p className="mt-2 text-gray-600">Buy, sell and exchange 80+ cryptocurrencies instantly</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold">Smart Savings</h3>
                <p className="mt-2 text-gray-600">Earn up to 3.35% annual interest on your savings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutLanding;
