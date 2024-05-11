import React from 'react';
import "./SearchBar.css"

const SearchBar = ({value,formSubmit, handleSearchKey,clearSearch}) => {
  return (
   <>
      <div className='searchBar-wrapper'>
        <form onSubmit={formSubmit}>
            <input type="text" onChange={handleSearchKey} placeholder='Search By Category' value={value} />
            {value && <span onClick={clearSearch}>X</span>}
        
            <button>Go</button>
        </form>
      </div>
   </>
  )
}

export default SearchBar