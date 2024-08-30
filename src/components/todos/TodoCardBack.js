// src/components/todos/TodoCardBack.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Save, Edit, Trash } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const TodoCardBack = ({ todo, onClose, onUpdateNotes }) => {
  const [notes, setNotes] = useState(todo.notes || '');
  const [isEditing, setIsEditing] = useState(!todo.hasNotes);

  useEffect(() => {
    setNotes(todo.notes || '');
    setIsEditing(!todo.hasNotes);
  }, [todo.notes, todo.hasNotes]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = () => {
    onUpdateNotes(todo.id, notes);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClear = () => {
    setNotes('');
    onUpdateNotes(todo.id, '');
    setIsEditing(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white rounded-lg shadow-md p-4 mb-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <ChevronLeft className="cursor-pointer" onClick={onClose} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
        {isEditing ? (
          <>
            <textarea
              value={notes}
              onChange={handleNotesChange}
              className="w-full p-2 border rounded-md mb-2"
              rows="4"
              placeholder="Add your notes here... (Markdown supported)"
            />
            <button
              onClick={handleSubmit}
              className="bg-orange-main text-white px-4 py-2 rounded-md mr-2"
            >
              <Save className="inline-block mr-1" size={16} />
              Save
            </button>
          </>
        ) : (
          <>
            <div className="w-full p-2 border rounded-md mb-2 prose">
              <ReactMarkdown>{notes}</ReactMarkdown>
            </div>
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              <Edit className="inline-block mr-1" size={16} />
              Edit
            </button>
            <button
              onClick={handleClear}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              <Trash className="inline-block mr-1" size={16} />
              Clear
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TodoCardBack;