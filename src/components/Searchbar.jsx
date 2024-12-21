import React from 'react';

const Searchbar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <div className="searchbar-container">
      <input 
        id="searchbar" 
        type="text" 
        placeholder="Search By Name or Symbol" 
        onInput={handleInputChange} 
      />
    </div>
  );
};

export default Searchbar;
