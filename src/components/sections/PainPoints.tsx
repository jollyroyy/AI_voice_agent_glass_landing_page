export function PainPoints() {
  const pains = [
    {
      icon: "⏰",
      title: "Front-desk staff spend hours on routine tasks",
      description: "Booking, reminders, and basic qualification consume valuable time that could be spent on high-value interactions and patient care.",
    },
    {
      icon: "❄️",
      title: "Leads cool off after a slow first response",
      description: "Delayed follow-ups mean lost momentum. By the time you call back, they have already connected with someone else.",
    },
    {
      icon: "💸",
      title: "No-shows and last-minute cancellations eat revenue",
      description: "Empty appointment slots waste clinician and agent time, directly impacting your bottom line and operational efficiency.",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-amber-900 leading-[1.1]">
            The <span className="gradient-text">Problem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 relative"
            >
              <div className="text-5xl mb-4">{pain.icon}</div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-foreground">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
