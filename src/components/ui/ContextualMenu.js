// src/components/common/ContextualMenu.js

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IconButtonWhite from './IconButtonWhite';

const ContextualMenu = ({ isOpen, onClose, position, items }) => {
  const menuRef = useRef();
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top, left;

      if (typeof position === 'string') {
        // Handle predefined positions
        switch (position) {
          case 'top-left':
            top = 0;
            left = 0;
            break;
          case 'top-right':
            top = 0;
            left = viewportWidth - menuRect.width;
            break;
          case 'bottom-left':
            top = viewportHeight - menuRect.height;
            left = 0;
            break;
          case 'bottom-right':
            top = viewportHeight - menuRect.height;
            left = viewportWidth - menuRect.width;
            break;
          default:
            top = 0;
            left = 0;
        }
      } else {
        // Handle exact coordinates
        top = position.y;
        left = position.x;

        // Adjust if menu would be off-screen
        if (left + menuRect.width > viewportWidth) {
          left = viewportWidth - menuRect.width - 10;
        }
        if (left < 10) {
          left = 10;
        }
        if (top + menuRect.height > viewportHeight) {
          top = viewportHeight - menuRect.height - 10;
        }
        if (top < 10) {
          top = 10;
        }
      }

      setMenuPosition({ top, left });
    }
  }, [isOpen, position]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              zIndex: 1000,
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
            className="bg-orange-main rounded-lg shadow-xl p-2 w-64 z-50"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center py-2 px-4 hover:bg-orange-300 rounded-md cursor-pointer transition-colors duration-200"
                onClick={() => item.onClick()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon && (
                  <IconButtonWhite
                    icon={item.icon}
                    className="mr-4 text-orange-main"
                  />
                )}
                <span className="text-white">{item.label}</span>
                {item.options && (
                  <select className="ml-auto bg-transparent border-none">
                    {item.options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContextualMenu;