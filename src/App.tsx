import './App.css';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { Stats } from '@/components/sections/Stats';
import { UseCases } from '@/components/sections/UseCases';
import { PainPoints } from '@/components/sections/PainPoints';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { Home, Sparkles, Target, Zap, MessagesSquare, Phone } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Solutions', url: '#solutions', icon: Target },
  { name: 'Benefits', url: '#benefits', icon: Sparkles },
  { name: 'How It Works', url: '#how-it-works', icon: Zap },
  { name: 'FAQs', url: '#faqs', icon: MessagesSquare },
  { name: 'Contact', url: '#contact', icon: Phone },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar items={navItems} />

      <section id="home">
        <HeroSection
          title="Your Smartest Employee Isn't Human —"
          highlightText="It's Your AI Voice Agent"
          description="Transform your dental clinic and real estate business with AI voice agents that answer every call, schedule appointments instantly, and work 24/7—no sick days, no breaks, no missed opportunities."
          buttonText="Get Started Free"
          distortion={1.2}
          speed={0.8}
          colors={["#4a9eff", "#7ec8f5", "#a8d5ff", "#e3f2ff", "#5ab9ea", "#c5e7ff"]}
          titleClassName=""
          descriptionClassName="text-black"
          onButtonClick={() => console.log('Get started clicked')}
        />
      </section>

      <Stats />
      <UseCases />
      <PainPoints />
      <HowItWorks />
      <Benefits />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
