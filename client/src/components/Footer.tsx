import { Shield, Github, Linkedin, Mail, Terminal } from 'lucide-react';
const GIcon = ({ className }: { className?: string }) => (
  <img 
    src="/logo.png" 
    alt="G Logo" 
    className={className}
  />
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/20 bg-card/30 backdrop-blur-sm py-12 px-4" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-primary font-display font-bold text-xl mb-4">
              <GIcon className="w-6 h-6" />
              <span>Gaurav C Sonawane</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cybersecurity professional specializing in penetration testing,
              vulnerability assessment, and security research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-sm text-primary mb-4">{'// Quick Links'}</h3>
            <nav className="space-y-2">
              {['About', 'Education', 'Experience', 'Research', 'Services', 'Skills', 'Contact'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-sm text-primary mb-4">{'// Connect'}</h3>
            <div className="flex gap-3">
              <a
                href="mailto:songoroo77@gmail.com"
                className="w-10 h-10 rounded-md border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Email"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/gaurav-sonawane-360867205/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="LinkedIn"
                data-testid="footer-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> echo "© {currentYear} Gaurav C Sonawane. All rights reserved."
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span>Built with security in mind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
