import React from 'react';

const BottomNavigation = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { id: 'Home', icon: '🏠', label: 'Home' },
    { id: 'Trade', icon: '📊', label: 'Trade' },
    { id: 'History', icon: '🕒', label: 'History' },
    { id: 'Profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div 
          key={item.id}
          className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
          onClick={() => setActiveNav(item.id)}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;