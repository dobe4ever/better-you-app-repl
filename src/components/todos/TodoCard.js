import React, { useState } from 'react';
import { Check, Edit, Repeat, Trash } from 'lucide-react';
import { motion } from 'framer-motion';

const TodoCard = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isRepeat, setIsRepeat] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleRepeatClick = () => {
    setIsRepeat(!isRepeat);
  };

  const handleEditClick = () => {
    if (isEditing) {
      onEdit(todo.id, editValue);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md mb-4 border-0 border-gray-200"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-center p-1 pl-4 pr-2">
        <div className="flex items-center">
          <div
            className={`w-8 rounded-full mr-3 flex items-center justify-center cursor-pointer z-10
              ${todo.isCompleted ? 'bg-orange-main' : 'bg-orange-100'}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggle(todo.id);
            }}
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
              className="font-semibold border-b-2 border-gray-400 outline-none"
            />
          ) : (
            <h3 className="text-style-baseText">{todo.title}</h3>
          )}
        </div>
        <div className="flex items-center p-2">
          <Repeat
            className={`cursor-pointer mr-3 w-5 ${isRepeat ? 'text-orange-main' : 'text-gray-400'}`}
            onClick={(e) => {
              e.stopPropagation();
              handleRepeatClick();
            }}
          />
          <Edit
            className="text-gray-400 cursor-pointer mr-3 w-5"
            onClick={(e) => {
              e.stopPropagation();
              handleEditClick();
            }}
          />
          <Trash
            className="text-gray-400 cursor-pointer w-5"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteClick();
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TodoCard;
