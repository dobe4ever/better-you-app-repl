// src/components/layout/BottomNav.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextualMenu from '../ui/ContextualMenu';
import { LayoutGrid, Home, Newspaper, CirclePlus, Bot, Calendar, BarChart2, Users, Briefcase, GraduationCap } from 'lucide-react';

const BottomNav = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Newspaper, label: 'News', path: '/news' },
    { icon: CirclePlus, label: '', path: '/add', isSpecial: true },
    { icon: Bot, label: 'AI Coach', path: '/coach' },
    { icon: LayoutGrid, label: 'More', action: () => setShowMenu(true) },
  ];

  const moreMenuItems = [
    { icon: Calendar, label: 'Calendar', onClick: () => { navigate('/calendar'); setShowMenu(false); } },
    { icon: BarChart2, label: 'Stats', onClick: () => { navigate('/stats'); setShowMenu(false); } },
    { icon: Users, label: 'Community', onClick: () => { navigate('/community'); setShowMenu(false); } },
    { icon: Briefcase, label: 'Collaboration', onClick: () => { navigate('/collaboration'); setShowMenu(false); } },
    { icon: GraduationCap, label: 'Courses', onClick: () => { navigate('/courses'); setShowMenu(false); } },
  ];

  const renderNavItem = (item, index) => {
    if (item.isSpecial) {
      return (
        <div
          key={index}
          className="relative -top-7"
          onClick={() => navigate(item.path)}
        >
          <div className="bg-white rounded-full p-3 shadow-lg cursor-pointer flex items-center justify-center w-16 h-16">
            <div className="text-orange-main">
              <CirclePlus strokeWidth={1} className="w-16 h-16" />
            </div>
          </div>
        </div>
      );
    }
      
    return (
      <div
        key={index}
        className="flex flex-col items-center justify-center h-full"
        onClick={item.action || (() => navigate(item.path))}
      >
        <item.icon className="text-white" />
        <span className="text-white text-sm">{item.label}</span>
      </div>
    );
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-orange-main shadow-lg flex justify-around items-center h-16 px-2 fixed z-10">
        {navItems.map(renderNavItem)}
      </div>
      <ContextualMenu
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        items={moreMenuItems}
        position="bottom-right"
      />
    </>
  );
};

export default BottomNav;