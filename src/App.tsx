import './App.css';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { useState } from 'react';
import { Target, Calculator, Phone, Building2, Users, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Solutions', url: '#solutions', icon: Target },
  { name: 'Industries', url: '#industries', icon: Building2 },
  { name: 'ROI Calculator', url: '#roi', icon: Calculator },
  { name: 'About', url: '#about', icon: Users },
  { name: 'FAQ', url: '#faq', icon: HelpCircle },
  { name: 'Contact', url: '#contact', icon: Phone },
];

function App() {
  const [calls, setCalls] = useState(1000);
  const [cost, setCost] = useState(15);
  const savings = ((calls * cost * 0.4) || 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#141428] text-gray-100">
      <NavBar items={navItems} />

      <section className="relative">
        <HeroSection
          title=""
          highlightText=""
          description=""
          buttonText=""
          colors={["#4a9eff", "#7ec8f5", "#a8d5ff", "#e3f2ff", "#5ab9ea", "#c5e7ff"]}
          distortion={1.2}
          speed={0.8}
          className="min-h-screen"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="text-center px-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">AI Voice Agents That Never Sleep</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Automate customer conversations, convert leads faster, and deliver human-like experiences with VoiceShine — your intelligent voice automation partner.
            </p>
            <Button className="mt-10 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-2xl shadow-xl">
              Start the Conversation
            </Button>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-32 px-10">
        <h3 className="text-4xl font-bold text-center mb-16 text-white">Solutions Tailored for Growth</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Customer Support Automation', 'Lead Qualification & Follow-Up', 'Appointment Scheduling', 'Voice Surveys & Feedback'].map((title, idx) => (
            <Card key={idx} className="bg-white/5 hover:bg-white/10 transition-all border-0">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">{title}</h4>
                <p className="text-sm text-gray-400">AI-powered voice agents streamline operations, elevate engagement, and ensure results at scale.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="industries" className="py-32 px-10">
        <h3 className="text-4xl font-bold text-center mb-16 text-white">Industries We Empower</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {['Healthcare', 'Real Estate', 'Financial Services', 'E-commerce', 'Education', 'Hospitality'].map((industry, idx) => (
            <motion.div whileHover={{ scale: 1.05 }} key={idx} className="bg-white/5 p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">{industry}</h4>
              <p className="text-sm text-gray-400">VoiceShine automates communication, boosts conversions, and enhances customer satisfaction in the {industry.toLowerCase()} sector.</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="roi" className="py-32 px-10 bg-white/5">
        <h3 className="text-4xl font-bold text-center mb-10 text-white">ROI Calculator</h3>
        <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-2xl shadow-xl">
          <label className="block mb-4 text-gray-200">Average Monthly Calls</label>
          <input
            type="number"
            value={calls}
            onChange={(e) => setCalls(Number(e.target.value))}
            className="w-full mb-6 bg-white/10 p-3 rounded text-white placeholder-gray-400"
          />
          <label className="block mb-4 text-gray-200">Agent Cost per Hour ($)</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full mb-6 bg-white/10 p-3 rounded text-white placeholder-gray-400"
          />
          <p className="text-center text-cyan-400 text-xl">Estimated Monthly Savings: ${savings}</p>
        </div>
      </section>

      <section id="about" className="py-32 px-10 text-center">
        <h3 className="text-4xl font-bold mb-6 text-white">About VoiceShine</h3>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">VoiceShine was founded with a vision to make AI-driven voice experiences accessible to every business. We design intelligent agents that speak naturally, understand deeply, and elevate customer experiences around the clock.</p>
      </section>

      <section id="faq" className="py-32 px-10">
        <h3 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            'How quickly can we deploy?',
            'Do I need technical expertise?',
            'Can VoiceShine integrate with CRM tools?',
            'How secure is the data handling?',
            'Is it multilingual?',
            'What\'s the pricing model?'
          ].map((q, i) => (
            <details key={i} className="bg-white/5 p-5 rounded-xl">
              <summary className="cursor-pointer text-cyan-400 font-medium">{q}</summary>
              <p className="mt-3 text-gray-400 text-sm">VoiceShine ensures seamless setup, enterprise-level integration, and data compliance from day one.</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="py-32 px-10 text-center bg-white/5">
        <h3 className="text-4xl font-bold mb-8 text-white">Let's Talk</h3>
        <p className="text-gray-400 mb-10">Ready to experience AI conversations that convert? Get in touch with us today.</p>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/20" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/20" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-white/10 text-white placeholder-gray-400 border border-white/20" rows={4}></textarea>
          <Button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-2xl shadow-xl w-full">
            Start the Conversation
          </Button>
        </form>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-[#0a0a1a] border-t border-white/10">
        © 2025 VoiceShine. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
