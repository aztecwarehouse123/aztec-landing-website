import { Check, TrendingUp, Package, Users, Zap, BarChart3 } from 'lucide-react';

export default function About() {
  const benefits = [
    'Reduce operational costs by up to 40%',
    'Increase inventory accuracy to 99.9%',
    'Streamline order processing by 60%',
    'Real-time visibility across all operations',
    'AI-powered demand forecasting',
    'Seamless integration with existing systems',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Future of
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Warehouse Management
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              AZTECWMS is a comprehensive warehouse management system designed for modern businesses.
              With cutting-edge technology and intuitive design, we help you optimize every aspect
              of your warehouse operations.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Dashboard Overview</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                  <Package className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-sm text-gray-600">Total Products</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">$1.2M</p>
                  <p className="text-sm text-gray-600">Inventory Value</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                  <Users className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">124</p>
                  <p className="text-sm text-gray-600">Orders Today</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                  <Zap className="w-8 h-8 text-orange-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">99.9%</p>
                  <p className="text-sm text-gray-600">Accuracy</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Processing Efficiency</span>
                  <span className="text-sm font-semibold text-gray-900">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-4 shadow-lg animate-bounce">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
