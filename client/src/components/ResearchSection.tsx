import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FlaskConical, Calendar, MapPin, ChevronRight } from 'lucide-react';

const researchProjects = [
  {
    title: 'Offensive Security Research & Red Team Operations on Automotive Systems',
    location: 'Athens, GA',
    period: 'June 2024 – Present',
    current: true,
    description: 'Adversarial threat emulation against EV charging infrastructure',
    achievements: [
      'Emulated adversarial threat actors against EV charging infrastructure by deploying EasyEVSE development platform and Azure IoT Central integration to identify attack surfaces across device-to-cloud communication protocols',
      'Developed custom fuzzer in C/C++ to discover network layer vulnerabilities in ISO15118 automotive charging protocol; leveraged AFL fuzzing techniques to validate protocol robustness',
      'Conducted end-to-end penetration testing of charging station architecture, identifying exploitable vulnerabilities across embedded systems, cloud integration points, and wireless communication channels',
      'Designed real-world attack scenarios simulating both external adversaries and insider threats, documenting exploitation paths and providing remediation guidance',
    ],
    technologies: ['C/C++', 'Azure IoT', 'AFL Fuzzing', 'ISO15118', 'Red Team'],
  },
  {
    title: 'Penetration Testing & Security Assessment of IoT Devices',
    location: 'Athens, GA',
    period: 'December 2024 – Present',
    current: true,
    description: 'Comprehensive security assessment across IoT infrastructure',
    achievements: [
      'Conducted penetration testing across 5 core components (ESP32-S3 device, Mosquitto MQTT broker, Device backend system, InfluxDB, Grafana), identifying 11 vulnerabilities (4 high, 4 medium, 2 low, 1 negligible)',
      'Performed vulnerability scan using Nessus on backend services, achieving 100% remediation of identified CVEs across IoT server stack',
      'Executed web and API testing with Burp Suite and sqlmap; validated authentication hardening against 1M+ automated login attempts with Hydra',
      'Executed MQTT protocol fuzzing with Python across 10K+ payload mutations, achieving 0 crashes and confirming broker stability',
      'Conducted firmware security analysis on ESP32 images using GHIDRA, confirming 100% encryption with no hardcoded credentials',
      'Automated SBOM generation with Syft and performed CVE analysis across 200+ dependencies using Grype while monitoring IoT traffic with Wireshark to confirm TLS 1.3 enforcement',
      'Delivered comprehensive Penetration Test Report (30+ pages), fuzzing coverage documentation, and remediation roadmap aligned with HIPAA and FDA cybersecurity guidelines',
    ],
    technologies: ['Nessus', 'Burp Suite', 'GHIDRA', 'Python', 'Wireshark', 'MQTT', 'ESP32'],
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 px-4" data-testid="research-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {'// RESEARCH'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Research Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <Card
              key={project.title}
              className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full"
              data-testid={`research-project-${index}`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  {project.current && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
                      ACTIVE RESEARCH
                    </span>
                  )}
                  
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </span>
                  </div>

                  <p className="text-primary text-sm font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 flex-1 mb-4">
                  {project.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="border-t border-primary/10 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="font-mono text-xs border-primary/30 text-primary bg-primary/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
