import React from 'react';

const ProgressBar = ({ progress, variant }) => {
  const getProgressBarStyle = () => {
    switch (variant) {
      case 'default':
        return `h-4 bg-gray-200 rounded-full overflow-hidden`;
      case 'neon':
        return `h-2 bg-gray-700 rounded-full overflow-hidden`;
      case 'tron':
        return `h-6 bg-black border-2 border-blue-400 rounded-full overflow-hidden`;
      case 'thick':
        return `h-8 bg-gray-200 rounded-full overflow-hidden`;
      case 'thin':
        return `h-1 bg-gray-200 rounded-full overflow-hidden`;
      default:
        return `h-4 bg-gray-200 rounded-full overflow-hidden`;
    }
  };

  const getProgressStyle = () => {
    switch (variant) {
      case 'default':
        return `h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out`;
      case 'neon':
        return `h-full bg-green-400 rounded-full transition-all duration-300 ease-in-out shadow-[0_0_10px_#4ade80,0_0_20px_#4ade80]`;
      case 'tron':
        return `h-full bg-blue-500 rounded-full transition-all duration-300 ease-in-out`;
      case 'thick':
        return `h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out flex items-center justify-end pr-2`;
      case 'thin':
        return `h-full bg-purple-500 rounded-full transition-all duration-300 ease-in-out`;
      default:
        return `h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out`;
    }
  };

  return (
    <div className={getProgressBarStyle()}>
      <div
        className={getProgressStyle()}
        style={{ width: `${progress}%` }}
      >
        {variant === 'thick' && (
          <span className="text-white text-xs font-bold">{progress}%</span>
        )}
      </div>
    </div>
  );
};

const ProgressBarExamples = () => {
  return (
    <div className="space-y-8 p-8 bg-gray-100 rounded-lg">
      <div>
        <h3 className="text-lg font-semibold mb-2">Default (Orange Accent)</h3>
        <ProgressBar progress={75} variant="default" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Neon Effect</h3>
        <ProgressBar progress={60} variant="neon" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Tron-inspired</h3>
        <ProgressBar progress={45} variant="tron" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Thick with Percentage</h3>
        <ProgressBar progress={80} variant="thick" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Thin Purple</h3>
        <ProgressBar progress={30} variant="thin" />
      </div>
    </div>
  );
};

export default ProgressBarExamples;