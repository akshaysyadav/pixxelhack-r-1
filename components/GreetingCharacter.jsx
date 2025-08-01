'use client';

import React, { useState, useEffect } from 'react';

const GreetingCharacter = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    // Show character after page loads
    const timer1 = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Show greeting and start waving
    const timer2 = setTimeout(() => {
      setShowGreeting(true);
      setIsWaving(true);
    }, 1500);

    // Stop waving but keep greeting visible
    const timer3 = setTimeout(() => {
      setIsWaving(false);
    }, 3000);

    // Hide greeting
    const timer4 = setTimeout(() => {
      setShowGreeting(false);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Character */}
      <div
        className={`relative transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
        }`}
      >
        {/* Character Body */}
        <div className="relative">
          {/* Main Character Body */}
          <div className="w-24 h-32 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 rounded-3xl shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
            
            {/* Character Head */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full mb-2 flex items-center justify-center shadow-inner relative">
              {/* Eyes */}
              <div className="flex space-x-2 mb-1">
                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm animate-pulse"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm animate-pulse"></div>
              </div>
              {/* Smile */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-5 h-2.5 border-b-3 border-white rounded-full"></div>
              
              {/* Cheek blush */}
              <div className="absolute left-1 top-4 w-2 h-1 bg-pink-300 rounded-full opacity-60"></div>
              <div className="absolute right-1 top-4 w-2 h-1 bg-pink-300 rounded-full opacity-60"></div>
            </div>

            {/* Body details */}
            <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-blue-400 rounded-lg opacity-80"></div>
          </div>

          {/* Waving Arm */}
          <div 
            className={`absolute -top-2 -right-4 w-4 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full origin-bottom transform transition-transform duration-200 ${
              isWaving ? 'animate-pulse rotate-12' : 'rotate-0'
            }`}
            style={{
              animation: isWaving ? 'wave 0.5s ease-in-out infinite alternate' : 'none'
            }}
          >
            {/* Hand */}
            <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-purple-300 to-blue-400 rounded-full"></div>
          </div>

          {/* Left Arm */}
          <div className="absolute top-4 -left-3 w-3 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full transform rotate-12"></div>
        </div>

        {/* Greeting Speech Bubble */}
        {showGreeting && (
          <div className="absolute bottom-36 -left-4 transform">
            <div className="bg-white px-6 py-3 rounded-2xl shadow-xl border-2 border-purple-200 relative animate-bounce">
              <p className="text-purple-700 font-bold text-xl whitespace-nowrap">
                Hi there! 👋
              </p>
              <p className="text-purple-500 text-sm mt-1">Welcome to our studio!</p>
              
              {/* Speech bubble tail */}
              <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-purple-200"></div>
            </div>
          </div>
        )}

        {/* Magical floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-4 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -top-6 right-2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-2 -right-4 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute bottom-0 -left-3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '2.1s' }}></div>
        </div>

        {/* Floating hearts */}
        {showGreeting && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-8 left-4 text-red-400 animate-ping" style={{ animationDelay: '0.5s' }}>💜</div>
            <div className="absolute -top-6 right-6 text-blue-400 animate-ping" style={{ animationDelay: '1.2s' }}>💙</div>
          </div>
        )}
      </div>

      {/* Interactive button */}
      <button
        onClick={() => {
          setShowGreeting(!showGreeting);
          setIsWaving(true);
          setTimeout(() => setIsWaving(false), 1000);
        }}
        className="absolute inset-0 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 hover:scale-105 transition-transform duration-200"
        aria-label="Say hello to our studio mascot"
        title="Click me to say hello!"
      />

      {/* CSS for waving animation */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(25deg); }
        }
      `}</style>
    </div>
  );
};

export default GreetingCharacter;