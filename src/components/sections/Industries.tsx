import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home as HomeIcon, Heart, Hotel, ShoppingCart, DollarSign } from 'lucide-react';

const industries = [
  {
    title: 'Real Estate',
    description: 'Qualify leads, schedule property viewings, and provide instant answers to buyer questions 24/7.',
    icon: HomeIcon,
  },
  {
    title: 'Healthcare',
    description: 'Manage appointment bookings, patient inquiries, and follow-up calls with HIPAA-compliant AI agents.',
    icon: Heart,
  },
  {
    title: 'Hospitality',
    description: 'Handle reservations, guest inquiries, and concierge services with natural voice interactions.',
    icon: Hotel,
  },
  {
    title: 'E-commerce',
    description: 'Provide product information, process orders, and handle customer support at scale.',
    icon: ShoppingCart,
  },
  {
    title: 'Financial Services',
    description: 'Assist with account inquiries, loan applications, and provide secure financial guidance.',
    icon: DollarSign,
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized AI voice solutions for diverse business sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-white"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
