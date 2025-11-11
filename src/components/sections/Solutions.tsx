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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#72b9bb] to-[#8cc5b8] flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
