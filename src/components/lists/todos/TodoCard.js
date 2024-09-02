// src/components/todos/TodoCard.js
import React, { useState } from 'react';
import { Check, Edit, Repeat, Trash, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TodoCard = ({ todo, onToggle, onEdit, onDelete, onUpdateNotes, onRepeatToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState(todo.notes || '');
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();
    onToggle(todo.id);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleEditSubmit = () => {
    onEdit(todo.id, editValue);
    setIsEditing(false);
  };

  const handleRepeatClick = (e) => {
    e.stopPropagation();
    onRepeatToggle(todo.id);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(todo.id);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleNotesSubmit = () => {
    onUpdateNotes(todo.id, notes);
    setIsEditingNotes(false);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
      initial={false}
      animate={{ height: isExpanded ? 'auto' : 'fit-content' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center p-4 cursor-pointer" onClick={handleExpand}>
        <div
          className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center cursor-pointer
            ${todo.isCompleted ? 'bg-orange-main' : 'bg-orange-100'}`}
          onClick={handleToggle}
        >
          <Check className={`${todo.isCompleted ? 'text-white' : 'text-orange-main'}`} size={16} />
        </div>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={(e) => e.key === 'Enter' && handleEditSubmit()}
            autoFocus
            className="flex-grow font-semibold text-gray-800 outline-none"
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <h3 className={`flex-grow font-semibold ${todo.isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
            {todo.title}
          </h3>
        )}
        <div className="flex items-center space-x-2 mr-2">
          {todo.hasNotes && <FileText size={16} className="text-orange-main" />}
          {todo.isRecurring && <Repeat size={16} className="text-orange-main" />}
        </div>
        {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded-full ${todo.isRecurring ? 'bg-orange-main text-white' : 'bg-gray-200 text-gray-600'}`}
                  onClick={handleRepeatClick}
                >
                  <Repeat size={16} />
                </button>
                <button className="p-2 rounded-full bg-gray-200 text-gray-600" onClick={handleEditClick}>
                  <Edit size={16} />
                </button>
                <button className="p-2 rounded-full bg-gray-200 text-gray-600" onClick={handleDeleteClick}>
                  <Trash size={16} />
                </button>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Notes</label>
                {!isEditingNotes && (
                  <Edit
                    className="cursor-pointer text-gray-400 hover:text-gray-600"
                    size={16}
                    onClick={() => setIsEditingNotes(true)}
                  />
                )}
              </div>
              {isEditingNotes ? (
                <>
                  <textarea
                    value={notes}
                    onChange={handleNotesChange}
                    className="w-full p-2 border rounded-md mb-2 focus:ring-1 focus:ring-orange-main focus:border-transparent"
                    rows="4"
                    placeholder="Add your notes here..."
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setIsEditingNotes(false)}
                      className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleNotesSubmit}
                      className="px-3 py-1 text-sm bg-orange-main hover:bg-orange-600 text-white rounded-full"
                    >
                      Save
                    </button>
                  </div>
                </>
              ) : (
                <div className="w-full p-2 min-h-[60px] bg-gray-50 rounded-md">
                  {notes ? (
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{notes}</p>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No notes added yet.</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoCard;