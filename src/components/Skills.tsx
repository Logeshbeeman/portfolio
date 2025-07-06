import React from 'react';
import { Code, Palette, Server, Globe, Database, Zap, Layers, Smartphone } from 'lucide-react';
import CodeBits from './CodeBits';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Design & Animation',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 85 },
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 90 },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 88 },
        { name: 'AWS', level: 75 },
      ],
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: [
        { name: 'HTML5', level: 98 },
        { name: 'JavaScript', level: 95 },
        { name: 'Webpack', level: 80 },
        { name: 'Vite', level: 85 },
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Jest', level: 80 },
        { name: 'Docker', level: 70 },
      ],
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023',
      icon: Layers,
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: Database,
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2022',
      icon: Smartphone,
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 relative overflow-hidden section-gradient-4">
      {/* Background Particles */}
      <div className="bg-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* React Code Bits */}
      <CodeBits sectionType="skills" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></div>
            <Zap size={24} className="text-violet-400 sm:w-[30px] sm:h-[30px]" />
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 sm:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive toolkit of modern technologies and methodologies 
            that I use to create exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:scale-105 scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 glow`}>
                <category.icon size={24} className="text-white sm:w-[32px] sm:h-[32px]" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{category.title}</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-violet-300 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="bg-black/30 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1 + skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center gradient-text mb-8 sm:mb-12 fade-in">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-xl sm:rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 hover:scale-105 scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 glow">
                  <cert.icon size={24} className="text-white sm:w-[32px] sm:h-[32px]" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-violet-300 mb-2 text-sm sm:text-base">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-center gradient-text mb-8 sm:mb-12">
            Professional Journey
          </h3>
          
          <div className="relative max-w-4xl mx-auto timeline">
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500 to-purple-600 rounded-full" />
            
            {[
              {
                year: '2024',
                title: 'Senior UI Developer',
                company: 'Tech Solutions Inc.',
                description: 'Leading frontend development team, architecting scalable web applications, and mentoring junior developers.',
                achievements: ['Led team of 5 developers', 'Improved app performance by 40%', 'Implemented design system'],
              },
              {
                year: '2022',
                title: 'Frontend Developer',
                company: 'Creative Digital Agency',
                description: 'Developed responsive websites and interactive web applications for diverse clients across various industries.',
                achievements: ['Delivered 25+ projects', 'Client satisfaction 98%', 'Reduced load times by 60%'],
              },
              {
                year: '2020',
                title: 'Junior Developer',
                company: 'StartupTech Co.',
                description: 'Started professional journey, learning modern web technologies and contributing to innovative projects.',
                achievements: ['Completed 50+ features', 'Learned React & Node.js', 'Built first full-stack app'],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 sm:mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'sm:flex-row-reverse'
                } flex-col sm:flex-row`}
              >
                <div className="w-full sm:w-1/2 px-4 sm:px-8">
                  <div className={`p-6 sm:p-8 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-xl sm:rounded-2xl border border-violet-500/20 glow hover:scale-105 transition-transform duration-300 ${
                    index % 2 === 0 ? 'text-left sm:text-right' : 'text-left'
                  }`}>
                    <div className="text-violet-400 font-bold text-lg sm:text-xl mb-2 sm:mb-3">{item.year}</div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h4>
                    <div className="text-gray-300 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{item.company}</div>
                    <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{item.description}</p>
                    <div className="space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className={`flex items-center space-x-2 ${index % 2 === 0 ? 'sm:justify-end' : 'justify-start'}`}>
                          <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs sm:text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full border-4 border-black glow" />
                
                <div className="w-full sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 section-divider"></div> */}
    </section>
  );
};

export default Skills;