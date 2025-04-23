import { Command, CommandOutput } from '../types';

export const neofetchCommand: Command = {
  name: 'neofetch',
  description: 'Displays system information in ASCII art style',
  execute: (): CommandOutput[] => {
    // Get current date for "uptime"
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    
    return [{
      text: `
        .-.         jane@portfolio
       (   )        --------------
        |~|         OS: Browser/JS v${navigator.appVersion.split(' ')[0]}
        |~|         Host: ${navigator.platform}
        |~|         Kernel: ${navigator.product}
    /\\__|_|__/\\     Uptime: ${hours}:${minutes} ${day}/${month}/${year}
   /           \\    Packages: 12 (npm)
  /             \\   Shell: React v18
 /               \\  Resolution: ${window.innerWidth}x${window.innerHeight}
|                 |  Theme: Terminal Green
\\                /   Terminal: Virtual Console
 \\              /    CPU: JavaScript V8
  \\            /     Memory: ${Math.round(window.performance.memory?.usedJSHeapSize / 1024 / 1024) || '??'} MB / ${Math.round(window.performance.memory?.jsHeapSizeLimit / 1024 / 1024) || '??'} MB
   \\__________/     
                     
                     
`,
      isASCII: true
    }];
  },
};