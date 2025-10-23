import { Star, Users, TrendingDown, Heart } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    company: 'TechLogistics Inc.',
    content:
      'AZTECWMS transformed our warehouse operations completely. The real-time analytics and AI insights helped us reduce costs by 35% and improve accuracy to 99.8%.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Global Supply Co.',
    content:
      'The intuitive interface and powerful automation features made it easy for our team to adapt. We\'ve seen a 50% increase in order processing speed.',
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Warehouse Director',
    company: 'E-commerce Solutions',
    content:
      'The location intelligence and barcode scanning features are game-changers. Our inventory accuracy is now at 99.9% and picking errors are down 80%.',
    avatar: 'ER',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: TrendingDown, value: '40%', label: 'Average Cost Reduction' },
  { icon: Heart, value: '99.9%', label: 'Customer Satisfaction' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Industry Leaders Worldwide
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
