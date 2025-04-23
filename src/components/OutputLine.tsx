import React, { useState, useEffect } from 'react';
import { CommandOutput } from '../types';

interface OutputLineProps {
  output: CommandOutput;
  index: number;
  isLastOutput: boolean;
}

const OutputLine: React.FC<OutputLineProps> = ({ output, index, isLastOutput }) => {
  const [visible, setVisible] = useState<boolean>(false);
  
  useEffect(() => {
    // Add delay for typing effect if specified
    const delay = output.delay || 0;
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay * index);
    
    return () => clearTimeout(timer);
  }, [output, index]);
  
  if (!visible) return null;
  
  // Render HTML content
  if (output.isHTML) {
    return (
      <div 
        className={`output-text ${output.isError ? 'text-red-500' : ''}`}
        dangerouslySetInnerHTML={{ __html: output.text }}
      />
    );
  }
  
  // Render ASCII art
  if (output.isASCII) {
    return <div className="ascii-art">{output.text}</div>;
  }
  
  // Render regular text
  return (
    <div className={`output-text ${output.isError ? 'text-red-500' : ''}`}>
      {output.text}
    </div>
  );
};

export default OutputLine;