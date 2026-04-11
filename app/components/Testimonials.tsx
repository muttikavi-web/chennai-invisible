import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner, Mumbai',
      content: 'Excellent service and outstanding quality. The invisible grills are barely visible but provide great security.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Apartment Owner, Delhi',
      content: 'Professional installation and great after-sales support. Highly recommended for all families.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Business Owner, Bangalore',
      content: 'Perfect solution for our office. Security without compromising on aesthetics. Worth every penny!',
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Customer Testimonials</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from our satisfied customers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
