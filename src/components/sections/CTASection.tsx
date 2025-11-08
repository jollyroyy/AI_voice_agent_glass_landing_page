import { Check } from "lucide-react";

export function CTASection() {
  const features = [
    "No credit card required",
    "Setup in 15 minutes",
    "Cancel anytime",
    "24/7 support",
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-[40px] p-16 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join 500+ businesses already capturing more leads and saving thousands every month
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <a
              href="#demo"
              className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-14 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-400/50"
            >
              Start Free Trial →
            </a>
            <a
              href="#how-it-works"
              className="inline-block bg-white text-gray-900 px-14 py-5 rounded-full text-xl font-semibold border-2 border-pink-300 transition-all duration-300 hover:bg-pink-50 hover:border-pink-500 hover:-translate-y-1"
            >
              Watch 2-Min Demo
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                <div className="w-7 h-7 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
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
