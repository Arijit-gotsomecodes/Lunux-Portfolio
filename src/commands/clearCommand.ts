import { Command, CommandOutput } from '../types';

export const clearCommand: Command = {
  name: 'clear',
  description: 'Clears the terminal screen',
  execute: (): CommandOutput[] => {
    // The actual clearing behavior is handled in the Terminal component
    return [];
  },
};