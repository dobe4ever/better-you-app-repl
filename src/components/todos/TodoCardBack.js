import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TodoCardBack = ({ todo, onClose, onUpdateNotes }) => {
  const [notes, setNotes] = useState(todo.notes || '');

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    onUpdateNotes(todo.id, e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <X className="cursor-pointer" onClick={onClose} />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
        <textarea
          value={notes}
          onChange={handleNotesChange}
          className="w-full p-2 border rounded-md"
          rows="4"
          placeholder="Add your notes here..."
        />
      </div>
    </motion.div>
  );
};

export default TodoCardBack;