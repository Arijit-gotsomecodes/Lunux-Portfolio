import { CommandRegistry } from '../types';
import { helpCommand } from './helpCommand';
import { whoamiCommand } from './whoamiCommand';
import { projectsCommand } from './projectsCommand';
import { skillsCommand } from './skillsCommand';
import { contactCommand } from './contactCommand';
import { clearCommand } from './clearCommand';
import { historyCommand } from './historyCommand';
import { fortuneCommand } from './fortuneCommand';
import { neofetchCommand } from './neofetchCommand';
import { sudoCommand } from './sudoCommand';
import { catCommand } from './catCommand';
import { asciiCommand } from './asciiCommand';
import { motdCommand } from './motdCommand';

// Command Registry
export const commands: CommandRegistry = {
  help: helpCommand,
  whoami: whoamiCommand,
  projects: projectsCommand,
  skills: skillsCommand,
  contact: contactCommand,
  clear: clearCommand,
  history: historyCommand,
  fortune: fortuneCommand,
  neofetch: neofetchCommand,
  sudo: sudoCommand,
  cat: catCommand,
  ascii: asciiCommand,
  motd: motdCommand
};