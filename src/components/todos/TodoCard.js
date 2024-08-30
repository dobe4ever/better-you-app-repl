import React, { useState } from 'react';
import { Check, Edit, Repeat, Trash, ChevronRight } from 'lucide-react';
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
          className="bg-white rounded-lg shadow-md mb-4 border-0 border-gray-200 cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: -180 }}
          transition={{ duration: 0.5 }}
          onClick={handleFlip}
        >
          <div className="flex justify-between items-center p-1 pl-4 pr-2">
            <div className="flex items-center flex-grow">
              <div
                className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center cursor-pointer z-10
                  ${todo.isCompleted ? 'bg-orange-main' : 'bg-orange-100'}`}
                onClick={handleToggle}
              >
                <Check className="text-white" />
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
                  className="font-semibold border-b-2 border-gray-400 outline-none flex-grow"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <h3 className="text-style-baseText flex-grow">{todo.title}</h3>
              )}
            </div>
            <div className="flex items-center p-2">
              <Repeat
                className={`cursor-pointer mr-3 w-5 ${todo.isRecurring ? 'text-orange-main' : 'text-gray-400'}`}
                onClick={handleRepeatClick}
              />
              <Edit
                className="text-gray-400 cursor-pointer mr-3 w-5"
                onClick={handleEditClick}
              />
              <Trash
                className="text-gray-400 cursor-pointer mr-3 w-5"
                onClick={handleDeleteClick}
              />
              <ChevronRight
                className="text-gray-400 cursor-pointer w-5"
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