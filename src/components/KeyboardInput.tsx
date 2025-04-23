import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

interface KeyboardInputProps {
  onCommand: (command: string) => void;
  playKeySound?: () => void;
}

const KeyboardInput: React.FC<KeyboardInputProps> = ({ onCommand, playKeySound }) => {
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  
  const commonCommands = [
    'help', 'whoami', 'projects', 'skills', 
    'contact', 'clear', 'history', 'neofetch'
  ];
  
  const handleKeyClick = (key: string) => {
    if (playKeySound) playKeySound();
    
    if (key === 'Enter') {
      if (input.trim()) {
        onCommand(input.trim());
        setInput('');
      }
    } else if (key === 'Backspace') {
      setInput(prev => prev.slice(0, -1));
    } else {
      setInput(prev => prev + key);
    }
  };
  
  const handleCommandClick = (cmd: string) => {
    if (playKeySound) playKeySound();
    onCommand(cmd);
  };
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-green-500">
      {/* Toggle button */}
      <div className="flex justify-center py-2">
        <button 
          onClick={() => setShowKeyboard(!showKeyboard)}
          className="flex items-center gap-2 px-4 py-2 rounded border border-green-500 text-green-500"
        >
          <Terminal size={16} />
          {showKeyboard ? 'Hide Keyboard' : 'Show Keyboard'}
        </button>
      </div>
      
      {/* Quick command buttons */}
      <div className="flex flex-wrap gap-2 p-2 overflow-x-auto">
        {commonCommands.map(cmd => (
          <button 
            key={cmd}
            onClick={() => handleCommandClick(cmd)} 
            className="px-2 py-1 text-sm rounded border border-green-500 text-green-500"
          >
            {cmd}
          </button>
        ))}
      </div>
      
      {/* Simple keyboard */}
      {showKeyboard && (
        <div className="p-2">
          <div className="flex mb-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-black border border-green-500 text-green-500 px-2 py-1"
            />
            <button 
              onClick={() => handleKeyClick('Enter')}
              className="px-4 py-1 bg-green-900 text-green-500 border border-green-500"
            >
              Enter
            </button>
          </div>
          
          <div className="grid grid-cols-10 gap-1">
            {['1','2','3','4','5','6','7','8','9','0'].map(key => (
              <button 
                key={key} 
                onClick={() => handleKeyClick(key)}
                className="p-2 border border-green-500 text-green-500"
              >
                {key}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-10 gap-1 mt-1">
            {['q','w','e','r','t','y','u','i','o','p'].map(key => (
              <button 
                key={key} 
                onClick={() => handleKeyClick(key)}
                className="p-2 border border-green-500 text-green-500"
              >
                {key}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-9 gap-1 mt-1 ml-2">
            {['a','s','d','f','g','h','j','k','l'].map(key => (
              <button 
                key={key} 
                onClick={() => handleKeyClick(key)}
                className="p-2 border border-green-500 text-green-500"
              >
                {key}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-8 gap-1 mt-1 ml-6">
            {['z','x','c','v','b','n','m','.'].map(key => (
              <button 
                key={key} 
                onClick={() => handleKeyClick(key)}
                className="p-2 border border-green-500 text-green-500"
              >
                {key}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-1 mt-1">
            <button 
              onClick={() => handleKeyClick(' ')}
              className="p-2 col-span-1 border border-green-500 text-green-500"
            >
              Space
            </button>
            <button 
              onClick={() => handleKeyClick('Backspace')}
              className="p-2 col-span-1 border border-green-500 text-green-500"
            >
              Backspace
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyboardInput;