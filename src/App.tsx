import './App.css';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { HeroFuturistic } from '@/components/ui/hero-futuristic';
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

      <section id="home" className="relative">
        <div className="fixed inset-0 w-screen h-screen z-0">
          <HeroSection
            title=""
            highlightText=""
            description=""
            buttonText=""
            distortion={1.2}
            speed={0.8}
            colors={["#4a9eff", "#7ec8f5", "#a8d5ff", "#e3f2ff", "#5ab9ea", "#c5e7ff"]}
            titleClassName="hidden"
            descriptionClassName="hidden"
            buttonClassName="hidden"
            onButtonClick={() => {}}
          />
        </div>
        <div className="relative z-10">
          <HeroFuturistic />
        </div>
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
