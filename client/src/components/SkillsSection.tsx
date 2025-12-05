import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Monitor, Shield, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'C', 'C++', 'JavaScript'],
  },
  {
    icon: Monitor,
    title: 'Operating Systems',
    skills: ['Windows', 'Linux', 'Unix', 'Mac'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity Tools',
    skills: [
      'Netcat',
      'Wireshark',
      'Nessus',
      'Ghidra',
      'Burp Suite',
      'Azure Cloud',
      'AWS Cloud',
      'Metasploit',
    ],
  },
  {
    icon: Wrench,
    title: 'DevOps Tools',
    skills: [
      'Jenkins',
      'Kubernetes',
      'Docker',
      'GitLab',
      'Ansible',
      'Terraform',
      'Packer',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4" data-testid="skills-section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {'// SKILLS'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              data-testid={`skill-category-${index}`}
            >
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-mono text-sm border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal-style skill summary */}
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-2">
                skills.sh
              </span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat skill_summary.txt
              </p>
              <p className="text-foreground">
                <span className="text-primary">{'>'}</span> Proficient in{' '}
                <span className="text-primary">Python, C/C++</span> for security tool
                development
              </p>
              <p className="text-foreground">
                <span className="text-primary">{'>'}</span> Expert in{' '}
                <span className="text-primary">penetration testing</span> with Burp
                Suite, Metasploit
              </p>
              <p className="text-foreground">
                <span className="text-primary">{'>'}</span> Experienced in{' '}
                <span className="text-primary">cloud security</span> (AWS, Azure)
              </p>
              <p className="text-foreground">
                <span className="text-primary">{'>'}</span> Strong{' '}
                <span className="text-primary">DevSecOps</span> background with CI/CD
                automation
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span>{' '}
                <span className="animate-blink">_</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
