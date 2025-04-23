import { Command, CommandOutput } from '../types';

export const projectsCommand: Command = {
  name: 'projects',
  description: 'Displays my projects',
  execute: (): CommandOutput[] => {
    return [
      {
        text: `
📂 Projects
=========

1. EcoTracker
-------------
Description: A web application for tracking personal carbon footprint
Tech Stack: React, Node.js, MongoDB, Chart.js
Link: <a href="https://eco-tracker.example.com" target="_blank" class="text-green-500 underline">eco-tracker.example.com</a>
GitHub: <a href="https://github.com/janedoe/eco-tracker" target="_blank" class="text-green-500 underline">github.com/janedoe/eco-tracker</a>

2. CodeCollab
-------------
Description: Real-time collaborative code editor with syntax highlighting
Tech Stack: Vue.js, Firebase, WebSockets, Monaco Editor
Link: <a href="https://codecollab.io" target="_blank" class="text-green-500 underline">codecollab.io</a>
GitHub: <a href="https://github.com/janedoe/codecollab" target="_blank" class="text-green-500 underline">github.com/janedoe/codecollab</a>

3. HealthPal
------------
Description: Mobile app for medication tracking and health monitoring
Tech Stack: React Native, Redux, Express.js, PostgreSQL
Link: <a href="https://healthpal.example.org" target="_blank" class="text-green-500 underline">healthpal.example.org</a>
GitHub: <a href="https://github.com/janedoe/healthpal" target="_blank" class="text-green-500 underline">github.com/janedoe/healthpal</a>

4. WeatherLens
-------------
Description: Weather visualization with augmented reality components
Tech Stack: Three.js, WebGL, OpenWeatherMap API, A-Frame
Link: <a href="https://weatherlens.example.net" target="_blank" class="text-green-500 underline">weatherlens.example.net</a>
GitHub: <a href="https://github.com/janedoe/weatherlens" target="_blank" class="text-green-500 underline">github.com/janedoe/weatherlens</a>

5. Terminal Portfolio
------------------
Description: This website! A terminal-style portfolio
Tech Stack: React, TypeScript, Tailwind CSS
GitHub: <a href="https://github.com/janedoe/terminal-portfolio" target="_blank" class="text-green-500 underline">github.com/janedoe/terminal-portfolio</a>

Type 'cat [projectname]' for more details about a specific project.
`,
        isHTML: true
      },
    ];
  },
};