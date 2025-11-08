export function HowItWorks() {
  const steps = [
    {
      icon: "📱",
      title: "Forward Your Calls",
      description: "Get your unique AI agent number. Forward your business line to it. Done. Takes 5 minutes and works with any phone provider.",
    },
    {
      icon: "🎯",
      title: "Customize Your Agent",
      description: "Tell us your services, hours, and preferences. Choose a voice. Set your brand tone. Our AI learns your business in minutes, not months.",
    },
    {
      icon: "🚀",
      title: "Start Capturing Leads",
      description: "Your AI agent goes live instantly. Every call answered. Every appointment booked. Every lead captured. While you focus on what you do best.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 text-gray-900">
            Up & Running in <span className="bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">15 Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            No technical skills needed. No complicated setup. Just simple, powerful automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-pink-100 rounded-3xl p-12 text-center relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/30"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-3xl font-extrabold text-white shadow-lg shadow-pink-400/40">
                {index + 1}
              </div>
              <div className="text-6xl mt-5 mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
