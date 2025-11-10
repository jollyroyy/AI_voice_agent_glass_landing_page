export function CTASection() {
  const options = [
    {
      title: "Book a Live Demo",
      description: "See VoiceShine in action with a personalized demonstration for your industry.",
      button: "Schedule Demo",
    },
    {
      title: "Start Free Trial",
      description: "Experience VoiceShine risk-free for [X] days with full functionality.",
      button: "Start Trial",
    },
    {
      title: "Talk to Our Team",
      description: "Have questions? Speak with a VoiceShine specialist about your specific needs.",
      button: "Contact Us",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-16 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            Ready to Never Miss Another <span className="gradient-text">Opportunity?</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Getting Started - Three Ways to Begin
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {options.map((option, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  {option.button}
                </a>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              All plans include setup, training, integrations, analytics, support, and [X]-day money-back guarantee
            </p>
            <p className="text-gray-600 text-base">
              Questions? Call us at [PHONE_NUMBER] or email hello@voiceshine.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
