// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import MainArea from './components/layout/MainArea';
import LoginSignupForm from './components/ui/LoginSignupForm';
import Home from './pages/Home';
import News from './pages/News';
import AICoach from './pages/AICoach';
import Calendar from './pages/Calendar';
import Stats from './pages/Stats';
import Community from './pages/Community';
import Collaboration from './pages/Collaboration';
import Courses from './pages/Courses';
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
      <div className="min-h-screen bg-grey-">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="bg-orange-main"> {/* bg-gradient-tomato bg-artistic-home bg-no-repeat bg-cover Add your custom background color class here */}
              <div className="min-h-full py-[45px]"> {/* Adjust 64px to match your header/footer height */}
              <Home
                habits={habits}
                todos={todos}
                onToggleHabit={toggleHabit}
                onToggleTodo={toggleTodo}
                onUpdateHabit={updateHabit}
                onDeleteHabit={deleteHabit}
              />
            </div>
            </div>
          } />
          <Route path="*" element={
            <MainArea>
              <Routes>
                <Route path="/news" element={<News />} />
                <Route path="/coach" element={<AICoach />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/community" element={<Community />} />
                <Route path="/collaboration" element={<Collaboration />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </MainArea>
          } />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;



