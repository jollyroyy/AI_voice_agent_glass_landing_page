import { useEffect, useState } from 'react';

export const HeroFuturistic = () => {
  const titleWords = 'Your Smartest Employee Isn\'t Human —'.split(' ');
  const highlightText = 'It\'s Your AI Voice Agent';
  const subtitle = 'Transform your dental clinic and real estate business with AI voice agents that answer every call, schedule appointments instantly, and work 24/7—no sick days, no breaks, no missed opportunities.';

  const [visibleWords, setVisibleWords] = useState(0);
  const [highlightVisible, setHighlightVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [highlightDelay, setHighlightDelay] = useState(0);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setHighlightDelay(Math.random() * 0.1);
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 150);
      return () => clearTimeout(timeout);
    } else if (!highlightVisible) {
      const timeout = setTimeout(() => setHighlightVisible(true), 300);
      return () => clearTimeout(timeout);
    } else if (!subtitleVisible) {
      const timeout = setTimeout(() => setSubtitleVisible(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, highlightVisible, subtitleVisible, titleWords.length]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-extrabold tracking-tight leading-[1.1] mb-6">
          <div className="flex flex-wrap justify-center gap-x-3 mb-2 text-4xl md:text-5xl overflow-hidden">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'fade-in' : ''}
                style={{
                  animationDelay: `${index * 0.1 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                  background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #0a0a0a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {word}
              </div>
            ))}
          </div>
          <div className="text-4xl md:text-5xl overflow-hidden">
            <div
              className={highlightVisible ? 'fade-in-subtitle gradient-text' : 'gradient-text'}
              style={{
                animationDelay: `${titleWords.length * 0.1 + 0.2 + highlightDelay}s`,
                opacity: highlightVisible ? undefined : 0
              }}
            >
              {highlightText}
            </div>
          </div>
        </h1>

        <p className="text-xl md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-black overflow-hidden">
          <span
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{
              animationDelay: `${titleWords.length * 0.1 + 0.7 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
              display: 'inline-block'
            }}
          >
            {subtitle}
          </span>
        </p>

        <div
          className={subtitleVisible ? 'fade-in-subtitle' : ''}
          style={{
            animationDelay: `${titleWords.length * 0.1 + 1.0}s`,
            opacity: subtitleVisible ? undefined : 0
          }}
        >
          <button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#72b9bb] via-[#8cc5b8] to-[#ffd1bd] text-white font-bold shadow-xl hover:scale-105 transition-transform"
          >
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroFuturistic;
