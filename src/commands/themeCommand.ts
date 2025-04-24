import { Command, CommandOutput, Theme } from "../types";

const themes: Record<string, Theme> = {
  matrix: {
    name: "matrix",
    background: "#000000",
    text: "#00FF00",
    cursor: "#00FF00",
    selection: "rgba(0, 255, 0, 0.3)",
    description: "Classic Matrix green-on-black theme",
  },
  synthwave: {
    name: "synthwave",
    background: "#2b213a",
    text: "#ff71ce",
    cursor: "#ff71ce",
    selection: "rgba(255, 113, 206, 0.3)",
    description: "Retro synthwave with neon pink",
  },
  ubuntu: {
    name: "ubuntu",
    background: "#300a24",
    text: "#ffffff",
    cursor: "#ffffff",
    selection: "rgba(255, 255, 255, 0.3)",
    description: "Ubuntu terminal colors",
  },
  hacker: {
    name: "hacker",
    background: "#0D0208",
    text: "#39FF14",
    cursor: "#39FF14",
    selection: "rgba(57, 255, 20, 0.3)",
    description: "Bright green on dark theme",
  },
  dracula: {
    name: "dracula",
    background: "#282a36",
    text: "#f8f8f2",
    cursor: "#ff79c6",
    selection: "rgba(248, 248, 242, 0.3)",
    description: "Dracula theme colors",
  },
};

export const themeCommand: Command = {
  name: "theme",
  description:
    "Change terminal theme. Usage: theme [name]\nAvailable themes:\n- matrix (default): Classic Matrix green-on-black\n- synthwave: Retro synthwave with neon pink\n- ubuntu: Ubuntu terminal colors\n- hacker: Bright green on dark\n- dracula: Dracula theme colors",

  execute: (args: string[]): CommandOutput[] => {
    if (args.length === 0) {
      const themeList = Object.values(themes)
        .map((theme) => `${theme.name.padEnd(12)} - ${theme.description}`)
        .join("\n");

      return [
        {
          text: `Available themes:\n\n${themeList}\n\nUsage: theme [name]\nExample: theme synthwave`,
        },
      ];
    }

    const themeName = args[0].toLowerCase();
    const theme = themes[themeName];

    if (!theme) {
      return [
        {
          text: `Theme '${themeName}' not found. Type 'theme' to see available themes.`,
          isError: true,
        },
      ];
    }

    // Update CSS variables
    document.documentElement.style.setProperty(
      "--terminal-background",
      theme.background
    );
    document.documentElement.style.setProperty("--terminal-text", theme.text);
    document.documentElement.style.setProperty(
      "--terminal-cursor",
      theme.cursor
    );
    document.documentElement.style.setProperty(
      "--terminal-selection",
      theme.selection
    );

    return [
      {
        text: `Theme changed to ${theme.name}`,
      },
    ];
  },
};
