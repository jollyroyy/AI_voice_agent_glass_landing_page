export function HowItWorks() {
  const steps = [
    {
      icon: "📞",
      title: "Strategy call",
      description: "Map your top use-cases and KPIs. Understand your current pain points and desired outcomes.",
    },
    {
      icon: "✍️",
      title: "Script & flow design",
      description: "We build your voice persona and conversation flows tailored to your business and brand.",
    },
    {
      icon: "🧪",
      title: "Pilot launch",
      description: "Run a controlled pilot for [X days/weeks] and measure impact with real data.",
    },
    {
      icon: "📈",
      title: "Iterate & scale",
      description: "Tune voice, handoffs, and integrations, then ramp up to full deployment.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Process — From First Call <span className="gradient-text">to Live (Fast)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 text-center relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] rounded-full flex items-center justify-center text-2xl font-extrabold text-white shadow-xl">
                {index + 1}
              </div>
              <div className="text-6xl mt-5 mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold tracking-tight mb-4 text-foreground">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
