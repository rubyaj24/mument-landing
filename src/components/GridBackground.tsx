import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }}
      ></div>
    </div>
  );
};

export default GridBackground;