// src/pages/Home.js
import React from 'react';
import UserProfile from '../components/ui/UserProfile';
import ListsContainer from '../components/lists/ListsContainer';

function Home({ habits, todos, onToggleHabit, onToggleTodo, onUpdateHabit, onDeleteHabit }) {
  return (
    <div className="md:flex md:space-x-">
      <UserProfile />
      <ListsContainer
        habits={habits}
        todos={todos}
        onToggleHabit={onToggleHabit}
        onToggleTodo={onToggleTodo}
        onUpdateHabit={onUpdateHabit}
        onDeleteHabit={onDeleteHabit}
      />
    </div>
  );
}

export default Home;