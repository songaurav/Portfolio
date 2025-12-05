import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    institution: 'University of Georgia',
    school: 'School of Computing',
    degree: 'Master of Science in Cybersecurity & Privacy',
    gpa: '4.0',
    location: 'Athens, GA',
    period: 'January 2024 – December 2025',
    current: true,
    achievements: [
      'Member of Blackhat Society, Atlanta Chapter',
      'University hacking team - PICO CTF top 9% global ranking',
      'Contributing 51% of team score in CTF competitions',
    ],
  },
  {
    institution: 'Savitribai Phule Pune University',
    school: '',
    degree: 'Bachelor of Engineering, Information Technology',
    gpa: '8.6',
    location: 'India',
    period: 'August 2017 – May 2021',
    current: false,
    achievements: [],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4" data-testid="education-section">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-2 block">
            {'// EDUCATION'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Academic Background
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-px" />

          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              data-testid={`education-item-${index}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-8 z-10 ring-4 ring-background">
                {edu.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 ml-12 md:ml-0">
                <Card
                  className={`border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Current badge */}
                    {edu.current && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
                        CURRENT
                      </span>
                    )}

                    {/* Institution */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground">
                          {edu.institution}
                        </h3>
                        {edu.school && (
                          <p className="text-sm text-muted-foreground">{edu.school}</p>
                        )}
                      </div>
                    </div>

                    {/* Degree */}
                    <p className="text-primary font-medium mb-3">{edu.degree}</p>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-primary" />
                        GPA: <span className="text-primary font-mono">{edu.gpa}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                      <div className="border-t border-primary/10 pt-4 mt-4">
                        <h4 className="text-sm font-mono text-primary mb-2">
                          {'// achievements'}
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">{'>'}</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Empty spacer for layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
