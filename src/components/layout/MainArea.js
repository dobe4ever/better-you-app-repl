// src/components/layout/MainArea.js
import React from 'react';

function MainArea({ children }) {
  return (
    <div className="pt-16 pb-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {children}
      </div>
    </div>
  );
}

export default MainArea;