import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Calendar, MessageCircle, Zap, Users, Bell, PhoneForwarded } from 'lucide-react';

const solutions = [
  {
    title: 'Answers every call in under 3 seconds',
    description: 'No more hold music or voicemail',
    icon: Phone,
  },
  {
    title: 'Books appointments directly into your calendar',
    description: 'Syncs with your existing scheduling system',
    icon: Calendar,
  },
  {
    title: 'Answers common questions instantly',
    description: 'Hours, pricing, services, directions',
    icon: MessageCircle,
  },
  {
    title: 'Qualifies leads while they are hot',
    description: 'Captures crucial information before they move on',
    icon: Zap,
  },
  {
    title: 'Handles multiple calls simultaneously',
    description: 'No busy signals, ever',
    icon: Users,
  },
  {
    title: 'Speaks naturally and professionally',
    description: 'Your callers will not know it is AI',
    icon: MessageCircle,
  },
  {
    title: 'Transfers urgent calls to you',
    description: 'Smart routing for situations that need your personal touch',
    icon: PhoneForwarded,
  },
  {
    title: 'Sends you instant notifications',
    description: 'Know what is happening in real-time',
    icon: Bell,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your New <span className="gradient-text">AI Receptionist</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            VoiceShine deploys intelligent voice agents that sound completely human, understand natural conversation, and handle calls exactly how you would - without ever sleeping, taking breaks, or missing a single opportunity.
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
