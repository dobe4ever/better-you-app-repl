// Importing React and specific icons from the 'lucide-react' library
import React from 'react';
import { User, Calendar, Target, Trophy } from 'lucide-react';

// Define a functional component named UserProfile
const UserProfile = ({ 
  userName = "Claude 'THE BRUH' bot", // Default username if no prop is provided
  progress = 61.8, // Default progress percentage if no prop is provided
  metrics = [ // Default metrics if no prop is provided
    { icon: Calendar, label: "Todos", value: 12 },
    { icon: Target, label: "Goals", value: 3 },
    { icon: Trophy, label: "Wins", value: 8 }
  ],
  opacity = 1 // Default opacity if no prop is provided
}) => {
  const segments = 7; // Number of segments in the progress bar
  const filledSegments = Math.floor((progress / 100) * segments); // Calculate the number of filled segments based on progress

  return (
    <div className="bg-transparent w-full max-w-5xl overflow-hidden transition-all duration-300 p-6 rounded-lg">
      {/* Container for user profile section */}
      <div className="flex flex-col items-center mb-4">
        {/* Flex container to center align items and add margin at the bottom */}
        <div className="relative w-60 h-60 mb-4"> {/* Container for profile picture with a specified width and height */}
          {/* Circle background that displays the progress as a conic gradient */}
          <div className="absolute inset-0 rounded-full" style={{
            background: `conic-gradient(#eea30b ${progress}%, #8f3e1c ${progress}%)`
          }}></div>
          {/* Overlay circle to add padding around the profile picture */}
          <div className="absolute inset-3 bg-orange-main rounded-full"></div>
          {/* Profile picture with a border and white background */}
          <div className="absolute inset-2.5 bg-white rounded-full overflow-hidden border-0 border-orange-main">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User Avatar" // Alternative text for the image
              className="w-full h-full object-cover" // Make the image cover the container without distortion
            />
          </div>
          {/* Display the progress percentage */}
          <div className="absolute top-0 right-0 bg-transparent rounded-full p-2">
            <span className="text-white font-bold text-xl">{progress}%</span> {/* Progress percentage text */}
          </div>
        </div>
        <h1 className="text-xl font-bold text-white mb-1">{userName}</h1> {/* Display user name */}
        <p className="text-l text-gray-300">{ }</p> {/* Placeholder for additional text */}
      </div>

      {/* Progress bar container */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-1"> {/* Container for progress indicators */}
          <span className="text-base font-medium text-gray-300">4 out of 7</span> {/* Static text for total segments */}
          <span className="text-base font-medium text-gray-300">{progress}%</span> {/* Display progress percentage */}
        </div>
        {/* Progress bar with segments */}
        <div className="w-full h-3 bg-gray-700 bg-opacity-50 rounded- overflow-hidden flex">
          {/* Create a segment for each part of the progress bar */}
          {[...Array(segments)].map((_, index) => (
            <div 
              key={index} 
              className={`flex-1 ${index < filledSegments ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-transparent'} ${index > 0 ? 'border-2 border-orange-main' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-3 gap-3">
        {/* Map over the metrics array to create a grid item for each metric */}
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-3 rounded-lg flex items-center justify-center">
            {/* Display the icon for the metric */}
            <metric.icon className="w-8 h-8 text-orange-500 mr-2" /> {/* Icon size and margin */}
            <div>
              <p className="text-xs text-gray-400">{metric.label}</p> {/* Metric label */}
              <p className="text-2xl font-bold text-white">{metric.value}</p> {/* Metric value */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the UserProfile component as the default export
export default UserProfile;
