export function HowItWorks() {
  const steps = [
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
    <section id="how-it-works" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-amber-900 leading-[1.1]">
            Process — From First Call <span className="gradient-text">to Live (Fast)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="inline-flex w-20 h-20 bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] rounded-full items-center justify-center text-3xl font-extrabold text-white shadow-lg mb-6">
                {index + 1}
              </div>
              <div className="text-5xl mb-5">{step.icon}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
