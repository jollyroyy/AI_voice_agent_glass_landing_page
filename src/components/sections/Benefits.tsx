export function Benefits() {
  const benefits = [
    {
      icon: "🗣️",
      title: "Natural two-way voice",
      description: "Conversation feels human, not robotic. Advanced AI that understands context and responds naturally.",
    },
    {
      icon: "🔗",
      title: "Calendar + CRM integration",
      description: "Sync with Google Calendar, Outlook, and leading CRMs. All your tools working together seamlessly.",
    },
    {
      icon: "✏️",
      title: "Script customization",
      description: "Your tone, your FAQs, your hand-off rules. Fully customized to match your brand and workflow.",
    },
    {
      icon: "🌍",
      title: "Multilingual options",
      description: "Speak your patients and clients languages. Break down barriers and serve diverse communities.",
    },
    {
      icon: "🔒",
      title: "Compliance-minded setup",
      description: "Industry-appropriate data protection practices. HIPAA-ready options available for healthcare.",
    },
    {
      icon: "📊",
      title: "Analytics dashboard",
      description: "Track calls, conversions, no-show reduction, and handoffs. Measure what matters.",
    },
    {
      icon: "🧪",
      title: "Pilot program",
      description: "Low-risk trial so you can measure impact before scaling. See results before you commit.",
    },
  ];

  return (
    <section id="benefits" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Features That Actually <span className="gradient-text">Move the Needle</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold tracking-tight mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
