import React, { useEffect, useRef } from 'react';

interface MatrixEffectProps {
  onExit: () => void;
}

const MatrixEffect: React.FC<MatrixEffectProps> = ({ onExit }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to be used in the matrix effect
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';

    // Size of the characters
    const fontSize = 14;
    // Number of columns
    const columns = Math.floor(canvas.width / fontSize);

    // Array to store the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Random starting position above the canvas
    }

    // Matrix rain effect function
    const draw = () => {
      // Set semi-transparent background to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      // Loop through each column
      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Move drop down
        drops[i]++;

        // Reset drop to top if it reaches bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    // Animation frame ID for cleanup
    let animationId: number;
    
    // Animation loop
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Exit on click or escape key
    const handleExit = () => {
      onExit();
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleExit();
      }
    };
    
    canvas.addEventListener('click', handleExit);
    window.addEventListener('keydown', handleKeyDown);
    
    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Reset drops
        const newColumns = Math.floor(canvas.width / fontSize);
        for (let i = 0; i < newColumns; i++) {
          drops[i] = drops[i] || Math.random() * -100;
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('click', handleExit);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [onExit]);

  return (
    <div className="matrix-container">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      <div className="absolute top-4 left-4 text-green-500 opacity-70">
        Click anywhere or press ESC to exit
      </div>
    </div>
  );
};

export default MatrixEffect;