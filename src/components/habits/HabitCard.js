import React from 'react';
import { motion } from 'framer-motion';
import IconButton from '../ui/IconButton';
import { Trash, Palette, Lock, Check, MoreHorizontal, AlarmClock, Star, Repeat, Flag, Calendar } from 'lucide-react';

const HabitCard = ({ habit, onToggle, onOpenMenu, onCardClick }) => {
  const consecutiveDays = 14; 
  const totalDays = 30;

  const handleAction = (e, action) => {
    e.stopPropagation();
    action(habit.id);
  };

  return (
    <motion.div
      className="flex rounded-lg shadow-md mb-4 h-36 overflow-hidden"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onCardClick(habit.id)}
    >
      {/* White section (left side) */}
      <div className="flex-grow bg-white p-2 sm:p-4 flex flex-col">

        {/* Habit title */}
        <h3 className="text-style-subheading text-left mb-2 truncate">{habit.name}</h3>

        {/* Progress bars and check button */}
        <div className="mb-1 flex items-center space-x-2">
          <IconButton
            icon={Check}
            onClick={(e) => handleAction(e, onToggle)}
            isActive={habit.isCompleted}
            className={`flex-shrink-0 ${habit.isCompleted ? 'bg-orange-main text-white' : 'bg-orange-100 text-white'}`}
          />
          <div className="flex-grow">
            {/* First Progress Bar */}
            <div className="relative w-full h-2 bg-orange-100 rounded-full mb-1">
              <div 
                className="absolute top-0 left-0 h-full bg-orange-main rounded-full"
                style={{ width: `${(consecutiveDays / totalDays) * 100}%` }}
              ></div>
            </div>
            {/* Second Progress Bar (Dots) */}
            <div className="flex justify-between">
              {[...Array(totalDays)].map((_, index) => (
                <div 
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${index < consecutiveDays ? 'bg-orange-main' : 'bg-orange-100'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Status icons and More button */}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex overflow-x-auto space-x-1 flex-grow">
            {habit.isHighlighted && <Star className="text-gray-200 flex-shrink-0 h-4 w-4" />}
            {habit.isRecurring && <Repeat className="text-gray-200 flex-shrink-0 h-4 w-4" />}
            {habit.priority && <Flag className="text-gray-200 flex-shrink-0 h-4 w-4" />}
            {habit.deadline && <Calendar className="text-gray-200 flex-shrink-0 h-4 w-4" />}
            {habit.reminder && <AlarmClock className="text-gray-200 flex-shrink-0 h-4 w-4" />}
            {habit.priority && <Lock className="text-gray-200 flex-shrink-0 h-4 w-4" />}
            {habit.deadline && <Palette className="text-gray-200 flex-shrink-0 h-4 w-4" />}
            {habit.reminder && <Trash className="text-gray-200 flex-shrink-0 h-4 w-4" />}
          </div>
          <IconButton 
            icon={MoreHorizontal}
            onClick={(e) => onOpenMenu(e)}
            className="flex-shrink-0 ml-2"
          />
        </div>
      </div>

      {/* Orange section (right side) */}
      <div className="bg-orange-main w-16 sm:w-20 flex flex-col items-center justify-center flex-shrink-0">
        <span className="text-xl sm:text-2xl font-bold text-white">{consecutiveDays}</span>
        <span className="text-xs font-medium text-white">
          {consecutiveDays === 1 ? 'day' : 'days'}
        </span>
      </div>
    </motion.div>
  );
};

export default HabitCard;