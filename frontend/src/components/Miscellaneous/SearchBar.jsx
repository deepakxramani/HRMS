import React from 'react'
import './SearchBarCss.css';

const SearchBar = ({width}) => {
  return (
    <div className='searchbar-container' style={{width: width}}>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
            placeholder='Search'
            name='search'
        />
    </div>
  )
}

export default SearchBar