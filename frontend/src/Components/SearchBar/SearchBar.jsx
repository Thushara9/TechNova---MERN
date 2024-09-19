import React, { useState } from 'react';
// import { GoSearch } from "react-icons/go";
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
    <div className="main-search">
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
    <div className='search-icon'>
    {/* <GoSearch /> */}
    </div>
    </div>

    </>
  );
};

export default SearchBar;
