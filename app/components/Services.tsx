import { Grid2x2, DoorOpen, Wrench, Home } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Grid2x2,
      title: 'Window Grills',
      description: 'Custom invisible grill solutions for windows of all sizes',
    },
    {
      icon: DoorOpen,
      title: 'Door Grills',
      description: 'Secure yet elegant invisible grills for main and balcony doors',
    },
    {
      icon: Wrench,
      title: 'Installation & Maintenance',
      description: 'Professional installation with lifetime maintenance support',
    },
    {
      icon: Home,
      title: 'Custom Design',
      description: 'Tailored solutions for residential and commercial spaces',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive grill solutions for every need
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex gap-6 p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
