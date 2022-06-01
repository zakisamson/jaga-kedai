import React from 'react'
import SearchIcon from './search.svg'
import './searchbar.scss'

function SearchBar() {
  return (
    <div className="search-bar-container">
        <input type="text" placeholder="search here..." className="search-input"/>
        <img className='search-icon' src={SearchIcon} alt="" />
    </div>
  )
}

export default SearchBar