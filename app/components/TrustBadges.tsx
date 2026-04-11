import { Award, Shield, Zap } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      stat: '10,000+',
      label: 'Happy Customers',
    },
    {
      icon: Shield,
      stat: '10+',
      label: 'Years Experience',
    },
    {
      icon: Zap,
      stat: '5000+',
      label: 'Projects Completed',
    },
  ];

  return (
    <section className="section-padding bg-blue-600 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index}>
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <p className="text-4xl font-bold mb-2">{badge.stat}</p>
                <p className="text-blue-100">{badge.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
