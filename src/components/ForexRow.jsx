import React from 'react';

const ForexRow = ({ data, onPairSelect }) => {
  return (
    <div className="row" onClick={() => onPairSelect(data)}>
      <div className="left">
        <div className="flags">
          <div className="flag-emoji">{data.flag1}</div>
          <div className="flag-emoji overlap">{data.flag2}</div>
        </div>
        <div className="info">
          <div className="time">15:00:00</div>
          <div className="pair">{data.pair}</div>
          <div className={`change ${data.change.startsWith('+') ? 'positive' : 'negative'}`}>
            {data.change} <span style={{color: '#777'}}>({data.percentage})</span>
          </div>
        </div>
      </div>

      <div className="right">
        <div>
          <span className="price-white">{data.leftPrice}</span>
          <span className={data.change.startsWith('+') ? 'price-green' : 'price-red'}>
            {data.rightPrice}
          </span>
        </div>
        <div className="low-high">L:{data.low} &nbsp;&nbsp; H:{data.high}</div>
      </div>
    </div>
  );
};

export default ForexRow;