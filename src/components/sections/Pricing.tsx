import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Pilot Program",
      price: "From [PILOT PRICE]",
      period: "",
      description: "Low-risk trial to measure impact",
      features: [
        "[X-day] controlled pilot",
        "Setup and script design included",
        "Analytics dashboard",
        "Measure real impact before scaling",
        "No long-term commitment"
      ],
      popular: true,
    },
    {
      name: "Custom Plans",
      price: "Custom Quote",
      period: "",
      description: "Tailored to your volume and needs",
      features: [
        "Volume-based pricing",
        "Full calendar and CRM integration",
        "Compliance options (HIPAA-ready)",
        "Priority support",
        "Flexible scaling"
      ],
    },
  ];

  const earlyAdopterInfo = {
    title: "Why choose VoiceShine (even though we're new)",
    benefits: [
      "Focused on results: we design every flow to reduce friction and increase conversions.",
      "Transparent process and clear KPIs from day one.",
      "You'll be an early partner — influence product shape and receive priority support and pricing.",
      "Fast turnaround: pilots ready in [X days/weeks] depending on integrations."
    ]
  };

  return (
    <section id="pricing" className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-amber-900 leading-[1.1]">
            Pricing & <span className="gradient-text">Pilots</span>
          </h2>
          <p className="text-xl md:text-lg text-gray-600 leading-relaxed mb-6">
            New agency — special early-adopter pilot pricing and custom packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl p-8 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 shadow-lg ${
                plan.popular ? "scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] text-white px-6 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-left mb-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="flex items-baseline justify-start mb-2">
                  <span className="text-5xl font-extrabold gradient-text">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-700 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#72b9bb] to-[#8cc5b8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 px-6 rounded-full font-bold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Request a Tailored Quote
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">{earlyAdopterInfo.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {earlyAdopterInfo.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-[#72b9bb] to-[#8cc5b8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
