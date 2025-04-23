import { Command, CommandOutput } from '../types';

export const motdCommand: Command = {
  name: 'motd',
  description: 'Displays the message of the day',
  execute: (): CommandOutput[] => {
    // Get current date to seed the random message selection
    const today = new Date();
    const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    
    // Use the date string to create a deterministic random number for today
    const hashCode = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };
    
    const todaysSeed = hashCode(dateString);
    const randomIndex = Math.abs(todaysSeed) % messages.length;
    
    const messages = [
      "The best error message is the one that never shows up. — Thomas Fuchs",
      "First, solve the problem. Then, write the code. — John Johnson",
      "Make it work, make it right, make it fast. — Kent Beck",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
      "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
      "The most important property of a program is whether it accomplishes the intention of its user. — C.A.R. Hoare",
      "Don't worry if it doesn't work right. If everything did, you'd be out of a job. — Mosher's Law of Software Engineering",
      "A language that doesn't affect the way you think about programming is not worth knowing. — Alan Perlis",
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. — Dan Salomon",
      "It's harder to read code than to write it. — Joel Spolsky",
      "Code is like humor. When you have to explain it, it's bad. — Cory House",
      "Optimism is an occupational hazard of programming: feedback is the treatment. — Kent Beck",
      "When in doubt, leave it out. — Joshua Bloch",
      "Simplicity is prerequisite for reliability. — Edsger W. Dijkstra",
      "The way to get started is to quit talking and begin doing. — Walt Disney",
      "The computer was born to solve problems that did not exist before. — Bill Gates",
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. — Brian W. Kernighan",
      "The function of good software is to make the complex appear to be simple. — Grady Booch",
      "The most damaging phrase in the language is 'It's always been done that way.' — Grace Hopper",
      "Walking on water and developing software from a specification are easy if both are frozen. — Edward V. Berard",
      "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. — Bill Gates",
      "The only way to learn a new programming language is by writing programs in it. — Dennis Ritchie",
      "The best way to predict the future is to implement it. — David Heinemeier Hansson",
      "Code never lies, comments sometimes do. — Ron Jeffries",
      "In theory, there is no difference between theory and practice. But, in practice, there is. — Jan L. A. van de Snepscheut",
      "Talk is cheap. Show me the code. — Linus Torvalds"
    ];
    
    return [{
      text: `
╔════════════════════════ MESSAGE OF THE DAY ════════════════════════╗
║                                                                     ║
  "${messages[randomIndex]}"
║                                                                     ║
╚═════════════════════════════════════════════════════════════════════╝
`,
      isASCII: true
    }];
  },
};