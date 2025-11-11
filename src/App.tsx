import './App.css';
import { HeroSection } from '@/components/ui/hero-section-with-smooth-bg-shader';
import { NavBar } from '@/components/ui/navbar-with-dropdowns';

const navItems: never[] = [];

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
