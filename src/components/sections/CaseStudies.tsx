export function CaseStudies() {
  const cases = [
    {
      industry: "Real Estate",
      metric: "70%",
      result: "Reduced missed leads",
      description: "Automated lead follow-up calls and property inquiries, converting 70% more prospects into scheduled viewings.",
      icon: "🏠",
    },
    {
      industry: "Healthcare",
      metric: "1,000+",
      result: "Weekly appointments",
      description: "Automated appointment confirmations and reminders, reducing no-shows by 45% and freeing up staff time.",
      icon: "⚕️",
    },
    {
      industry: "E-commerce",
      metric: "3x",
      result: "Customer engagement",
      description: "Delivered personalized voice offers and order updates, tripling customer satisfaction scores.",
      icon: "🛒",
    },
  ];

  return (
    <section id="cases" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-amber-900 leading-[1.1]">
            Real Results from <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            See how companies across industries are transforming their customer experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{item.industry}</h3>
              <div className="mb-4">
                <div className="text-4xl font-extrabold gradient-text mb-1">{item.metric}</div>
                <div className="text-lg font-semibold text-gray-700">{item.result}</div>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
