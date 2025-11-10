import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home as HomeIcon, Stethoscope, Building2, Check } from 'lucide-react';

const industries = [
  {
    title: 'Healthcare & Dental Practices',
    subtitle: 'HIPAA-Compliant Patient Communication',
    icon: Stethoscope,
    benefits: [
      'Insurance verification and eligibility checks',
      'Appointment reminders to reduce no-shows',
      'Prescription refill request routing',
      'Emergency vs. non-emergency triage',
      'New patient intake coordination',
      'Recall and reactivation campaigns',
      'Integration with Dentrix, Epic, Kareo, and more',
    ],
    footer: 'HIPAA-compliant data encryption with secure PHI handling protocols and BAA included.',
  },
  {
    title: 'Real Estate Professionals',
    subtitle: 'Never Miss a Buyer or Seller Again',
    icon: HomeIcon,
    benefits: [
      'Property-specific inquiries from MLS data',
      'Showing schedule coordination',
      'Buyer/seller pre-qualification',
      'Open house registration',
      'Mortgage pre-approval status capture',
      'Comparative market analysis requests',
      'Integration with Zillow, Follow Up Boss, MLS systems',
    ],
    footer: 'Automated follow-up sequences with drip campaign coordination and market updates.',
  },
  {
    title: 'Professional Services',
    subtitle: 'Consultation Booking Made Effortless',
    icon: Building2,
    benefits: [
      'Service package explanation',
      'Pricing tier guidance',
      'Consultation scheduling',
      'Document collection coordination',
      'Project scope capture',
      'Proposal follow-up',
      'Integration with Salesforce, HubSpot, Calendly',
    ],
    footer: 'Seamless integration with your existing CRM, calendar, and project management tools.',
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
