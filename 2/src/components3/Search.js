import React from 'react'

const Search = ({country, filterList}) => {
  return (
    <div>
      Find countries:
      <input
       value={country}
       onChange={filterList}
      />
    </div>
  )
}

export default Search;
