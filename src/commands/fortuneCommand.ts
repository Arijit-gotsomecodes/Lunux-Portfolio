import { Command, CommandOutput } from '../types';

export const fortuneCommand: Command = {
  name: 'fortune',
  description: 'Displays a random tech quote or joke',
  execute: (): CommandOutput[] => {
    const fortunes = [
      "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
      "Talk is cheap. Show me the code. - Linus Torvalds",
      "It's not a bug, it's a feature. - Anonymous",
      "The best way to predict the future is to invent it. - Alan Kay",
      "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases. - Norman Augustine",
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger W. Dijkstra",
      "First, solve the problem. Then, write the code. - John Johnson",
      "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
      "The function of good software is to make the complex appear to be simple. - Grady Booch",
      "Hardware: the parts of a computer that can be kicked. - Jeff Pesis",
      "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard",
      "Low-level programming is good for the programmer's soul. - John Carmack",
      "The computer was born to solve problems that did not exist before. - Bill Gates",
      "Computers are good at following instructions, but not at reading your mind. - Donald Knuth",
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. - Rick Cook",
      "If you think good architecture is expensive, try bad architecture. - Brian Foote",
      "The trouble with programmers is that you can never tell what a programmer is doing until it's too late. - Seymour Cray",
      "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds",
      "The most important single aspect of software development is to be clear about what you are trying to build. - Bjarne Stroustrup"
    ];
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return [{
      text: `\n🔮 ${fortunes[randomIndex]}\n`
    }];
  },
};