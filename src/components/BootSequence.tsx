import React, { useState, useEffect } from 'react';

export const BootSequence: React.FC = () => {
  const [bootSteps, setBootSteps] = useState<string[]>([]);
  
  useEffect(() => {
    const bootMessages = [
      "Initializing system...",
      "Loading kernel...",
      "Starting system processes...",
      "Mounting filesystems...",
      "Starting networking services...",
      "Loading portfolio data...",
      "System check: OK",
      "Starting terminal session..."
    ];
    
    let stepIndex = 0;
    
    const bootInterval = setInterval(() => {
      if (stepIndex < bootMessages.length) {
        setBootSteps(prev => [...prev, bootMessages[stepIndex]]);
        stepIndex++;
      } else {
        clearInterval(bootInterval);
      }
    }, 300);
    
    return () => clearInterval(bootInterval);
  }, []);
  
  return (
    <div className="crt-screen crt-flicker">
      <div className="terminal-content">
        <div className="ascii-art">
{`
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄            
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌           
 ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌   ▐░▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌      ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌           
     ▐░▌     ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌ ▐░▌▐░▌▐░▌       ▐░▌▐░▌      ▐░▌▐░▌       ▐░▌▐░▌           
     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▐░▌ ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌           
     ▐░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌      ▐░▌▐░░░░░░░░░░░▌▐░▌           
     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀ ▐░▌   ▀   ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌      ▐░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌           
     ▐░▌     ▐░▌          ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌      ▐░▌▐░▌       ▐░▌▐░▌           
     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ ▐░▌       ▐░▌▐░▌       ▐░▌▐░█▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ 
     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
                                                                                                          
`}
        </div>
        
        <div className="boot-sequence">
          {bootSteps.map((step, index) => (
            <div key={index} className="output-text" style={{ animationDelay: `${index * 300}ms` }}>
              [OK] {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};