import { Command, CommandOutput } from '../types';

export const whoamiCommand: Command = {
  name: 'whoami',
  description: 'Displays information about me',
  execute: (): CommandOutput[] => {
    return [
      {
        text: `
✨ Personal Information
--------------------
Name: Jane Doe
Location: San Francisco, CA
Occupation: Full Stack Developer
Education: B.S. Computer Science, Stanford University

🚀 About Me
---------
I'm a passionate software developer with a love for clean code, open-source
contributions, and building elegant solutions to complex problems. When
I'm not coding, you can find me hiking, reading science fiction, or 
experimenting with new technologies.

My journey in tech began when I was 12 years old, building small games
in BASIC. Today, I specialize in full-stack development with a focus on
scalable web applications and innovative user experiences.

I believe in continuous learning and pushing the boundaries of what's
possible with technology.

💭 Career Goals
------------
• Building applications that positively impact people's lives
• Contributing to significant open-source projects
• Mentoring the next generation of developers
• Learning something new every day
        
Type 'projects' to see my work or 'contact' to get in touch!
`,
      },
    ];
  },
};