import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MessageCircle, Bell, PhoneForwarded } from 'lucide-react';

const solutions = [
  {
    title: 'Answers common questions and qualifies callers',
    description: 'Natural language conversations that feel human, not robotic. Understands intent and guides callers through qualification.',
    icon: MessageCircle,
  },
  {
    title: 'Books, reschedules, and cancels appointments',
    description: 'Real-time calendar sync prevents double-booking and ensures smooth scheduling across your entire team.',
    icon: Calendar,
  },
  {
    title: 'Sends reminders and reduces no-shows',
    description: 'Automated, timely reminders via voice, SMS, or email keep your schedule full and reduce costly empty slots.',
    icon: Bell,
  },
  {
    title: 'Handoff to a human when needed',
    description: 'Seamless transfer with full context so your staff can pick up exactly where the conversation left off.',
    icon: PhoneForwarded,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The VoiceShine <span className="gradient-text">Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A conversational AI voice agent that handles the repetitive, time-sensitive work so your team focuses on what only humans can do: care for patients and close deals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
