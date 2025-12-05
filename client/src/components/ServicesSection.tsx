import { Card, CardContent } from '@/components/ui/card';
import {
  Cpu,
  AlertTriangle,
  BarChart3,
  FileSearch,
  Target,
  HardDrive,
  Network,
  Bug,
  Shield,
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'IoT Pentesting',
    description: 'Comprehensive security assessment of IoT devices, protocols, and firmware',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Handling',
    description: 'Rapid response and containment of security incidents with root cause analysis',
  },
  {
    icon: BarChart3,
    title: 'SIEM Operations',
    description: 'Security monitoring, log aggregation, and tactical threat analysis',
  },
  {
    icon: FileSearch,
    title: 'Log Analysis',
    description: 'Deep-dive analysis of security logs to identify threats and anomalies',
  },
  {
    icon: Target,
    title: 'Threat Hunting',
    description: 'Proactive search for advanced threats and indicators of compromise',
  },
  {
    icon: HardDrive,
    title: 'DFIR Operations',
    description: 'Digital forensics and incident response for evidence collection and analysis',
  },
  {
    icon: Network,
    title: 'AD Attack Analysis',
    description: 'Active Directory security assessment and attack path identification',
  },
  {
    icon: Shield,
    title: 'Network Traffic Analysis',
    description: 'Deep packet inspection and network behavior analysis for threat detection',
  },
  {
    icon: Bug,
    title: 'Reverse Engineering',
    description: 'Malware analysis and binary reverse engineering for threat intelligence',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4" data-testid="services-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {'// SERVICES'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Freelancing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional cybersecurity services tailored to protect your organization
            from emerging threats and vulnerabilities.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="border-primary/20 bg-card/50 backdrop-blur-sm group hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need specialized cybersecurity services?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            data-testid="services-cta"
          >
            <span>Get in Touch</span>
            <span className="font-mono">{'>'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
