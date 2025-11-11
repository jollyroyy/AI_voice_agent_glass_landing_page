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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="inline-flex w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full items-center justify-center text-2xl font-bold text-white shadow-md mb-5">
                {index + 1}
              </div>
              <div className="text-4xl mb-4 text-left">{step.icon}</div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-gray-900 text-left">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed text-left">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
