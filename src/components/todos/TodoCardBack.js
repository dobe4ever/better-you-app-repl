import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Edit } from 'lucide-react';

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

  const handleCancel = () => {
    setNotes(todo.notes || '');
    setIsEditing(false);
  };

  const renderNotes = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state for animation
      animate={{ opacity: 1, y: 0 }} // Animated state
      exit={{ opacity: 0, y: 50 }} // Exit animation
      className="bg-white rounded-lg shadow-md p-4 mb-4" // Container styling
    >
      <div className="flex justify-between items-center mb-4"> {/* Header section styling */}
        <h2 className="text-xl font-bold">{todo.title}</h2> {/* Title styling */}
        <ChevronLeft className="cursor-pointer" onClick={onClose} /> {/* Back button styling */}
      </div>

      <div className="mb-4"> {/* Main content styling */}
        <div className="flex justify-between items-center mb-2"> {/* Notes header styling */}
          <label className="block text-gray-700">Notes</label> {/* Notes label styling */}
          {!isEditing && todo.hasNotes && (
            <Edit
              className="cursor-pointer text-gray-400 hover:text-gray-600" // Edit icon styling
              size={18}
              onClick={handleEdit}
            />
          )}
        </div>
        {isEditing ? (
          <>
            {/* Styling for the textarea input when editing notes */}
            <textarea
              value={notes}
              onChange={handleNotesChange}
              className="w-full p-2 border rounded-md mb-2 focus:ring-2 focus:ring-orange-main focus:border-transparent" // Modify this line to change textarea style
              rows="4"
              placeholder="Add your notes here..." // Placeholder text
              autoFocus
            />
            <div className="flex justify-end space-x-2"> {/* Button container styling */}
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" // Cancel button styling
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-orange-main text-white px-4 py-2 rounded-md hover:bg-orange-600" // Save button styling
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <div className="w-full p-2 mb-2 min-h-[100px]"> {/* Styling for displaying saved notes */}
            {notes ? (
              <div className="whitespace-pre-wrap"> {/* Modify this line to change text display style */}
                {renderNotes(notes)}
              </div>
            ) : (
              'No notes added yet.' // Text for no notes
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TodoCardBack;
