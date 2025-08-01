'use client';

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export default function ParticleTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      };
      
      setParticles(prev => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          opacity: particle.opacity - 0.1,
        })).filter(particle => particle.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-purple-400 rounded-full"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            opacity: particle.opacity,
            transform: `scale(${1 - index * 0.05})`,
            transition: 'opacity 0.1s ease-out',
          }}
        />
      ))}
    </div>
  );
}