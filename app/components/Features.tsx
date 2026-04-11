import { Shield, Eye, Zap, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Maximum Safety',
      description: 'Protects your family from intrusions while maintaining perfect visibility',
    },
    {
      icon: Eye,
      title: 'Invisible Design',
      description: 'Unobstructed views and natural light without compromising security',
    },
    {
      icon: Zap,
      title: 'Durable Built',
      description: 'Weather-resistant materials designed to last decades',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'ISO certified and internationally recognized standards',
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Why Choose Falcon Invisible Grills?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience the perfect blend of security and elegance
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
