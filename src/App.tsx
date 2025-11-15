import './App.css';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import DisplayCards from '@/components/ui/display-cards';
import { Target, Phone, Building2, Users, Zap, Clock, TrendingUp, HeadphonesIcon, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { AuthProvider } from '@/contexts/AuthContext';
import { AuthModal } from '@/components/AuthModal';
import { ContactForm } from '@/components/ContactForm';
import { useState } from 'react';

const navItems = [
  {
    name: 'Solutions',
    icon: Target,
    dropdown: [
      { name: 'Customer Support Automation', url: '#solutions' },
      { name: 'Lead Qualification & Follow-Up', url: '#solutions' },
      { name: 'Appointment Scheduling', url: '#solutions' },
      { name: 'Voice Surveys & Feedback', url: '#solutions' },
    ],
  },
  {
    name: 'Industries',
    icon: Building2,
    dropdown: [
      { name: 'Real Estate', url: '#industries' },
      { name: 'Healthcare & Dental Clinics', url: '#industries' },
      { name: 'EdTech & Education', url: '#industries' },
      { name: 'Travel & Tourism', url: '#industries' },
      { name: 'E-commerce', url: '#industries' },
      { name: 'Customer Support Centers', url: '#industries' },
    ],
  },
  { name: 'About', url: '#about', icon: Users },
  { name: 'Contact', url: '#contact', icon: Phone },
  { name: 'Book a Call', url: '#contact', icon: Calendar, isCTA: true },
];

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const handleSignInClick = () => {
    setAuthMode('signin');
    setAuthModalOpen(true);
  };

  const handleSignUpClick = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  return (
    <AuthProvider>
      <main className="relative text-gray-100 bg-[#0a0a0f] min-h-screen overflow-visible">
        {/* Premium radial background layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,255,0.1),transparent_70%)] pointer-events-none z-0"></div>

        <NavBar
          items={navItems}
          onSignInClick={handleSignInClick}
          onSignUpClick={handleSignUpClick}
        />

        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialMode={authMode}
        />



{/* ALWAYS VISIBLE Mic Below Navbar */}
<div
  className="relative w-full flex justify-center pointer-events-auto"
  style={{ 
    zIndex: 5000,           // above hero + shader
    position: "relative", 
    marginTop: "100px",      // pushes just below navbar
    marginBottom: "-90px",  // pulls hero section upward
  }}
>
  <button
    onClick={() => {
      const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (!SR) return alert("Speech recognition not supported.");

      const rec = new SR();
      rec.lang = "en-US";
      rec.interimResults = false;
      rec.onresult = (e: any) => {
        const text = e.results[0][0].transcript;
        alert("You said: " + text);
      };
      rec.start();
    }}
    className="h-14 w-14 flex items-center justify-center rounded-full
               bg-gradient-to-br from-[#e3f2ff] to-[#b7d8ff]
               hover:from-[#d9ecff] hover:to-[#a7ceff]
               border border-white/40 shadow-xl
               backdrop-blur-md transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#1a2b4b"
      className="w-6 h-6 drop-shadow-sm"
    >
      <path d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3z" />
      <path d="M19 11a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 10-2 0 7 7 0 006 6.92V21a1 1 0 102 0v-3.08A7 7 0 0019 11z" />
      <span className="mt-2 text-sm text-[#5e3f1d] font-semibold">Try Demo</span>
    </svg>
  </button>
</div>



      {/* Original Hero Section (restored) */}

      <HeroSection
  title="Make Every Call a Revenue Engine"
  highlightText="Powered by Human-Sounding AI Voice Agents"
  description="Transform your phone conversations into automated growth machines. Our AI voice agents engage leads instantly, book appointments, and close deals."
  buttonText="Book Your Free Demo"
  onButtonClick={() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
  colors={['#4a9eff', '#7ec8f5', '#a8d5ff', '#e3f2ff', '#5ab9ea', '#c5e7ff']}
  distortion={1.2}
  speed={0.6}
  className="min-h-[80vh]"
  titleClassName="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-12 text-[#3b2e1a]"
>
        <DisplayCards
          cards={[
            {
              icon: <Zap className="size-5 text-amber-900" />,
              title: 'Instant Response',
              description: 'Answer every call in under 2 seconds with human-like AI that never sleeps.',
              titleClassName: 'text-amber-900 font-extrabold',
              className: '[grid-area:stack] hover:!-translate-y-40 hover:!scale-150',
            },
            {
              icon: <TrendingUp className="size-5 text-amber-900" />,
              title: '3x More Leads',
              description: 'Convert prospects faster with intelligent follow-ups and qualification.',
              titleClassName: 'text-amber-900 font-extrabold',
              className: '[grid-area:stack] translate-x-16 translate-y-10 hover:!-translate-y-40 hover:!scale-150',
            },
            {
              icon: <Clock className="size-5 text-amber-900" />,
              title: '24/7 Availability',
              description: 'Never miss a call or opportunity, even outside business hours.',
              titleClassName: 'text-amber-900 font-extrabold',
              className: '[grid-area:stack] translate-x-32 translate-y-20 hover:!-translate-y-20 hover:!scale-125',
            },
            {
              icon: <HeadphonesIcon className="size-5 text-amber-900" />,
              title: 'Human-Like Voice',
              description: 'Natural conversations that build trust and drive engagement.',
              titleClassName: 'text-amber-900 font-extrabold',
              className: '[grid-area:stack] translate-x-48 translate-y-32 hover:!-translate-y-20 hover:!scale-125',
            },
          ]}
        />
      </HeroSection>

      {/* Floating 3D Robot */}
      <section
  id="robot-animation"
  className="relative -mt-80 flex justify-center items-center z-20"
>
  <img
    src="/assets/robot-3d-object-unscreen.gif"
    alt="3D Robot"
    className="w-[260px] h-[400px] object-contain opacity-95"
    style={{
      background: 'transparent',
      filter: `
        drop-shadow(0 0 25px rgba(0,255,255,0.35))
        drop-shadow(0 0 40px rgba(0,200,255,0.25))
      `,
    }}
  />
</section>



      {/* Solutions Section (restored + upgraded) */}
      <section id="solutions" className="relative py-20 px-8 bg-[#f9f5ef]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
           className="text-5xl font-display font-bold text-black mb-8"

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Our Voice AI Solutions
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Customer Support Automation',
                desc: 'Resolve queries instantly with AI-driven voice support that feels human.',
              },
              {
                title: 'Lead Qualification & Follow-Up',
                desc: 'Engage, qualify, and convert leads with natural, persuasive conversations.',
              },
              {
                title: 'Appointment Scheduling',
                desc: 'Automate calendar bookings, confirmations, and reminders effortlessly.',
              },
              {
                title: 'Voice Surveys & Feedback',
                desc: 'Collect rich insights through interactive, human-sounding surveys.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-xl bg-gradient-to-br from-[#fffaf3] to-[#f0e9dc] border border-[#d4c4a8] shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-sans font-bold text-gray-900 mb-3 text-left">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed font-sans text-left">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="relative py-20 px-8 bg-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-display font-bold text-black mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            Industries We Transform
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Real Estate',
                desc: 'Qualify property leads, book viewings, and follow up automatically with natural voice interactions.',
              },
              {
                title: 'Healthcare & Dental Clinics',
                desc: 'Automate patient communication, appointment booking, and follow-ups for seamless service.',
              },
              {
                title: 'EdTech & Education',
                desc: 'Assist student onboarding, enrollment, and helpdesk queries instantly through conversational AI.',
              },
              {
                title: 'Travel & Tourism',
                desc: 'Manage multilingual bookings, trip changes, and customer inquiries across time zones.',
              },
              {
                title: 'E-commerce',
                desc: 'Handle product inquiries, order tracking, and voice-based recommendations instantly.',
              },
              {
                title: 'Customer Support Centers',
                desc: 'Deploy scalable AI voice agents that reduce wait times and improve CSAT scores.',
              },
            ].map((industry, i) => (
              <motion.div
                key={i}
                className="p-8 bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] border border-[#d4c4a8] rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-lg font-sans font-bold text-gray-900 mb-3 text-left">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed font-sans text-gray-700 text-left">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Contact Section (Beige + Dark Brown Text) */}
      
     <motion.section
  id="contact"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="relative py-28 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
>
  {/* Shader background (unchanged) */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <canvas id="contact-shader-bg" className="w-full h-full pointer-events-none"></canvas>
  </div>

  <div className="relative z-10 max-w-5xl mx-auto pointer-events-auto">
    <h2 className="text-5xl font-['Playfair_Display'] font-bold text-[#3b2e1a] mb-6">
      Let’s Create Your AI Voice Breakthrough
    </h2>

    <p className="text-lg font-['Inter'] text-[#3b2e1a]/85 max-w-2xl mx-auto mb-12 leading-relaxed">
      Transform your customer engagement with <span className="font-semibold text-[#815a2b]">VoiceShine’s AI Voice Agents</span>.  
      Share your goals below, and our team will design a personalized strategy that converts more leads and saves you time.
    </p>

    <ContactForm />

    <div className="mt-12 text-[#3b2e1a]/80 text-sm font-['Inter']">
      <p>
        Prefer direct contact? Email us at{' '}
        <a
          href="mailto:contact@voiceshine.ai"
          className="text-[#815a2b] font-semibold hover:underline"
        >
          contact@voiceshine.ai
        </a>
      </p>
    </div>
  </div>
</motion.section>




      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10 bg-[#050509]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6 px-6">
          <div className="text-white/70 text-sm">
            © 2025 VoiceShine. All rights reserved.
          </div>
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#solutions" className="hover:text-cyan-300">Solutions</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </footer>
    </main>
    </AuthProvider>
  );
}

export default App;
