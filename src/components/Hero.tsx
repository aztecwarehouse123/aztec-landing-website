import { Play, Package, BarChart3, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-semibold text-sm">
              Next-Gen Warehouse Management
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Revolutionize Your
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Warehouse Operations
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            AZTECWMS delivers intelligent warehouse management with real-time analytics,
            AI-powered insights, and seamless automation for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started Free
            </button>
            <button className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg w-fit mb-4">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
            <p className="text-gray-600">Products Managed</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg w-fit mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">99.9%</h3>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg w-fit mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
