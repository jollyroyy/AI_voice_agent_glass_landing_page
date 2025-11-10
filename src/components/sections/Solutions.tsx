import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Calendar, MessageCircle, Zap, Users, Bell, PhoneForwarded } from 'lucide-react';

const solutions = [
  {
    title: 'Advanced Conversational AI',
    description: 'Understands intent, context, and nuance—not just keywords. Handles interruptions naturally and recognizes urgency and emotion.',
    icon: MessageCircle,
  },
  {
    title: 'Intelligent Call Routing',
    description: 'Identifies callers, pulls relevant history, routes to appropriate workflow, and begins conversation within seconds.',
    icon: PhoneForwarded,
  },
  {
    title: 'Natural Conversation Engine',
    description: 'Greets with custom messages, listens actively, handles multiple topics, and adjusts tone based on caller emotion.',
    icon: Users,
  },
  {
    title: 'Smart Action Execution',
    description: 'Checks real-time availability, books appointments, sends confirmations, updates CRM, and transfers urgent calls.',
    icon: Zap,
  },
  {
    title: 'Real-Time Calendar Integration',
    description: 'Sees your exact availability, prevents double-booking, handles same-day emergencies, and manages waitlists.',
    icon: Calendar,
  },
  {
    title: 'Lead Qualification & Capture',
    description: 'Asks the right questions to qualify every caller and automatically flows information into your CRM.',
    icon: Phone,
  },
  {
    title: '24/7 Availability',
    description: 'Handle unlimited simultaneous calls any time, day or night. Scale instantly without hiring during peak times.',
    icon: Bell,
  },
  {
    title: 'Learning & Optimization',
    description: 'Every call makes your agent smarter. Learns new scenarios, adapts to patterns, and improves accuracy over time.',
    icon: Zap,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            The VoiceShine System Architecture
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto italic">
            This is not a phone tree. This is actual conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
