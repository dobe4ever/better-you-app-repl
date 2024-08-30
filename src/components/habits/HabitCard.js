import React from 'react';
import { motion } from 'framer-motion';
import IconButton from '../ui/IconButton';
import { Trash, Palette, Lock, Check, MoreHorizontal, AlarmClock, Star, Repeat, Flag, Calendar } from 'lucide-react';

const HabitCard = ({ habit, onToggle, onOpenMenu, onCardClick }) => {
  // Dummy value for consecutive days (0-30)
  const consecutiveDays = 14; 
  const totalDays = 30; // Assuming 30 days in a month

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
      <div className="flex-grow bg-white pt-2 pl-4 pr-8">
        <h3 className="text-style-subheading text-left mb-3">{habit.name}</h3>

        <div className="mb-1 flex justify-between items-center">
          <IconButton
            icon={Check}
            onClick={(e) => handleAction(e, onToggle)}
            isActive={habit.isCompleted}
            className={`mr-4 ${habit.isCompleted ? 'bg-orange-main text-white' : 'bg-orange-100 text-white'}`}
          />
          <div className="w-full">
            {/* First Progress Bar */}
            <div className="relative w-full h-3 bg-orange-100 rounded-full mb-2">
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
                  className={`w-3 h-3 rounded-full ${index < consecutiveDays ? 'bg-orange-main' : 'bg-orange-100'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Rest of the component remains unchanged */}
        <div className="flex justify-between items-center">
          <div className="flex">
            {habit.isHighlighted && <Star className="text-gray-200 mr-2 h-5 w-5" />}
            {habit.isRecurring && <Repeat className="text-gray-200 mr-2 h-5 w-5" />}
            {habit.priority && <Flag className="text-gray-200 mr-2 h-5 w-5" />}
            {habit.deadline && <Calendar className="text-gray-200 mr-2 h-5 w-5" />}
            {habit.reminder && <AlarmClock className="text-gray-200 mr-2 h-5 w-5" />}
            {habit.priority && <Lock className="text-gray-200 mr-2 h-5 w-5" />}
            {habit.deadline && <Palette className="text-gray-200 mr-2 h-5 w-5" />}
            {habit.reminder && <Trash className="text-gray-200 mr-2 h-5 w-5" />}
          </div>
          <IconButton 
            icon={MoreHorizontal}
            onClick={(e) => onOpenMenu(e)}
          />
        </div>
      </div>

      <div className="bg-orange-main w-20 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">{consecutiveDays}</span>
        <span className="text-xs font-medium text-white">
          {consecutiveDays === 1 ? 'day' : 'days'}
        </span>
      </div>
    </motion.div>
  );
};

export default HabitCard;