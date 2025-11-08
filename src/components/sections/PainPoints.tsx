export function PainPoints() {
  const pains = [
    {
      title: "Every Missed Call Costs You $500+",
      description: "You're with a patient or showing a property. The phone rings. It goes to voicemail. By the time you call back 2 hours later, they've already booked with someone else.",
    },
    {
      title: "Paying $35K+ Per Receptionist",
      description: "Plus benefits, training, sick days, vacation time, and you still can't cover evenings, weekends, or peak times without hiring more staff.",
    },
    {
      title: "70% of Calls Come After Hours",
      description: "People research and call when it's convenient for them—nights, weekends, holidays. Without 24/7 coverage, you're literally sleeping on thousands in lost revenue.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Stop Losing Money To <span className="gradient-text">These Problems</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            Every missed call is money walking out the door to your competitors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 relative"
            >
              <div className="absolute top-5 right-5 text-4xl opacity-40">⚠️</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
