import React from 'react';
import { motion } from 'framer-motion';

const IconButtonWhite = ({ icon: Icon, onClick, className, isActive }) => {
  return (
    <motion.button
      className={`p-2 rounded-full ${
        isActive ? 'text-orange-main' : 'text-white'
      } ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={20} />
    </motion.button>
  );
};

export default IconButtonWhite;