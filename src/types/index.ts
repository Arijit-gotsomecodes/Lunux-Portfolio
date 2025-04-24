export interface CommandOutput {
  text: string;
  isHTML?: boolean;
  isASCII?: boolean;
  isError?: boolean;
  delay?: number;
}

export interface HistoryEntry {
  command: string;
  output: CommandOutput[];
}

export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => CommandOutput[] | Promise<CommandOutput[]>;
}

export interface CommandRegistry {
  [key: string]: Command;
}

export interface Theme {
  name: string;
  background: string;
  text: string;
  cursor: string;
  selection: string;
  description: string;
}