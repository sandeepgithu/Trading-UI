import React from 'react';

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  const tabs = ["Favourites", "Forex", "Crypto", "Indices", "Derivatives"];
  
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${activeCategory === tab ? 'active-tab' : ''}`}
          onClick={() => setActiveCategory(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;