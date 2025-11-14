import React from 'react';

const HistoryScreen = ({ historyData }) => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h2>Trade History</h2>
        <p>Your trading activity and history</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Profit</div>
          <div className="stat-value positive">+$790.90</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Win Rate</div>
          <div className="stat-value">60%</div>
        </div>
      </div>

      <div className="history-list">
        {historyData.map((trade) => (
          <div key={trade.id} className="history-item">
            <div className="trade-header">
              <div className="trade-info">
                <div className={`trade-icon ${trade.type === 'Buy' ? 'buy-icon' : 'sell-icon'}`}>
                  <span className={trade.type === 'Buy' ? 'icon-buy' : 'icon-sell'}>
                    {trade.type === 'Buy' ? '↑' : '↓'}
                  </span>
                </div>
                <div>
                  <div className="trade-pair">{trade.pair}</div>
                  <div className="trade-details">{trade.type} • ${trade.amount}</div>
                </div>
              </div>
              <div className="trade-result">
                <div className={`trade-profit ${trade.profit.startsWith('+') ? 'positive' : 'negative'}`}>
                  {trade.profit}
                </div>
                <div className="trade-status">{trade.status}</div>
              </div>
            </div>
            <div className="trade-date">{trade.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryScreen;