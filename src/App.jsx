import React, { useState, useEffect } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import CryptoTable from './components/CryptoTable';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        if (!response.ok) throw new Error('Error Fetching Data');
        const data = await response.json();
        setCryptoData(data);
        setFilteredData(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (searchInput) => {
    const filtered = cryptoData.filter((item) =>
      item.name.toLowerCase().includes(searchInput) || item.symbol.toLowerCase().includes(searchInput)
    );
    setFilteredData(filtered);
  };

  const handleSortByMarketCap = () => {
    const sortedData = [...cryptoData].sort((a, b) => b.market_cap - a.market_cap);
    setFilteredData(sortedData);
  };

  const handleSortByPercentageChange = () => {
    const sortedData = [...cryptoData].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    setFilteredData(sortedData);
  };

  return (
    <div className="container">
      <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
        <Searchbar onSearch={handleSearch} />
        <div className="searchbar-container">
          <button className="btn" onClick={handleSortByMarketCap}>Sort By Mkt Cap</button>
          <button className="btn" onClick={handleSortByPercentageChange}>Sort By Percentage</button>
        </div>
      </div>
      <CryptoTable data={filteredData} />
    </div>
  );
}

export default App;
