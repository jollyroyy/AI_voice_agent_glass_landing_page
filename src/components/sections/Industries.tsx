import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home as HomeIcon, Stethoscope, Building2, Check } from 'lucide-react';

const industries = [
  {
    title: 'Dental Clinics',
    subtitle: 'More confirmed appointments. Less phone chaos. Happier patients.',
    icon: Stethoscope,
    pain: 'Full phones, high no-show risk, long intake calls.',
    benefits: [
      'Automated appointment booking 24/7',
      'Pre-visit intake capture (forms, insurance questions)',
      'Same-day recall prompts',
      'Friendly reminders that reduce no-shows',
      'Insurance verification assistance',
    ],
  },
  {
    title: 'Medical Clinics (GPs, Specialists)',
    subtitle: 'Faster triage, fewer missed urgent calls, more time for clinical care.',
    icon: Building2,
    pain: 'Triage bottlenecks, urgent vs routine separation, lengthy admin tasks.',
    benefits: [
      'Smart triage scripts for better prioritization',
      'Urgent-call escalation to staff immediately',
      'Prescription refill routing',
      'Multilingual support for diverse patients',
      'Reduced admin burden on clinical staff',
    ],
  },
  {
    title: 'Realtors & Broker Teams',
    subtitle: 'Faster contact, more showings, shorter lead-to-listing time.',
    icon: HomeIcon,
    pain: 'Leads go cold after first inquiry, manual scheduling, no consistent follow-up.',
    benefits: [
      'Instant lead qualification when they call',
      'Automated showing scheduling',
      'Follow-ups for open-house attendees',
      'Calendar and CRM sync',
      'Never miss a hot lead again',
    ],
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
                      <p className="text-lg text-gray-600 font-semibold mb-3">{industry.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
                    <p className="text-sm text-gray-700"><strong>Pain:</strong> {industry.pain}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-semibold text-foreground mb-4">Value:</p>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-[#72b9bb] to-[#8cc5b8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-base">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
