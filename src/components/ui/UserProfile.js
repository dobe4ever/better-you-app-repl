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
    <div className="bg-transparent w-full max-w-5xl overflow-hidden transition-all duration-300 p-6 rounded-lg">
      <div className="flex flex-col items-center mb-4">
        <div className="relative w-60 h-60 mb-4"> {/* Increased size here */}
          <div className="absolute inset-0 rounded-full" style={{
            background: `conic-gradient(#eea30b ${progress}%, #8f3e1c ${progress}%)`
          }}></div>
          <div className="absolute inset-2 bg-orange-main rounded-full"></div>
          <div className="absolute inset-4 bg-white rounded-full overflow-hidden border-2 border-orange-main">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 right-0 bg-transparent rounded-full p-2"> {/* Adjusted padding */}
            <span className="text-white font-bold text-xl">{progress}%</span> {/* Increased font size */}
          </div>
        </div>
        <h1 className="text-xl font-bold text-white mb-1">{userName}</h1> {/* Slightly reduced */}
        <p className="text-l text-gray-300">{ }</p> {/* Slightly reduced */}
      </div>

      <div className="mb-2"> {/* Reduced margin */}
        <div className="flex justify-between items-center mb-1"> {/* Reduced margin */}
          <span className="text-base font-medium text-gray-300">4 out of 7</span> {/* Reduced font size */}
          <span className="text-base font-medium text-gray-300">{progress}%</span> {/* Reduced font size */}
        </div>
        <div className="w-full h-3 bg-gray-700 bg-opacity-50 rounded- overflow-hidden flex"> {/* Reduced height */}
          {[...Array(segments)].map((_, index) => (
            <div 
              key={index} 
              className={`flex-1 ${index < filledSegments ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-transparent'} ${index > 0 ? 'border-2 border-orange-main' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3"> {/* Reduced gap */}
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-3 rounded-lg flex items-center justify-center"> {/* Reduced padding */}
            <metric.icon className="w-8 h-8 text-orange-500 mr-2" /> {/* Reduced size and margin */}
            <div>
              <p className="text-xs text-gray-400">{metric.label}</p> {/* Reduced font size */}
              <p className="text-2xl font-bold text-white">{metric.value}</p> {/* Reduced font size */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;