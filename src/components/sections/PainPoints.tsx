export function PainPoints() {
  const pains = [
    {
      title: "For Dental Clinics",
      description: "Patients call during procedures. They're put on hold. They hang up and book with the practice down the street. That's a $[AVG_PATIENT_LIFETIME_VALUE] patient lost because of a missed call.",
      subtext: "The problem isn't your team. The problem is that humans can't be everywhere at once.",
    },
    {
      title: "For Medical Practices",
      description: "Your staff is drowning in appointment requests, insurance questions, and prescription refills. Meanwhile, genuine emergencies can't get through. Patient satisfaction drops. Google reviews suffer.",
      subtext: "The problem isn't your team. The problem is that humans can't be everywhere at once.",
    },
    {
      title: "For Real Estate Agents",
      description: "A hot lead calls about a listing at 8 PM. You're at dinner. They call the next agent on the list. That commission just walked away because you couldn't answer.",
      subtext: "The problem isn't your team. The problem is that humans can't be everywhere at once.",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            Your Front Desk Is <span className="gradient-text">Costing You Money</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed">
            Every industry faces the same brutal reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-10 relative"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{pain.description}</p>
              <p className="text-gray-500 italic text-sm">{pain.subtext}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-xl text-gray-700 font-semibold">
            The problem isn't your team. The problem is that humans can't be everywhere at once.
          </p>
        </div>
      </div>
    </section>
  );
}
