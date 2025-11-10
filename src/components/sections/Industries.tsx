import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home as HomeIcon, Stethoscope, Building2, Check } from 'lucide-react';

const industries = [
  {
    title: 'For Dental Clinics',
    subtitle: 'Turn Your Phone System Into a Patient-Generating Machine',
    icon: Stethoscope,
    benefits: [
      'Book cleanings, consultations, and emergency appointments 24/7',
      'Handle appointment reminders and confirmations to reduce no-shows',
      'Answer insurance and billing questions without tying up your staff',
      'Capture emergency calls and route urgent cases to on-call dentists',
      'Follow up with patients who missed appointments or need to schedule their next visit',
    ],
    footer: 'Your front desk handles check-ins and complex issues. Your AI handles everything else.',
  },
  {
    title: 'For Medical Practices',
    subtitle: 'Better Patient Access, Zero Additional Staff',
    icon: Building2,
    benefits: [
      'Schedule appointments across multiple providers with real-time availability',
      'Screen and triage non-emergency calls to optimize provider time',
      'Handle prescription refill requests and route to appropriate staff',
      'Manage high call volumes during flu season without adding temporary help',
      'Provide after-hours answering service that actually helps patients',
    ],
    footer: 'Improve patient satisfaction scores while reducing administrative burden.',
  },
  {
    title: 'For Real Estate Agents',
    subtitle: 'Never Lose a Commission to a Missed Call',
    icon: HomeIcon,
    benefits: [
      'Capture listing inquiries instantly when buyers are ready to move',
      'Schedule property showings directly into your calendar',
      'Qualify leads with key questions about budget, timeline, and needs',
      'Answer questions about properties using details from your MLS listings',
      'Follow up with past clients for referrals and repeat business',
      'Handle calls during showings so you never appear unavailable',
    ],
    footer: 'Be everywhere at once. Close more deals.',
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry-Specific <span className="gradient-text">Benefits</span>
          </h2>
        </div>

        <div className="space-y-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-white"
              >
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl mb-2">{industry.title}</CardTitle>
                      <p className="text-xl text-gray-600 font-semibold">{industry.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#72b9bb] to-[#8cc5b8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 italic text-base pl-9">{industry.footer}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
