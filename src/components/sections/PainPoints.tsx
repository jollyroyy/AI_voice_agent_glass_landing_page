export function PainPoints() {
  const pains = [
    {
      title: "Traditional Receptionists",
      description: "Limited to business hours only. Can handle one call at a time. Need breaks, sick days, and vacations. Cost $[X]-[Y]k+ annually with benefits. Inconsistent quality depending on mood and experience.",
    },
    {
      title: "Basic Voicemail",
      description: "80% of callers won't leave a message. No immediate response equals lost opportunity. Creates follow-up work instead of solving problems. Makes your business feel unavailable and outdated.",
    },
    {
      title: "Offshore Call Centers",
      description: "Scripted, robotic interactions. No real understanding of your business. Poor caller experience damages your brand. Language barriers and cultural disconnect. Still limited capacity during peak times.",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Why Old-School Phone Systems Are <span className="gradient-text">Failing You</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            The Problem With Traditional Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 relative"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-2xl text-gray-900 font-bold mb-4">
            You need something better. Something intelligent.
          </p>
        </div>
      </div>
    </section>
  );
}
