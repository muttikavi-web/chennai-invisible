'use client';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description: 'Get expert advice from our specialists about your requirements',
    },
    {
      number: '02',
      title: 'Site Assessment',
      description: 'Our team visits your home for detailed measurements and analysis',
    },
    {
      number: '03',
      title: 'Custom Design',
      description: 'Personalized design solution tailored to your space and needs',
    },
    {
      number: '04',
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians with precision',
    },
    {
      number: '05',
      title: 'Quality Check',
      description: 'Comprehensive testing to ensure perfect functionality and beauty',
    },
    {
      number: '06',
      title: 'Lifetime Support',
      description: 'Ongoing maintenance and support throughout product lifecycle',
    },
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Our Process</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Simple, transparent, and customer-focused approach
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-4 opacity-20">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-blue-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
