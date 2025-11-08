export function About() {
  return (
    <section id="about" className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5 text-foreground leading-[1.1]">
            About <span className="gradient-text">AIVoice</span>
          </h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We build conversational AI agents designed to replace repetitive human tasks with intelligent voice automation. Our technology blends natural language processing, advanced speech synthesis, and real-time data handling to deliver customer experiences that are indistinguishable from real human interactions.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded by a team of AI researchers and business automation experts, we understand the challenges small businesses face in scaling customer communication. That's why we've made enterprise-grade AI accessible, affordable, and incredibly easy to deploy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">500+</div>
              <div className="text-gray-600 font-medium">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">1M+</div>
              <div className="text-gray-600 font-medium">Calls Automated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
