import { Command, CommandOutput } from '../types';

// For simplicity, we'll just return a placeholder message
// The actual implementation would access the Terminal component's history state
export const historyCommand: Command = {
  name: 'history',
  description: 'Shows command history',
  execute: (): CommandOutput[] => {
    // This is just a placeholder - real implementation would come from the Terminal component
    return [{
      text: `
Note: This is a demo command. Your actual command history would appear here.
In a real implementation, this would show all the commands you've entered during
this session.

Type 'clear' to clear the terminal or 'help' to see available commands.
`
    }];
  },
};