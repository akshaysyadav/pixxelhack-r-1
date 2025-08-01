'use client';

import { useState, useEffect } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function RippleEffect({ children, className = '' }: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRipples(prev => prev.slice(1));
    }, 600);
    
    return () => clearTimeout(timer);
  }, [ripples]);

  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      onClick={createRipple}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 100,
            height: 100,
            animationDuration: '0.6s',
          }}
        />
      ))}
    </div>
  );
}