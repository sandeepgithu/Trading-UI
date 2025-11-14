import React from 'react';

const TradeScreen = ({
  selectedPair,
  tradeType,
  amount,
  onTradeTypeChange,
  onAmountChange,
  onClosePair,
  tradingData,
  activeCategory,
  onPairSelect
}) => {
  if (!selectedPair) {
    return (
      <div className="page-content">
        <div className="empty-state">
          <span className="empty-icon">📈</span>
          <h2 className="empty-title">Select a Trading Pair</h2>
          <p className="empty-description">Go to Home and tap on any pair to start trading</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="pair-info-card">
        <div className="pair-header">
          <div className="pair-info">
            <div className="flags">
              <div className="flag-emoji">{selectedPair.flag1}</div>
              <div className="flag-emoji overlap">{selectedPair.flag2}</div>
            </div>
            <div>
              <h2 className="pair-name-large">{selectedPair.pair}</h2>
              <div className={`change-display ${selectedPair.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {selectedPair.change} ({selectedPair.percentage})
              </div>
            </div>
          </div>
          <button 
            onClick={onClosePair}
            className="close-button"
          >
            ✕
          </button>
        </div>
        
        <div className="price-grid">
          <div className="price-card">
            <div className="price-label">Bid</div>
            <div className="bid-price">{selectedPair.leftPrice}</div>
          </div>
          <div className="price-card">
            <div className="price-label">Ask</div>
            <div className="ask-price">{selectedPair.rightPrice}</div>
          </div>
        </div>
      </div>

      <div className="trade-form">
        <h3 className="form-title">Place Trade</h3>
        
        <div className="trade-type-toggle">
          <button
            onClick={() => onTradeTypeChange('buy')}
            className={`trade-button ${tradeType === 'buy' ? 'buy-active' : 'buy-inactive'}`}
          >
            <span className="button-icon">↑</span>
            Buy
          </button>
          <button
            onClick={() => onTradeTypeChange('sell')}
            className={`trade-button ${tradeType === 'sell' ? 'sell-active' : 'sell-inactive'}`}
          >
            <span className="button-icon">↓</span>
            Sell
          </button>
        </div>

        <div className="amount-section">
          <label className="amount-label">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            placeholder="Enter amount"
            className="amount-input"
          />
        </div>

        <div className="quick-amount-grid">
          {['100', '500', '1000', '5000'].map((val) => (
            <button
              key={val}
              onClick={() => onAmountChange(val)}
              className="quick-amount-button"
            >
              ${val}
            </button>
          ))}
        </div>

        <button
          className={`execute-trade-button ${tradeType === 'buy' ? 'buy-trade' : 'sell-trade'}`}
        >
          {tradeType === 'buy' ? 'Open Buy Position' : 'Open Sell Position'}
        </button>
      </div>

      <div className="related-pairs-section">
        <h3 className="section-title">Related Trading Pairs</h3>
        <div className="related-pairs-list">
          {tradingData[activeCategory]
            ?.filter(item => item.pair !== selectedPair.pair)
            .slice(0, 3)
            .map((item, idx) => (
            <div
              key={idx}
              onClick={() => onPairSelect(item)}
              className="related-pair-item"
            >
              <div className="related-pair-info">
                <div className="flags small">
                  <div className="flag-emoji">{item.flag1}</div>
                  <div className="flag-emoji overlap">{item.flag2}</div>
                </div>
                <div>
                  <div className="related-pair-name">{item.pair}</div>
                  <div className={`related-pair-change ${item.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {item.change} ({item.percentage})
                  </div>
                </div>
              </div>
              <div className="related-pair-price">
                <div className="related-price">{item.leftPrice}</div>
                <span className="chevron-icon">›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeScreen;