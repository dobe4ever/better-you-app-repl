import React from 'react';
import { User, Calendar, Target, Trophy } from 'lucide-react';

const UserProfile = ({ 
  userName = "John Doe", 
  progress = 65, 
  metrics = [
    { icon: Calendar, label: "Todos", value: 12 },
    { icon: Target, label: "Goals", value: 3 },
    { icon: Trophy, label: "Achievements", value: 8 }
  ],
  opacity = 1
}) => {
  const segments = 4;
  const filledSegments = Math.floor((progress / 100) * segments);

  return (
    <div 
      // <div className="w-full max-w-4xl bg-transparent overflow-hidden transition-all duration-300 p-6 rounded-lg">
      className="bg-transparent w-full max-w-4xl overflow-hidden transition-all duration-300 p-6 rounded-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Welcome back!</h1>
          <p className="text-xl text-gray-300">{userName}</p>
        </div>
        <div className="w-35 h-35 bg-white rounded-full overflow-hidden border-4 border-orange-500">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium text-gray-300">Overall Progress</span>
          <span className="text-lg font-medium text-gray-300">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden flex">
          {[...Array(segments)].map((_, index) => (
            <div 
              key={index} 
              className={`flex-1 ${index < filledSegments ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-transparent'} ${index > 0 ? 'border-l border-gray-600' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-4 rounded-lg flex items-center">
            <metric.icon className="w-8 h-8 text-orange-500 mr-3" />
            <div>
              <p className="text-sm text-gray-400">{metric.label}</p>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;