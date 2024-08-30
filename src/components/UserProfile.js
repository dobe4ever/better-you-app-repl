import React from 'react';

const UserProfile = () => {
  // Example progress value (13 out of 20)
  const progress = (13 / 20) * 100;

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div className="bg-orange-main text-white p-4 flex flex-col items-center">
        <div className="w-34 h-34 bg-white rounded-full mb-2 overflow-hidden">
          {/* Replace with actual user avatar */}
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* <h2 className="text-style-heading">John Doe</h2> */}
      </div>
      <div className="p-4">
        <div className="text-style-baseText text-center text-gray-600 mb-2">13 out of 20 Today</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-orange-main h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;