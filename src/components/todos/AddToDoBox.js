import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from "../../lib/utils";
import IconButton from '../ui/IconButton';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

const AddHabitBox = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddClick = () => {
        if (inputValue.trim()) {
            onAdd(inputValue.trim());
            setInputValue("");
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if inside a form
            handleAddClick();
        }
    };

    return (
<div className="flex justify-center mb-4">
  <div className="relative flex items-center w-3/4 max-w-2xl pt-4 pb-2">
    <Input
      type="text"
      placeholder="Add New To-Do"
      required
      className="w-full pl-6 pr-12 py-2 bg-white rounded-full shadow-md" // edit rounded (full, lg or none)
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
    <span className="absolute left-3 text-gray-400">
      {/* You can add an icon here if needed */}
    </span>
    <IconButton
        className="absolute right-2 rounded-full flex items-center justify-center cursor-pointer bg-orange-main text-white"
      icon={Plus}
      onClick={handleAddClick}
    />
  </div>
</div>
    );
};

export default AddHabitBox;
