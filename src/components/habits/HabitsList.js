// src/components/habits/HabitsList.js

import React, { useState, useCallback } from 'react';
import List from '../ui/List';
import HabitCard from './HabitCard';
import HabitCardBack from './HabitCardBack';
import ContextualMenu from '../ui/ContextualMenu';
import AddHabitBox from './AddHabitBox';
import { AlarmClock, Palette, Lock, Calendar, Repeat, Flag, Star, Trash } from 'lucide-react';

const HabitsList = ({ habits, onToggle, onUpdate, onDelete }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedHabitId, setSelectedHabitId] = useState(null);

  const handleCardClick = useCallback((habitId) => {
    const habit = habits.find(h => h.id === habitId);
    setSelectedHabit(habit);
  }, [habits]);

  const handleOpenMenu = useCallback((event, habitId) => {
    event.stopPropagation();
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      x: rect.right,
      y: rect.bottom
    });

    setSelectedHabitId(habitId);
    setMenuOpen(true);
  }, [habits]);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
    setSelectedHabitId(null);
  }, []);

  const handleMenuItemClick = useCallback((action) => {
    const habit = habits.find(h => h.id === selectedHabitId);
    if (!habit) return;

    let updatedHabit;
    switch (action) {
      case 'Highlight':
        updatedHabit = { ...habit, isHighlighted: !habit.isHighlighted };
        break;
      case 'Recurring':
        updatedHabit = { ...habit, isRecurring: !habit.isRecurring };
        break;
      case 'Priority':
        updatedHabit = { ...habit, priority: !habit.priority };
        break;
      case 'Set Deadline':
        updatedHabit = { ...habit, deadline: new Date().toISOString() };
        break;
      case 'Set Reminder':
        updatedHabit = { ...habit, reminder: new Date().toISOString() };
        break;
      case 'Delete':
        onDelete(selectedHabitId);
        break;
      default:
        console.log(`Action ${action} not implemented`);
        return;
    }

    if (updatedHabit) {
      onUpdate(updatedHabit);
    }

    handleCloseMenu();
  }, [selectedHabitId, habits, onUpdate, onDelete, handleCloseMenu]);

  const menuItems = [
    { icon: Star, label: 'Highlight', onClick: () => handleMenuItemClick('Highlight') },
    { icon: Repeat, label: 'Recurring', onClick: () => handleMenuItemClick('Recurring') },
    { icon: Flag, label: 'Priority', onClick: () => handleMenuItemClick('Priority') },
    { icon: Calendar, label: 'Set Deadline', onClick: () => handleMenuItemClick('Set Deadline') },
    { icon: Lock, label: 'Private/Public', onClick: () => handleMenuItemClick('Private/Public') },
    { icon: Palette, label: 'Color', onClick: () => handleMenuItemClick('Color') },
    { icon: AlarmClock, label: 'Set Reminder', onClick: () => handleMenuItemClick('Set Reminder') },
    { icon: Trash, label: 'Delete', onClick: () => handleMenuItemClick('Delete') },
  ];
  
  return (
    <>
      <List
        title="Habits"
        items={habits}
        renderItem={(habit) => (
          <div id={`habit-${habit.id}`} key={habit.id}>
            <HabitCard
              habit={habit}
              onToggle={onToggle}
              onOpenMenu={(event) => handleOpenMenu(event, habit.id)}
              onCardClick={handleCardClick}
            />
              
          </div>
        )}
      />
      {selectedHabit && (
        <HabitCardBack
          habit={selectedHabit}
          onClose={() => setSelectedHabit(null)}
        />
      )}
      <ContextualMenu
        isOpen={menuOpen}
        onClose={handleCloseMenu}
        position={menuPosition}
        items={menuItems}
      />

      <AddHabitBox
        onToggle={onToggle}
        onOpenMenu={(event) => handleOpenMenu(event)}
        onCardClick={handleCardClick}
      />
        
    </>
  );
};

export default HabitsList;
