import './App.css';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import WavyShader from '@/components/ui/wavy-shader';
import { Solutions } from '@/components/sections/Solutions';
import { Industries } from '@/components/sections/Industries';
import { PainPoints } from '@/components/sections/PainPoints';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Home, Target, Zap, MessagesSquare, Phone, Building2, DollarSign } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Solutions', url: '#solutions', icon: Target },
  { name: 'How It Works', url: '#how-it-works', icon: Zap },
  { name: 'Industries', url: '#industries', icon: Building2 },
  { name: 'Pricing', url: '#pricing', icon: DollarSign },
  { name: 'FAQs', url: '#faqs', icon: MessagesSquare },
  { name: 'Contact', url: '#contact', icon: Phone },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar items={navItems} />

      <section id="home">
        <HeroSection
          title="Never Miss Another Patient, Client, or"
          highlightText="Lead Again"
          description="Your phone is ringing. Your receptionist is swamped. Potential clients are hanging up and calling your competitor instead. VoiceShine's AI voice agents answer every call, book appointments instantly, and turn missed opportunities into confirmed revenue—24/7."
          buttonText="Book Your Free Demo"
          secondaryButtonText="See How It Works"
          distortion={1.2}
          speed={0.8}
          colors={["#4a9eff", "#7ec8f5", "#a8d5ff", "#e3f2ff", "#5ab9ea", "#c5e7ff"]}
          titleClassName=""
          descriptionClassName="text-black"
          onButtonClick={() => console.log('Book demo clicked')}
          onSecondaryButtonClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </section>

      <WavyShader />

      <PainPoints />
      <Solutions />
      <HowItWorks />
      <Industries />
      <Pricing />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
