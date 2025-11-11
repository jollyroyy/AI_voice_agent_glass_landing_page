export function CTASection() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-16 md:p-20 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white">
            Ready to see it in <span className="text-yellow-300">your voice?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-semibold">
            Turn missed calls into confirmed appointments. Start a pilot with VoiceShine
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 text-lg"
            >
              Book a live demo
            </a>
            <a
              href="mailto:hello@voiceshine.com?subject=Pilot Program"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 text-lg"
            >
              Reserve one of our limited early-adopter pilot slots
            </a>
          </div>

          <p className="text-base mt-8 opacity-90">
            Or reply with "pilot" and we'll send a one-page pilot plan and timeline
          </p>
        </div>
      </div>
    </section>
  );
}
