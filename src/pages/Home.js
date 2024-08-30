// src/pages/Home.js
import React from 'react';
import UserProfile from '../components/UserProfile';
import ListsContainer from '../components/ListsContainer';

function Home({ habits, todos, onToggleHabit, onToggleTodo, onUpdateHabit, onDeleteHabit }) {
  return (
    <>
      <UserProfile />
      <ListsContainer
        habits={habits}
        todos={todos}
        onToggleHabit={onToggleHabit}
        onToggleTodo={onToggleTodo}
        onUpdateHabit={onUpdateHabit}
        onDeleteHabit={onDeleteHabit}
      />
    </>
  );
}

export default Home;