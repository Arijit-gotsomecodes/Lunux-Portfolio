import { Command, CommandOutput } from '../types';

export const catCommand: Command = {
  name: 'cat',
  description: 'Displays the content of a file',
  execute: (args: string[]): CommandOutput[] => {
    if (args.length === 0) {
      return [{
        text: 'Usage: cat [filename]',
        isError: true
      }];
    }
    
    const filename = args[0].toLowerCase();
    
    // Special case for resume.txt
    if (filename === 'resume.txt' || filename === 'resume') {
      return [{
        text: `
<div class="mt-2">
  <p class="mb-4">Opening Jane Doe's resume...</p>
  <a href="#" class="text-green-500 underline" onclick="alert('This would download a resume PDF in a real portfolio!')">Download Resume (PDF)</a>
</div>
`,
        isHTML: true
      }];
    }
    
    // Project details
    const projects: Record<string, string> = {
      'ecotracker': `
Project Name: EcoTracker
=====================

Description:
-----------
EcoTracker is a comprehensive web application designed to help users track
and reduce their personal carbon footprint. It provides personalized insights
and actionable recommendations based on daily activities.

Features:
--------
• Carbon footprint calculator with customizable inputs
• Interactive charts and visualizations of emissions data
• Personalized recommendations to reduce environmental impact
• Achievement system to gamify sustainable lifestyle choices
• Community features to share tips and compete with friends

Tech Stack:
---------
• Frontend: React, Redux, Chart.js
• Backend: Node.js, Express
• Database: MongoDB
• Authentication: JWT, OAuth
• Hosting: AWS

Challenges & Solutions:
---------------------
One of the key challenges was creating accurate calculation models
for various activities. I worked with environmental scientists to
develop reliable algorithms that balance accuracy with user-friendliness.

Links:
-----
• Website: https://eco-tracker.example.com
• GitHub: https://github.com/janedoe/eco-tracker
• Case Study: https://janedoe.example.com/case-studies/eco-tracker
`,
      
      'codecollab': `
Project Name: CodeCollab
=====================

Description:
-----------
CodeCollab is a real-time collaborative code editor that enables
multiple developers to work simultaneously on the same codebase.
It features syntax highlighting for 40+ programming languages,
real-time collaboration, and integrated chat.

Features:
--------
• Real-time collaborative editing with operational transformation
• Syntax highlighting for 40+ programming languages
• Integrated chat and video conferencing
• Version history and snapshot functionality
• Shareable project links with permission settings

Tech Stack:
---------
• Frontend: Vue.js, Vuex, Monaco Editor
• Backend: Firebase Realtime Database
• Real-time: WebSockets, Firebase
• Authentication: Firebase Auth
• Hosting: Google Cloud Platform

Challenges & Solutions:
---------------------
The biggest challenge was implementing conflict resolution for
simultaneous edits. I researched and implemented an optimized
operational transformation algorithm that maintains consistency
across all clients.

Links:
-----
• Website: https://codecollab.io
• GitHub: https://github.com/janedoe/codecollab
• Technical Blog Post: https://janedoe.example.com/blog/building-codecollab
`,
      
      'healthpal': `
Project Name: HealthPal
====================

Description:
-----------
HealthPal is a mobile application that helps users track their
medications, monitor health metrics, and schedule medical appointments.
It's designed to be accessible to older adults and people with
chronic health conditions.

Features:
--------
• Medication tracking with reminders and refill alerts
• Symptom and vital sign logging with trend visualization
• Appointment scheduling with calendar integration
• Secure sharing of health data with healthcare providers
• Emergency contact system with one-tap activation

Tech Stack:
---------
• Frontend: React Native, Redux
• Backend: Express.js, PostgreSQL
• State Management: Redux, Context API
• APIs: Calendar, Contacts, HealthKit/Google Fit
• Hosting: AWS with HIPAA compliance

Challenges & Solutions:
---------------------
The main challenge was ensuring data privacy while maintaining
functionality. I implemented end-to-end encryption for sensitive
health data and obtained HIPAA compliance certification.

Links:
-----
• Website: https://healthpal.example.org
• GitHub: https://github.com/janedoe/healthpal
• Case Study: https://janedoe.example.com/case-studies/healthpal
`,
      
      'weatherlens': `
Project Name: WeatherLens
======================

Description:
-----------
WeatherLens combines weather data with augmented reality to provide
users with an immersive visualization of current and forecasted
weather conditions. Users can point their device at the sky to see
weather patterns overlaid on their real environment.

Features:
--------
• AR weather visualization using device camera
• Real-time weather data integration
• 7-day forecast with hourly breakdowns
• Climate change educational modules
• Location-based severe weather alerts

Tech Stack:
---------
• Frontend: Three.js, WebGL, A-Frame
• APIs: OpenWeatherMap, WebXR
• Data Visualization: D3.js
• Backend: Serverless Functions (AWS Lambda)
• Hosting: Netlify with Lambda integration

Challenges & Solutions:
---------------------
The main technical challenge was creating realistic weather
visualizations that would render properly across different devices.
I developed a progressive enhancement approach that adapts the
complexity of visualizations based on device capabilities.

Links:
-----
• Website: https://weatherlens.example.net
• GitHub: https://github.com/janedoe/weatherlens
• Demo Video: https://youtube.com/example
`,
      
      'terminal': `
Project Name: Terminal Portfolio
============================

Description:
-----------
This very website! A creative, interactive portfolio designed to
look and function like a Linux terminal. It showcases my work
and skills in a unique format that demonstrates my frontend
development abilities.

Features:
--------
• Authentic terminal emulation with command processing
• Interactive command system to navigate portfolio sections
• Custom animations and visual effects (CRT screen, etc.)
• Easter eggs and fun commands
• Mobile-responsive design

Tech Stack:
---------
• Frontend: React, TypeScript, Tailwind CSS
• Animation: CSS Keyframes, React Hooks
• Sound Effects: Howler.js
• Hosting: GitHub Pages

Challenges & Solutions:
---------------------
The biggest challenge was creating an authentic terminal experience
that also functions as an accessible, user-friendly portfolio.
I carefully balanced authenticity with usability by including
visual cues and mobile-specific enhancements.

Links:
-----
• Website: You're looking at it!
• GitHub: https://github.com/janedoe/terminal-portfolio
`,
    };
    
    // Check if the project exists
    if (projects[filename]) {
      return [{
        text: projects[filename]
      }];
    }
    
    // Default response for unknown files
    return [{
      text: `cat: ${filename}: No such file or directory`,
      isError: true
    }];
  },
};