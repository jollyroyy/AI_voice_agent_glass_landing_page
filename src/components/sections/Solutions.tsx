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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-5 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-left">{solution.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed text-left">
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
