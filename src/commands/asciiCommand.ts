import { Command, CommandOutput } from '../types';

export const asciiCommand: Command = {
  name: 'ascii',
  description: 'Displays ASCII art',
  execute: (args: string[]): CommandOutput[] => {
    // Different ASCII art options
    const artOptions: Record<string, string> = {
      robot: `
   ,---.
  /    |
 /     |
|      |
|,-.   |
|  |   |
|  |   |    __
|  |   |   |  |
|  |   |.-.|  |
|  |   |  ||  |
|  |   |  ||  |-------------.
|  |   |  ||  |             |
|  |   '  ||  |             |
|  |      ||  | circuit.io  |
|  |      ||  |             |
|  |      ||  |             |
|  |      ||  |             |
|  |      ||  |             |
|__|______|'__|_____________|
/________________\\
`,
      penguin: `
   .~~.   .~~.
  '. \\ ' ' / .'
   .~ .~~~..~.
  : .~.'~'.~. :
 ~ (   ) (   ) ~
( : '~'.~.'~' : )
 ~ .~ (   ) ~. ~
  (  : '~' :  )
   '~ .~~~. ~'
       '~'
`,
      skull: `
     .-.
    (o.o)
     |=|
    __|__
  //.=|=.\\\\
 // .=|=. \\\\
 \\\\ .=|=. //
  \\\\(_=_)//
   (:| |:)
    || ||
    () ()
    || ||
    || ||
   ==' '==
`,
      computer: `
  .--------------------.
  |  .----------------.  |
  |  |                |  |
  |  |  $ _           |  |
  |  |                |  |
  |  |                |  |
  |  |                |  |
  |  |                |  |
  |  '----------------'  |
  |____________________|  |
   \\::::::::::::::::::/
    '-----------------'
`,
      heart: `
  .:::.   .:::.
 :::::::.:::::::
 :::::::::::::::
 ':::::::::::::'
   ':::::::::'
     ':::::'
       ':'
`
    };
    
    // Default to random art if no specific option is provided
    let art = '';
    
    if (args.length === 0) {
      // Choose random art
      const options = Object.keys(artOptions);
      const randomOption = options[Math.floor(Math.random() * options.length)];
      art = artOptions[randomOption];
    } else {
      const requestedArt = args[0].toLowerCase();
      if (artOptions[requestedArt]) {
        art = artOptions[requestedArt];
      } else {
        return [{
          text: `ASCII art '${requestedArt}' not found.\nAvailable options: ${Object.keys(artOptions).join(', ')}`,
          isError: true
        }];
      }
    }
    
    return [{
      text: art,
      isASCII: true
    }];
  },
};