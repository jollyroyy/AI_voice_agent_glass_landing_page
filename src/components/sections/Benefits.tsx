export function Benefits() {
  const benefits = [
    {
      icon: "💰",
      title: "70% Lower Costs",
      description: "Replace expensive staff with AI that never calls in sick, never takes vacation, and costs less than lunch.",
    },
    {
      icon: "📈",
      title: "3x More Bookings",
      description: "Capture every lead, every time. No more voicemails. No more missed opportunities. Just pure growth.",
    },
    {
      icon: "⏰",
      title: "24/7 Coverage",
      description: "Your AI agent works nights, weekends, and holidays. Never miss a call again, even when you're sleeping.",
    },
    {
      icon: "🎯",
      title: "Perfect Accuracy",
      description: "No more double bookings, wrong times, or forgotten details. Every interaction is flawless and professional.",
    },
    {
      icon: "🌍",
      title: "Multilingual Support",
      description: "Speak to your customers in their preferred language. Break down barriers and expand your market reach.",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Track every call, conversation, and conversion. Make data-driven decisions to grow your business faster.",
    },
  ];

  return (
    <section id="benefits" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            What You Get <span className="gradient-text">Starting Today</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            Real results that transform your business from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
