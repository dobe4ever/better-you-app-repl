// src/components/todos/TodoCard.js

import React, { useState } from 'react';
import { Check, Edit, Repeat, Trash, ChevronRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TodoCardBack from './TodoCardBack';

const TodoCard = ({ todo, onToggle, onEdit, onDelete, onUpdateNotes, onRepeatToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleRepeatClick = (e) => {
    e.stopPropagation();
    onRepeatToggle(todo.id);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (isEditing) {
      onEdit(todo.id, editValue);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(todo.id);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle(todo.id);
  };

  return (
    <AnimatePresence>
      {!isFlipped ? (
        <motion.div
          key="front"
          className="bg-white rounded-lg shadow-md mb-4 border border-gray-200 cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -180 }}
          transition={{ duration: 0.5 }}
          onClick={handleFlip}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center flex-grow mr-4">
              <div
                className={`w-6 h-6 rounded-full mr-4 flex items-center justify-center cursor-pointer transition-colors duration-200 ease-in-out
                  ${todo.isCompleted ? 'bg-orange-main hover:bg-orange-600' : 'bg-orange-100 hover:bg-orange-200'}`}
                onClick={handleToggle}
              >
                <Check className={`w-4 h-4 ${todo.isCompleted ? 'text-white' : 'text-orange-main'}`} />
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => setIsEditing(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onEdit(todo.id, editValue);
                      setIsEditing(false);
                    }
                  }}
                  autoFocus
                  className="font-semibold text-gray-800 border-b-2 border-orange-main outline-none flex-grow bg-transparent"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <h3 className={`text-lg font-semibold flex-grow ${todo.isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>{todo.title}</h3>
              )}
            </div>
            <div className="flex items-center space-x-3">
              {todo.hasNotes && (
                <FileText className="text-orange-main cursor-pointer w-5 h-5 hover:text-orange-600 transition-colors duration-200" />
              )}
              <Repeat
                className={`cursor-pointer w-5 h-5 transition-colors duration-200 ${todo.isRecurring ? 'text-orange-main hover:text-orange-600' : 'text-gray-400 hover:text-gray-600'}`}
                onClick={handleRepeatClick}
              />
              <Edit
                className="text-gray-400 cursor-pointer w-5 h-5 hover:text-gray-600 transition-colors duration-200"
                onClick={handleEditClick}
              />
              <Trash
                className="text-gray-400 cursor-pointer w-5 h-5 hover:text-red-500 transition-colors duration-200"
                onClick={handleDeleteClick}
              />
              <ChevronRight
                className="text-gray-400 cursor-pointer w-5 h-5 hover:text-gray-600 transition-colors duration-200"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="back"
          initial={{ rotateY: -180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 180 }}
          transition={{ duration: 0.5 }}
        >
          <TodoCardBack
            todo={todo}
            onClose={handleFlip}
            onUpdateNotes={onUpdateNotes}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TodoCard;