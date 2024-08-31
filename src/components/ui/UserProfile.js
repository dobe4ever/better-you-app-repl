// src/components/ui/UserProfile.js
import React, { useState, useEffect, useRef } from 'react';
import { User, Mail, Phone } from 'lucide-react';

// Define our golden ratio constant, 'cause we're fancy like that
const GOLDEN_RATIO = 1.618;

const UserProfile = () => {
  // State to manage scroll position and profile size
  const [scrollY, setScrollY] = useState(0);
  const [profileSize, setProfileSize] = useState('full');

  // Ref for the profile container to measure its height
  const profileRef = useRef(null);

  // State for card dimensions
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(300); // Initial height

  // Function to calculate heights based on the golden ratio
  const getHeights = (totalHeight) => {
    const orangeHeight = totalHeight / GOLDEN_RATIO;
    const whiteHeight = totalHeight - orangeHeight;
    return { orangeHeight, whiteHeight };
  };

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle resize events and update card dimensions
  useEffect(() => {
    const handleResize = () => {
      if (profileRef.current) {
        const width = profileRef.current.offsetWidth;
        setCardWidth(width);
        setCardHeight(width / GOLDEN_RATIO);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to update profile size based on scroll position
  useEffect(() => {
    const updateProfileSize = () => {
      const profileHeight = profileRef.current.offsetHeight;
      if (scrollY > profileHeight * 0.3 && scrollY <= profileHeight * 0.7) {
        setProfileSize('medium');
      } else if (scrollY > profileHeight * 0.7) {
        setProfileSize('small');
      } else {
        setProfileSize('full');
      }
    };

    requestAnimationFrame(updateProfileSize);
  }, [scrollY]);

  // Calculate heights for orange and white sections
  const { orangeHeight, whiteHeight } = getHeights(cardHeight);

  // Determine content visibility based on profile size
  const showFullContent = profileSize === 'full';
  const showMediumContent = profileSize === 'full' || profileSize === 'medium';

  return (
    <div 
      ref={profileRef}
      className={`user-profile ${profileSize} w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-all duration-300 ease-in-out`}
      style={{ 
        height: profileSize === 'small' ? `${cardHeight * 0.4}px` : 
                profileSize === 'medium' ? `${cardHeight * 0.7}px` : 
                `${cardHeight}px` 
      }}
    >
      {/* Orange header container */}
      <div 
        className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 transition-all duration-300 ease-in-out"
        style={{ height: `${orangeHeight * (profileSize === 'small' ? 0.4 : profileSize === 'medium' ? 0.7 : 1)}px` }}
      >
        <div className="flex items-center space-x-4 h-full">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <User className="w-10 h-10 text-orange-500" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">John Doe</h2>
            <p className="text-orange-200">Software Developer</p>
          </div>
        </div>
      </div>

      {/* White content container */}
      <div 
        className="p-4 transition-all duration-300 ease-in-out"
        style={{ 
          height: `${whiteHeight * (profileSize === 'small' ? 0.4 : profileSize === 'medium' ? 0.7 : 1)}px`,
          overflowY: 'auto' 
        }}
      >
        {/* First row - always visible */}
        <div className="flex items-center space-x-2 text-gray-700 mb-2">
          <Mail className="w-5 h-5 text-orange-500" />
          <span>john.doe@example.com</span>
        </div>

        {/* Second row - visible in medium and full sizes */}
        {showMediumContent && (
          <div className="flex items-center space-x-2 text-gray-700 mb-2">
            <Phone className="w-5 h-5 text-orange-500" />
            <span>+1 (555) 123-4567</span>
          </div>
        )}

        {/* Third row - only visible in full size */}
        {showFullContent && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'GraphQL'].map((skill) => (
                <span key={skill} className="bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;