import { Command, CommandOutput } from '../types';

export const skillsCommand: Command = {
  name: 'skills',
  description: 'Displays my technical skills',
  execute: (): CommandOutput[] => {
    return [
      {
        text: `
💻 Technical Skills
================

Programming Languages
--------------------
[█████████░] JavaScript/TypeScript
[████████░░] Python
[███████░░░] Java
[██████░░░░] C/C++
[████████░░] SQL
[███████░░░] Ruby
[██████░░░░] Go

Frontend Technologies
--------------------
[█████████░] React.js
[████████░░] Vue.js
[███████░░░] Angular
[█████████░] HTML5/CSS3
[████████░░] SASS/LESS
[█████████░] Tailwind CSS
[████████░░] Redux
[███████░░░] WebGL

Backend Technologies
-------------------
[████████░░] Node.js/Express
[███████░░░] Django
[██████░░░░] Ruby on Rails
[████████░░] GraphQL
[███████░░░] REST API Design
[██████░░░░] Spring Boot

Database Technologies
--------------------
[█████████░] MongoDB
[████████░░] PostgreSQL
[███████░░░] MySQL
[██████░░░░] Redis
[████████░░] Firebase

DevOps & Tools
-------------
[████████░░] Git
[███████░░░] Docker
[██████░░░░] Kubernetes
[████████░░] CI/CD Pipelines
[███████░░░] AWS
[██████░░░░] Google Cloud
[████████░░] Linux

Other Skills
-----------
[████████░░] Agile/Scrum
[███████░░░] Technical Writing
[████████░░] Problem Solving
[█████████░] Team Collaboration
[████████░░] Project Management
`,
      },
    ];
  },
};