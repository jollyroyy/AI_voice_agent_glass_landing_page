import './App.css';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';
import WavyShader from '@/components/ui/wavy-shader';
import { Stats } from '@/components/sections/Stats';
import { Solutions } from '@/components/sections/Solutions';
import { Industries } from '@/components/sections/Industries';
import { UseCases } from '@/components/sections/UseCases';
import { PainPoints } from '@/components/sections/PainPoints';
import { WhyUs } from '@/components/sections/WhyUs';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { Pricing } from '@/components/sections/Pricing';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { About } from '@/components/sections/About';
import { CTASection } from '@/components/sections/CTASection';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Home, Sparkles, Target, Zap, MessagesSquare, Phone, Building2 } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'Solutions', url: '#solutions', icon: Target },
  { name: 'Industries', url: '#industries', icon: Building2 },
  { name: 'How It Works', url: '#how-it-works', icon: Zap },
  { name: 'About', url: '#about', icon: Sparkles },
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
          description="Transform your business with AI powered Voice Agents that answers every call, schedule appointments instantly, work 24/7 - no sick days, no breaks, no missed opportunities"
          buttonText="Get Started Free"
          distortion={1.2}
          speed={0.8}
          colors={["#4a9eff", "#7ec8f5", "#a8d5ff", "#e3f2ff", "#5ab9ea", "#c5e7ff"]}
          titleClassName=""
          descriptionClassName="text-black"
          onButtonClick={() => console.log('Get started clicked')}
        />
      </section>

      <WavyShader />

      <Solutions />
      <Industries />

      <Stats />
      <UseCases />
      <PainPoints />
      <WhyUs />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <CaseStudies />
      <About />
      <CTASection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
