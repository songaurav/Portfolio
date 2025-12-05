import { useEffect, useState } from 'react';
import { ChevronDown, Terminal } from 'lucide-react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Gaurav C Sonawane';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      data-testid="hero-section"
    >
      <div className="text-center max-w-4xl mx-auto">
        {/* Terminal-style header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="font-mono text-sm text-primary/80">
            ~/security/professional
          </span>
        </div>

        {/* Main name with typing effect */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-glow-intense text-primary">
            {displayText}
            <span
              className={`inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle transition-opacity duration-100 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 font-display animate-fade-in"
          style={{ animationDelay: '0.5s' }}
          data-testid="hero-tagline"
        >
          <span className="text-primary">Cybersecurity Professional</span>
          {' | '}
          <span className="text-foreground">Penetration Tester</span>
          {' | '}
          <span className="text-primary">Red Team Researcher</span>
        </p>

        {/* Brief description */}
        <p
          className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.8s' }}
          data-testid="hero-description"
        >
          3+ years of DevOps experience combined with hands-on expertise in
          penetration testing, vulnerability assessment, and security research.
          Specializing in IoT security, automotive systems, and red team operations.
        </p>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <div className="text-center" data-testid="stat-experience">
            <div className="text-3xl sm:text-4xl font-bold text-primary text-glow">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center" data-testid="stat-vulnerabilities">
            <div className="text-3xl sm:text-4xl font-bold text-primary text-glow">11</div>
            <div className="text-sm text-muted-foreground">Vulnerabilities Found</div>
          </div>
          <div className="text-center" data-testid="stat-ctf">
            <div className="text-3xl sm:text-4xl font-bold text-primary text-glow">Top 9%</div>
            <div className="text-sm text-muted-foreground">PICO CTF Ranking</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer group"
        data-testid="scroll-indicator"
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
            scroll
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-primary/30 group-hover:border-primary/60 flex items-start justify-center p-2 transition-colors">
            <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
          </div>
        </div>
      </button>
    </section>
  );
}
