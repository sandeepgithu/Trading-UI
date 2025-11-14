import React, { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import HomeScreen from './components/HomeScreen';
import TradeScreen from './components/TradeScreen';
import HistoryScreen from './components/HistoryScreen';
import ProfileScreen from './components/ProfileScreen';
import BottomNavigation from './components/BottomNavigation';
import { tradingData, historyData } from './data/tradingData';
import './App.css';

const App = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [activeCategory, setActiveCategory] = useState('Forex');
  const [selectedPair, setSelectedPair] = useState(null);
  const [tradeType, setTradeType] = useState('buy');
  const [amount, setAmount] = useState('');

  const handlePairSelect = (pair) => {
    setSelectedPair(pair);
    setActiveNav('Trade');
  };

  const handleClosePair = () => {
    setSelectedPair(null);
  };

  const renderActiveScreen = () => {
    switch (activeNav) {
      case 'Home':
        return (
          <HomeScreen 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            tradingData={tradingData}
            onPairSelect={handlePairSelect}
          />
        );
      case 'Trade':
        return (
          <TradeScreen
            selectedPair={selectedPair}
            tradeType={tradeType}
            amount={amount}
            onTradeTypeChange={setTradeType}
            onAmountChange={setAmount}
            onClosePair={handleClosePair}
            tradingData={tradingData}
            activeCategory={activeCategory}
            onPairSelect={handlePairSelect}
          />
        );
      case 'History':
        return <HistoryScreen historyData={historyData} />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return (
          <HomeScreen 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            tradingData={tradingData}
            onPairSelect={handlePairSelect}
          />
        );
    }
  };

  return (
    <div className="app">
      <TopNavigation />
      {renderActiveScreen()}
      <BottomNavigation 
        activeNav={activeNav} 
        setActiveNav={setActiveNav} 
      />
    </div>
  );
};

export default App;