import { CheckCircle, Users, Clock, Leaf } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: '10+ Years Experience',
      description: 'Trusted by thousands of families across the country',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly trained professionals ensuring perfect installation',
    },
    {
      icon: Clock,
      title: 'Warranty & Support',
      description: '10-year warranty with 24/7 customer support',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and environmentally responsible practices',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Why Trust Us?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Proven track record of excellence and customer satisfaction
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

