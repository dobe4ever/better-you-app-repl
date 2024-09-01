import React from 'react';
import { User, Calendar, Target, Trophy } from 'lucide-react';

const UserProfile = ({ 
  userName = "Claude 'THE BRUH' bot",
  progress = 61.8,
  metrics = [
    { icon: Calendar, label: "Todos", value: 12 },
    { icon: Target, label: "Goals", value: 3 },
    { icon: Trophy, label: "Wins", value: 8 }
  ],
  opacity = 1
}) => {
  const segments = 7;
  const filledSegments = Math.floor((progress / 100) * segments);

  return (
    <div className="bg-transparent w-full max-w-5xl overflow-hidden transition-all duration-300 p-4 sm:p-6 rounded-lg">
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 mb-4">
          <div className="absolute inset-0 rounded-full" style={{
            background: `conic-gradient(#eea30b ${progress}%, #8f3e1c ${progress}%)`
          }}></div>
          <div className="absolute inset-2 sm:inset-3 bg-orange-main rounded-full"></div>
          <div className="absolute inset-1.5 sm:inset-2.5 bg-white rounded-full overflow-hidden border-0 border-orange-main">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 bg-transparent rounded-full p-1 sm:p-2">
            <span className="text-white font-bold text-base sm:text-xl">{progress}%</span>
          </div>
        </div>
        <h1 className="text-lg sm:text-xl font-bold text-white mb-1">{userName}</h1>
        <p className="text-sm sm:text-l text-gray-300">{ }</p>
      </div>

      <div className="mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm sm:text-base font-medium text-gray-300">4 out of 7</span>
          <span className="text-sm sm:text-base font-medium text-gray-300">{progress}%</span>
        </div>
        <div className="w-full h-2 sm:h-3 bg-gray-700 bg-opacity-50 rounded-full overflow-hidden flex">
          {[...Array(segments)].map((_, index) => (
            <div 
              key={index} 
              className={`flex-1 ${index < filledSegments ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-transparent'} ${index > 0 ? 'border-2 border-orange-main' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between mt-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-2 rounded-lg flex items-center justify-center">
            <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-1 sm:mr-2" />
            <div>
              <p className="text-xs sm:text-sm text-gray-400">{metric.label}</p>
              <p className="text-lg sm:text-xl font-bold text-white">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;