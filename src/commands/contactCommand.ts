import { Command, CommandOutput } from '../types';

export const contactCommand: Command = {
  name: 'contact',
  description: 'Displays my contact information',
  execute: (): CommandOutput[] => {
    return [
      {
        text: `
📬 Contact Information
====================

Email    : <a href="mailto:jane.doe@example.com" class="text-green-500 underline">jane.doe@example.com</a>
GitHub   : <a href="https://github.com/janedoe" target="_blank" class="text-green-500 underline">github.com/janedoe</a>
LinkedIn : <a href="https://linkedin.com/in/janedoe" target="_blank" class="text-green-500 underline">linkedin.com/in/janedoe</a>
Twitter  : <a href="https://twitter.com/janedoe" target="_blank" class="text-green-500 underline">@janedoe</a>

Feel free to reach out for collaboration opportunities, job inquiries,
or just to say hello! I'm always interested in connecting with fellow
developers and tech enthusiasts.

⏰ Response Time: Usually within 24-48 hours
`,
        isHTML: true
      },
    ];
  },
};