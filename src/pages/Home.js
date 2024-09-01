import React, { useState, useEffect } from 'react';
import UserProfile from '../components/ui/UserProfile';
import ListsContainer from '../components/lists/ListsContainer';

function Home({ habits, todos, onToggleHabit, onToggleTodo, onUpdateHabit, onDeleteHabit }) {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`, // UserProfile moves at half the scroll speed
    transition: 'transform 0.85s cubic-bezier(0,0,0.2,1)'
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 100; // Adjust this value to control how quickly the fade occurs
      const newOpacity = Math.max(0, 1 - scrollPosition / maxScroll);
      setScrollOpacity(newOpacity);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-0 pb-0">
      <div className="container md:flex md:flex-col md:items-center">
        <div style={parallaxStyle} 
          className="color-orange-main mb-0"> 
          <UserProfile opacity={scrollOpacity} />
        </div>
        <div className="relative"> {/* Ensure ListsContainer is above UserProfile */}
        <ListsContainer
          habits={habits}
          todos={todos}
          onToggleHabit={onToggleHabit}
          onToggleTodo={onToggleTodo}
          onUpdateHabit={onUpdateHabit}
          onDeleteHabit={onDeleteHabit}
        />
          </div>
      </div>
    </div>
  );
}

export default Home;

