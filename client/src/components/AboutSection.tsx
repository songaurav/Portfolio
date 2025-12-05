import { Card, CardContent } from '@/components/ui/card';
import { Shield, Cloud, Lock, Bug, Target, Server } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'End-to-end security assessments across web, network, and IoT systems',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'AWS infrastructure management and cloud security architecture',
  },
  {
    icon: Lock,
    title: 'Vulnerability Assessment',
    description: 'Comprehensive vulnerability scanning and remediation strategies',
  },
  {
    icon: Bug,
    title: 'Security Research',
    description: 'Automotive and IoT security research with real-world impact',
  },
  {
    icon: Target,
    title: 'Red Team Operations',
    description: 'Adversarial threat emulation and attack simulation',
  },
  {
    icon: Server,
    title: 'DevSecOps',
    description: 'CI/CD security automation and container security',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4" data-testid="about-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {'// ABOUT ME'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Security Professional
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Summary */}
          <div className="space-y-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  professional_summary.md
                </div>
                
                <p className="text-foreground leading-relaxed" data-testid="about-summary">
                  <span className="text-primary font-mono">{'>'}</span> Cybersecurity professional with{' '}
                  <span className="text-primary font-semibold">3 years of DevOps experience</span> in
                  cloud security, CI/CD automation, and AWS infrastructure management.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Combined with hands-on expertise
                  in <span className="text-primary font-semibold">penetration testing</span>,{' '}
                  <span className="text-primary font-semibold">vulnerability assessment</span>, and
                  security reporting.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Proven ability to identify and
                  exploit vulnerabilities across application and network layers while delivering
                  comprehensive remediation strategies and technical documentation.
                </p>
              </CardContent>
            </Card>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4.0</div>
                  <div className="text-xs text-muted-foreground font-mono">GPA @ UGA</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">30+</div>
                  <div className="text-xs text-muted-foreground font-mono">Page Reports</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-xs text-muted-foreground font-mono">CVE Remediation</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-xs text-muted-foreground font-mono">Team Collabs</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="border-primary/20 bg-card/50 backdrop-blur-sm group hover:border-primary/40 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`about-highlight-${index}`}
              >
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
