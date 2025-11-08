export function WhyUs() {
  const reasons = [
    {
      icon: "⚡",
      title: "Faster",
      description: "2-second response time vs. competitors' 5-10 seconds. Speed wins customers.",
    },
    {
      icon: "🎯",
      title: "Easier",
      description: "15-minute setup with zero technical skills. Your grandmother could do it.",
    },
    {
      icon: "💪",
      title: "More Reliable",
      description: "99.9% uptime guarantee. While others crash, we keep capturing your leads.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            We're not just better. We're in a different league.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
