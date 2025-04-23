import { Command, CommandOutput } from '../types';

export const sudoCommand: Command = {
  name: 'sudo',
  description: 'Executes a command with superuser privileges (not really)',
  execute: (args: string[]): CommandOutput[] => {
    if (args.length === 0) {
      return [{
        text: 'Usage: sudo [command]',
        isError: true
      }];
    }
    
    const fullCommand = args.join(' ');
    
    // Easter egg: sudo make me a sandwich
    if (fullCommand.toLowerCase() === 'make me a sandwich') {
      // Random response
      const responses = [
        "Okay, here you go 🥪",
        "You're not root! Access denied."
      ];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return [{
        text: responses[randomIndex]
      }];
    }
    
    // Default response
    return [{
      text: `Permission denied: unable to execute '${fullCommand}' as root.`
    }];
  },
};