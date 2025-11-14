import React from 'react';

const ProfileScreen = () => {
  const menuItems = [
    { icon: '👤', label: 'Account Settings', color: 'text-blue' },
    { icon: '📈', label: 'Trading Preferences', color: 'text-green' },
    { icon: '🕒', label: 'Transaction History', color: 'text-yellow' },
    { icon: '🔒', label: 'Privacy & Security', color: 'text-purple' },
  ];

  return (
    <div className="page-content">
      <div className="profile-header">
        <div className="avatar">Sp</div>
        <h2 className="profile-name">Sandeep</h2>
        <p className="profile-email">singsandeep971@gmail.com</p>
        <div className="verification-badge">Verified Account</div>
      </div>

      <div className="balance-card">
        <h3 className="balance-title">Account Balance</h3>
        <div className="balance-amount">$12,450.75</div>
        <div className="balance-change positive">+$2,345.50 (23.4%) this month</div>
      </div>

      <div className="stats-grid-profile">
        <div className="stat-card-profile">
          <div className="stat-label-profile">Total Trades</div>
          <div className="stat-value-profile">147</div>
        </div>
        <div className="stat-card-profile">
          <div className="stat-label-profile">Active Positions</div>
          <div className="stat-value-profile">5</div>
        </div>
      </div>

      <div className="menu-list">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className="menu-item"
          >
            <div className="menu-item-content">
              <span className={item.color}>{item.icon}</span>
              <span className="menu-item-label">{item.label}</span>
            </div>
            <span className="menu-chevron">›</span>
          </button>
        ))}
      </div>

      <button className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default ProfileScreen;