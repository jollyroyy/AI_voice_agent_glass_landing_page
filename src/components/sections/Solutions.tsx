import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Headphones, UserCheck, Calendar, MessageSquare } from 'lucide-react';

const solutions = [
  {
    title: 'Customer Support Automation',
    description: 'Handle customer inquiries 24/7 with intelligent AI agents that understand context and provide accurate solutions instantly.',
    icon: Headphones,
  },
  {
    title: 'Lead Qualification & Follow-Up',
    description: 'Automatically qualify leads, schedule follow-ups, and nurture prospects through personalized conversations.',
    icon: UserCheck,
  },
  {
    title: 'Appointment Scheduling',
    description: 'Seamlessly book, reschedule, and manage appointments through natural voice conversations.',
    icon: Calendar,
  },
  {
    title: 'Voice Surveys & Feedback',
    description: 'Collect valuable customer feedback through engaging voice interactions and automated surveys.',
    icon: MessageSquare,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful AI voice agents tailored to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {solution.description}
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
