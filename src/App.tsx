import './App.css';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { useState } from 'react';
import { Target, Briefcase, Calculator, Phone } from 'lucide-react';

const navItems = [
  { name: 'Solutions', url: '#solutions', icon: Target },
  { name: 'Use Cases', url: '#usecases', icon: Briefcase },
  { name: 'ROI Calculator', url: '#roi', icon: Calculator },
  { name: 'Contact', url: '#contact', icon: Phone },
];

function App() {
  const [callVolume, setCallVolume] = useState('');
  const [costPerCall, setCostPerCall] = useState('');

  return (
    <div className="min-h-screen">
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
          className="min-h-[60vh]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="flex justify-center pt-12 pb-8">
            <img
              src="/hero_ai_voice_image.jpeg"
              alt="AI Voice Agent"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover shadow-2xl border-4 border-white/30"
            />
          </div>
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">Give Your Business a Voice That Converts</h1>
            <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
              Engage, qualify, and retain customers 24/7 with intelligent AI voice agents that sound human, act instantly, and scale effortlessly.
            </p>
            <button className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors">
              Get a Free Demo
            </button>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Human-like Conversations. Real Business Outcomes.</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          VoiceShine automates voice interactions across industries — from dental clinics to real estate — helping businesses handle calls, book appointments, qualify leads, and follow up without missing a beat.
          Our AI voice agents are tuned to your brand's tone and goals, ensuring every customer conversation builds trust and drives ROI.
        </p>
        <div className="mt-10 space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Explore Use Cases
          </button>
          <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            Hear Sample Calls
          </button>
        </div>
      </section>

      <section id="usecases" className="py-20 bg-white/40 backdrop-blur-md text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Designed for Growth Across Industries</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-white/70 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Dental Clinics</h3>
            <p className="text-gray-700">Automate patient follow-ups, reminders, and appointment bookings — while keeping every interaction warm and personal.</p>
          </div>
          <div className="p-6 bg-white/70 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Healthcare & Clinics</h3>
            <p className="text-gray-700">Free up front-desk staff and ensure every call is handled with care, accuracy, and empathy.</p>
          </div>
          <div className="p-6 bg-white/70 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Realtors</h3>
            <p className="text-gray-700">Qualify leads instantly, schedule property visits, and engage prospects before your competition does.</p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Your AI Voice Agent in Three Simple Steps</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">1. Understand</h3>
            <p className="text-gray-700">We learn your workflows and customer interaction goals.</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">2. Customize</h3>
            <p className="text-gray-700">VoiceShine tailors an AI voice agent to fit your tone, intent, and journey.</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">3. Launch</h3>
            <p className="text-gray-700">Go live — automate calls, track engagement, and grow conversions.</p>
          </div>
        </div>
        <button className="mt-10 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Book a Quick Call
        </button>
      </section>

      <section id="roi" className="py-20 bg-white/40 backdrop-blur-md text-center px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Estimate Your ROI with VoiceShine</h2>
        <p className="text-lg text-gray-700 mb-10">See how much time and money you can save by automating conversations.</p>
        <div className="max-w-lg mx-auto bg-white/80 p-8 rounded-2xl shadow-md">
          <label className="block text-left mb-4 text-gray-900 font-medium">Monthly Call Volume</label>
          <input
            type="number"
            placeholder="Enter number of calls"
            value={callVolume}
            onChange={(e) => setCallVolume(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 text-gray-900"
          />
          <label className="block text-left mb-4 text-gray-900 font-medium">Average Handling Cost per Call</label>
          <input
            type="number"
            placeholder="Enter cost per call"
            value={costPerCall}
            onChange={(e) => setCostPerCall(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-6 text-gray-900"
          />
          <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Calculate My ROI
          </button>
        </div>
      </section>

      <section className="py-20 text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Built for Efficiency. Tuned for Experience.</h2>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-white/60 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Natural Conversations</h3>
            <p className="text-gray-700">AI agents trained for contextual accuracy and emotional tone.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Plug & Play Integration</h3>
            <p className="text-gray-700">Works seamlessly with your CRM and existing systems.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Always On</h3>
            <p className="text-gray-700">Handle calls 24/7 without missing a lead or inquiry.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Scalable & Secure</h3>
            <p className="text-gray-700">Deploy effortlessly across teams and geographies.</p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-blue-600 text-white rounded-t-3xl px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to Amplify Your Customer Experience?</h2>
        <p className="text-lg mb-10">Let VoiceShine handle your calls while you focus on growth.</p>
        <button className="px-8 py-4 bg-white text-blue-700 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started with Voice AI
        </button>
      </section>

      <footer id="contact" className="py-10 text-center text-gray-700 px-4">
        <div className="text-2xl font-bold mb-2 text-gray-900">VoiceShine</div>
        <div className="space-x-6 mb-4">
          <a href="#solutions" className="hover:text-gray-900">Solutions</a>
          <a href="#usecases" className="hover:text-gray-900">Use Cases</a>
          <a href="#roi" className="hover:text-gray-900">ROI Calculator</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
        <p className="text-sm">© 2025 VoiceShine. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
