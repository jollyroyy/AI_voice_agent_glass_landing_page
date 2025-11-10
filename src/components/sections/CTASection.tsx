export function CTASection() {
  const steps = [
    "Book a free 30-minute demo – We'll show you exactly how VoiceShine works for your industry",
    "We'll analyze your call patterns – Understand how many opportunities you're currently missing",
    "Get a custom proposal – Tailored to your specific needs and call volume",
    "Launch in days, not weeks – Start capturing every opportunity",
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-16 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            Stop Losing Revenue to <span className="gradient-text">Missed Calls</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Every day without VoiceShine is another day of lost appointments, frustrated callers, and revenue going to your competitors.
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Here's what happens next:</h3>
            <div className="space-y-5 text-left max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-base pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <a
              href="#demo"
              className="inline-block bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-lg"
            >
              Book Your Free Demo Now
            </a>
          </div>

          <p className="text-gray-600 text-base">
            No long-term contracts. No setup fees. No risk.
          </p>
        </div>
      </div>
    </section>
  );
}
