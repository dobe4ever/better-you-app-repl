import React from 'react';
import { motion } from 'framer-motion';

const IconButton = ({ icon: Icon, onClick, className, isActive }) => {
  return (
    <motion.button
      className={`p-2 rounded-full ${
        isActive ? 'text-orange-main' : 'text-orange-main'
      } ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={20} />
    </motion.button>
  );
};

export default IconButton;