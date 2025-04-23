import { Command, CommandOutput } from '../types';
import { commands } from './index';

export const helpCommand: Command = {
  name: 'help',
  description: 'Lists all available commands',
  execute: (args: string[]): CommandOutput[] => {
    if (args.length > 0) {
      const cmdName = args[0].toLowerCase();
      if (commands[cmdName]) {
        return [{
          text: `${cmdName} - ${commands[cmdName].description}`
        }];
      } else {
        return [{
          text: `Command '${cmdName}' not found. Type 'help' to see all available commands.`,
          isError: true
        }];
      }
    }
    
    let helpText = 'Available commands:\n\n';
    
    Object.entries(commands).forEach(([name, cmd]) => {
      helpText += `${name.padEnd(15)} - ${cmd.description}\n`;
    });
    
    helpText += '\nclear'.padEnd(15) + ' - Clears the terminal\n';
    helpText += 'exit'.padEnd(15) + ' - Exits the terminal (refreshes page)\n';
    helpText += '\nType "help [command]" for more information about a specific command.';
    
    return [{
      text: helpText
    }];
  }
};