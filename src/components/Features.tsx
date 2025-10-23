import {
  BarChart3,
  Package,
  Brain,
  MapPin,
  Users,
  FileText,
  ShoppingCart,
  Smartphone,
  Cloud,
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Advanced dashboard with live metrics and AI insights',
  },
  {
    icon: Package,
    title: 'Smart Inventory Management',
    description: 'Automated stock tracking and barcode scanning',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Machine learning for demand forecasting',
  },
  {
    icon: MapPin,
    title: 'Location Intelligence',
    description: 'Advanced warehouse mapping and optimization',
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    description: 'Secure multi-user system with permissions',
  },
  {
    icon: FileText,
    title: 'Advanced Reporting',
    description: 'Comprehensive analytics with PDF exports',
  },
  {
    icon: ShoppingCart,
    title: 'Order Management',
    description: 'Streamlined inbound/outbound operations',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Works seamlessly across all devices',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Secure Firebase-based data management',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Manage Your Warehouse
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg w-fit mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
