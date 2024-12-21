import React from 'react';

const CryptoTable = ({ data }) => {
  return (
    <table id="dataList">
      <tbody>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <tr className="dataContainer">
              <td>
                <img src={item.image} alt={item.name} width="50" />
              </td>
              <td>{item.name}</td>
              <td>{item.symbol.toUpperCase()}</td>
              <td>${item.current_price.toLocaleString()}</td>
              <td>${item.total_volume.toLocaleString()}</td>
              <td className={item.price_change_percentage_24h < 0 ? 'red' : 'green'}>
                {item.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>Mkt Cap : ${item.market_cap.toLocaleString()}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
