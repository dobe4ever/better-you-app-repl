// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import UserProfile from './components/UserProfile';
import ListsContainer from './components/ListsContainer';
import LoginSignupForm from './components/LoginSignupForm';
import { habits as initialHabits, todos as initialTodos } from './data/dummyData';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [habits, setHabits] = useState(initialHabits);
  const [todos, setTodos] = useState(initialTodos);

  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
    ));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const updateHabit = (updatedHabit) => {
    setHabits(habits.map(habit =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    ));
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter(habit => habit.id !== habitId));
  };

  if (!isLoggedIn) {
    return <LoginSignupForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="pt-16 pb-20">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Routes>
              <Route path="/" element={
                <>
                  <UserProfile />
                  <ListsContainer
                    habits={habits}
                    todos={todos}
                    onToggleHabit={toggleHabit}
                    onToggleTodo={toggleTodo}
                    onUpdateHabit={updateHabit}
                    onDeleteHabit={deleteHabit}
                  />
                </>
              } />
              <Route path="/news" element={<div>News Section</div>} />
              <Route path="/add" element={<div>Add Section</div>} />
              <Route path="/coach" element={<div>AI Coach Section</div>} />
              <Route path="/more" element={<div>More Section</div>} />
            </Routes>
          </div>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
