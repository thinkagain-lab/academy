import React from 'react';

const AnimatedButton = ({ children, onClick, className = '' }) => {
  return (
    <button 
      className={`relative px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg rounded-full 
                 overflow-hidden transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg 
                 hover:shadow-green-500/40 active:translate-y-0 active:shadow-md active:shadow-blue-500/40 
                 ${className}`}
      onClick={onClick}
      style={{ 
        cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' transform='rotate(-90)'><path fill='%23FFCC00' stroke='%23FF0000' stroke-width='1' d='M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46Z'/></svg>") 0 0, auto`
      }}
    >
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  -left-full hover:left-full transition-all duration-700 ease-in-out"
        aria-hidden="true"
      />
    </button>
  );
};

export default AnimatedButton;