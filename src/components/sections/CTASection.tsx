import { Check } from "lucide-react";

export function CTASection() {
  const features = [
    "No credit card required",
    "Setup in 15 minutes",
    "Cancel anytime",
    "24/7 support",
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white/60 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl p-16 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 500+ businesses already capturing more leads and saving thousands every month
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <a
              href="#demo"
              className="inline-block bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Start Free Trial →
            </a>
            <a
              href="#how-it-works"
              className="inline-block bg-white text-foreground px-8 py-4 rounded-full font-semibold border-2 border-gray-200 shadow-lg hover:scale-105 transition-transform"
            >
              Watch 2-Min Demo
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                <div className="w-7 h-7 bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white font-bold" />
                </div>
                <span className="text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
