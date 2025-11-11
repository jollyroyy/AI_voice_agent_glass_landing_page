import './App.css';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import { Target, MessagesSquare, Phone, Building2, DollarSign } from 'lucide-react';

const navItems = [
  {
    name: 'Solutions',
    icon: Target,
    dropdown: [
      { name: 'AI Phone Call Agent', url: '#solutions' },
      { name: 'Real Time Chat Assistant', url: '#solutions' },
    ]
  },
  {
    name: 'Industries',
    icon: Building2,
    dropdown: [
      { name: 'BPO', url: '#industries' },
      { name: 'Real Estate', url: '#industries' },
      { name: 'Edtech', url: '#industries' },
      { name: 'Restaurant', url: '#industries' },
      { name: 'Dental Clinics', url: '#industries' },
      { name: 'Realtors & Broker Teams', url: '#industries' },
    ]
  },
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
          onSecondaryButtonClick={() => console.log('See how it works clicked')}
        />
      </section>
    </div>
  );
}

export default App;
