import React, { useState } from 'react';

const List = ({ title, items, renderItem }) => {
  const [hideCompleted, setHideCompleted] = useState(false);

  const filteredItems = hideCompleted ? items.filter(item => !item.isCompleted) : items;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-style-basic">{title}</h2>
        <button 
          className="text-sm text-gray-600"
          onClick={() => setHideCompleted(!hideCompleted)}
        >
          {hideCompleted ? 'Show Completed' : 'Hide Completed'}
        </button>
      </div>
      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;