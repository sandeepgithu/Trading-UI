import React from 'react';
import CategoryTabs from './CategoryTabs';
import ForexRow from './ForexRow';

const HomeScreen = ({ 
  activeCategory, 
  setActiveCategory, 
  tradingData, 
  onPairSelect 
}) => {
  return (
    <>
      <CategoryTabs 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <div className="list">
        {tradingData[activeCategory]?.map((data, index) => (
          <ForexRow 
            key={index} 
            data={data} 
            onPairSelect={onPairSelect}
          />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;