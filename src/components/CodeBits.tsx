import React from 'react';

interface CodeBitsProps {
  sectionType: 'hero' | 'about' | 'projects' | 'skills' | 'contact';
}

const CodeBits: React.FC<CodeBitsProps> = ({ sectionType }) => {
  const getCodeSnippets = () => {
    switch (sectionType) {
      case 'hero':
        return [
          'const developer = "Logesh";',
          'function createAwesome() { return magic; }',
          'import React from "react";',
          'export default Hero;'
        ];
      case 'about':
        return [
          'const skills = ["React", "TypeScript"];',
          'if (passionate) { code(); }',
          'const experience = 5;',
          'return <About />;'
        ];
      case 'projects':
        return [
          'const projects = await fetch();',
          'map(project => <Card />)',
          'useState(featured);',
          'onClick={viewProject}'
        ];
      case 'skills':
        return [
          'const level = 95;',
          'skills.forEach(skill => learn());',
          'export { expertise };',
          'return mastery;'
        ];
      case 'contact':
        return [
          'const message = await send();',
          'onSubmit={handleForm}',
          'connect(developer);',
          'return <Contact />;'
        ];
      default:
        return [];
    }
  };

  const snippets = getCodeSnippets();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snippets.map((snippet, index) => (
        <div
          key={index}
          className="code-bit"
          style={{
            top: `${20 + index * 20}%`,
            left: index % 2 === 0 ? '5%' : 'auto',
            right: index % 2 === 1 ? '5%' : 'auto',
            animationDelay: `${index * 2}s`,
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  );
};

export default CodeBits;