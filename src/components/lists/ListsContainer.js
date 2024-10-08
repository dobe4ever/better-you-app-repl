// src/components/lists/ListsContainer.js
import React, { useState } from 'react';
import HabitsList from './habits/HabitsList';
import TodosList from './todos/TodosList'; 
import { habits as initialHabits, todos as initialTodos } from '../../data/dummyData';


const ListsContainer = () => {
  const [habits, setHabits] = useState(initialHabits);
  const [todos, setTodos] = useState(initialTodos);

  const onToggleHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
    ));
  };

  const onToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const onHighlightHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, isHighlighted: !habit.isHighlighted } : habit
    ));
  };

  const onSetRecurringHabit = (id) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, isRecurring: !habit.isRecurring } : habit
    ));
  };

  const onDeleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

return (
  <div className="sm:flex md:space-x-2 bg-white rounded-3xl rounded-b-none shadow-lg pt-4 px-3 py-3 mt- w-full">
    <div className="sm:w-1/2">
      <HabitsList 
        habits={habits} 
        onToggle={onToggleHabit}
        onHighlight={onHighlightHabit}
        onSetRecurring={onSetRecurringHabit}
        onDelete={onDeleteHabit}
      />
    </div>
    <div className="sm:w-1/2">
      <TodosList 
        todos={todos} 
        onToggle={onToggleTodo}
      />
    </div>
  </div>
);
};

export default ListsContainer;