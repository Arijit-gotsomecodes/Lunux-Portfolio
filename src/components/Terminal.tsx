import React, { useState, useEffect, useRef } from 'react';
import { CommandRegistry, HistoryEntry } from '../types';
import { commands } from '../commands';
import { BootSequence } from './BootSequence';
import { useSound } from '../hooks/useSound';
import KeyboardInput from './KeyboardInput';
import OutputLine from './OutputLine';

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [booting, setBooting] = useState<boolean>(true);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { playKeyPress, playBeep, playBoot } = useSound(soundEnabled);

  const welcomeMessage: HistoryEntry = {
    command: 'system',
    output: [{ 
      text: "Welcome to Terminal Portfolio v1.0.0\nType 'help' to see available commands.\n",
      delay: 10 
    }]
  };

  useEffect(() => {
    // Boot sequence
    const bootTimer = setTimeout(() => {
      setBooting(false);
      setHistory([welcomeMessage]);
      
      if (soundEnabled) {
        playBoot();
      }
    }, 3000);
    
    return () => clearTimeout(bootTimer);
  }, [soundEnabled, playBoot]);

  useEffect(() => {
    // Auto-focus input on desktop
    if (!booting && inputRef.current && window.innerWidth > 768) {
      inputRef.current.focus();
    }
  }, [booting, history]);

  useEffect(() => {
    // Scroll to bottom on new output
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (soundEnabled) {
      playKeyPress();
    }
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Navigate command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        const cmd = history[history.length - 1 - newIndex]?.command;
        if (cmd && cmd !== 'system') setInput(cmd);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const cmd = history[history.length - 1 - newIndex]?.command;
        if (cmd && cmd !== 'system') setInput(cmd);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        await processCommand(input.trim());
        setInput('');
        setHistoryIndex(-1);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Command auto-completion logic
      const availableCommands = Object.keys(commands);
      const matchingCommands = availableCommands.filter(
        cmd => cmd.startsWith(input.toLowerCase())
      );
      
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      } else if (matchingCommands.length > 1 && input.trim() !== '') {
        // Show possible completions
        setHistory([
          ...history, 
          { 
            command: input, 
            output: [{ text: `Possible commands: ${matchingCommands.join(', ')}` }] 
          }
        ]);
      }
    }
  };

  const processCommand = async (cmd: string) => {
    const cmdLower = cmd.toLowerCase();
    const args = cmdLower.split(' ');
    const command = args[0];
  
    // Add to history immediately for UI feedback
    setHistory(prev => [...prev, { command: cmd, output: [] }]);
  
    if (soundEnabled) {
      playBeep();
    }
  
    let output: CommandOutput[] = [];
  
    // Special matrix command handling
    if (command === 'matrix') {
      setShowMatrix(true);
      return;
    }
  
    // Toggle sound effects
    if (command === 'sound') {
      setSoundEnabled(!soundEnabled);
      output = [{ text: `Sound effects ${!soundEnabled ? 'enabled' : 'disabled'}` }];
    } 
    // Clear command handling
    else if (command === 'clear') {
      setHistory([welcomeMessage]);
      return;
    }
    // Process command via registry
    else if (commands[command]) {
      try {
        output = await commands[command].execute(args.slice(1), { history });
      } catch (error) {
        output = [{
          text: `Error executing command: ${(error as Error).message}`,
          isError: true
        }];
      }
    } else if (command === 'exit') {
      output = [{ text: 'Goodbye! Refreshing...' }];
      setTimeout(() => window.location.reload(), 1500);
    } else {
      output = [{
        text: `Command not found: ${command}. Type 'help' for available commands.`,
        isError: true
      }];
    }
  
    // Update history with output
    setHistory(prev => {
      const newHistory = [...prev];
      if (newHistory.length > 0) {
        newHistory[newHistory.length - 1].output = output;
      }
      return newHistory;
    });
  };
  
  
  // Handle matrix mode exit
  const exitMatrix = () => {
    setShowMatrix(false);
  };

  // Handle clicks on terminal to focus input
  const handleTerminalClick = () => {
    if (!booting && inputRef.current && window.innerWidth > 768) {
      inputRef.current.focus();
    }
  };

  if (booting) {
    return <BootSequence />;
  }
  
  if (showMatrix) {
    // Import is dynamic to save initial load time
    const MatrixEffect = React.lazy(() => import('./MatrixEffect'));
    return (
      <React.Suspense fallback={<div className="crt-screen"></div>}>
        <MatrixEffect onExit={exitMatrix} />
      </React.Suspense>
    );
  }

  return (
    <div className="crt-screen" onClick={handleTerminalClick}>
      <div ref={terminalRef} className="terminal-content">
        {/* Render command history and outputs */}
        {history.map((entry, index) => (
          <div key={index}>
            {entry.command !== 'system' && (
              <div className="input-line">
                <span className="prompt">visitor@portfolio:~$</span>
                <span className="ml-2">{entry.command}</span>
              </div>
            )}
            
            {entry.output.map((output, outputIndex) => (
              <OutputLine 
                key={outputIndex} 
                output={output} 
                index={outputIndex}
                isLastOutput={outputIndex === entry.output.length - 1}
              />
            ))}
          </div>
        ))}
        
        {/* Input line */}
        <div className="input-line">
          <span className="prompt">visitor@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="input-field ml-2"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
          />
          <span className="cursor"></span>
        </div>
      </div>
      
      {/* Mobile keyboard helper */}
      {window.innerWidth <= 768 && (
        <KeyboardInput 
          onCommand={processCommand} 
          playKeySound={soundEnabled ? playKeyPress : undefined}
        />
      )}
    </div>
  );
};

export default Terminal;