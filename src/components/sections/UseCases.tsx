export function UseCases() {
  const cases = [
    {
      icon: "🦷",
      title: "Dental Clinics",
      description: "Handles appointment bookings, emergency calls, insurance questions, and patient follow-ups. Integrates with your practice software and speaks fluent dental terminology.",
    },
    {
      icon: "🏠",
      title: "Real Estate Agents",
      description: "Qualifies leads, schedules property tours, answers listing questions, and captures buyer information—even when you're showing homes or in negotiations.",
    },
    {
      icon: "🏢",
      title: "Property Developers",
      description: "Manages investor inquiries, schedules site visits, provides project updates, and handles high call volumes during launches without hiring call center staff.",
    },
  ];

  return (
    <section id="solutions" className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Built Specifically For <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            Whether you're running a dental practice or selling properties, our AI agents understand your industry inside out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-6xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
