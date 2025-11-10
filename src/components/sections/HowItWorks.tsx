export function HowItWorks() {
  const steps = [
    {
      icon: "🔍",
      title: "Discovery & Configuration",
      description: "Kickoff call to understand your business operations. Map current call handling workflows. Identify pain points and priorities. Gather service information and common caller questions.",
      days: "Day 1-2",
    },
    {
      icon: "🤖",
      title: "AI Training & Customization",
      description: "Train AI on your specific business. Configure conversation flows and appointment logic. Set up custom responses and escalation rules. Connect calendar, CRM, and integrations.",
      days: "Day 3-4",
    },
    {
      icon: "✅",
      title: "Testing & Refinement",
      description: "Internal team test calls and scenario testing. Edge case handling verification. Response accuracy validation. Voice and tone adjustments. Staff training on the system.",
      days: "Day 5-6",
    },
    {
      icon: "🚀",
      title: "Launch & Monitor",
      description: "Soft launch with monitoring. Real-time performance tracking. Quick adjustments as needed. Full launch after validation. Ongoing optimization and monthly check-ins.",
      days: "Day 7+",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Implementation <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            Launch Your AI Agent in [X] Days
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-12 text-center relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] rounded-full flex items-center justify-center text-3xl font-extrabold text-white shadow-xl">
                {index + 1}
              </div>
              <div className="text-6xl mt-5 mb-6">{step.icon}</div>
              <div className="text-sm font-semibold text-[#72b9bb] mb-2">{step.days}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
