import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'LTIMindtree',
    role: 'Product Engineer',
    location: 'India',
    period: 'August 2021 – July 2023',
    achievements: [
      {
        text: 'Configured Jenkins jobs, wrote shell scripts, provided administration and support in Jenkins for continuous integration and deployment',
        highlight: 'sped up software development process by 30%',
      },
      {
        text: 'Container management using Docker by writing Docker files and installed and configured Kubernetes',
        highlight: null,
      },
      {
        text: 'Used AWS platform to maintain, configure and support AWS services such as EC2, EKS, S3, Route 53, Active Directory',
        highlight: null,
      },
      {
        text: 'Managed disk space issues using CloudWatch',
        highlight: 'reducing operational costs by 20%',
      },
      {
        text: 'Worked with 50+ developers, cloud platform engineers, security engineers, architects and stakeholders across the project',
        highlight: '50+ developers',
      },
    ],
  },
  {
    company: 'Cuelogic Technologies',
    role: 'Graduate Trainee',
    location: 'India',
    period: 'February 2021 – August 2021',
    achievements: [
      {
        text: 'Developed full-stack web applications with frontend and backend modules using Python Flask framework',
        highlight: null,
      },
      {
        text: 'Used Groovy scripts for CI/CD pipeline builds & actively got involved in entire Pipeline setups & Jenkins config',
        highlight: null,
      },
      {
        text: 'Created a continuous delivery process to include support for building of Docker images and publish into a private repository Nexus',
        highlight: null,
      },
      {
        text: 'Analyzed and fixed code errors',
        highlight: '54% less system downtimes',
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4" data-testid="experience-section">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {'// EXPERIENCE'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/30" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
              data-testid={`experience-item-${index}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-8 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-8 z-10 ring-4 ring-background" />

              <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          {achievement.highlight ? (
                            <>
                              {achievement.text.split(achievement.highlight)[0]}
                              <span className="text-primary font-semibold">
                                {achievement.highlight}
                              </span>
                              {achievement.text.split(achievement.highlight)[1]}
                            </>
                          ) : (
                            achievement.text
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
