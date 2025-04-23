import { Command, CommandOutput, HistoryEntry } from '../types';

interface HistoryContext {
  history: HistoryEntry[];
}

export const historyCommand: Command = {
  name: 'history',
  description: 'Shows command history',
  execute: (_args: string[], context?: HistoryContext): CommandOutput[] => {
    if (!context || !context.history) {
      return [{
        text: 'History is not available in this context.',
        isError: true
      }];
    }

    const visibleHistory = context.history
      .filter(entry => entry.command !== 'system')
      .map((entry, index) => `${index + 1}: ${entry.command}`)
      .join('\n');

    return [{
      text: visibleHistory || 'No commands entered yet.'
    }];
  },
};
