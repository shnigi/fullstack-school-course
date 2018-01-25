import React from 'react'

const Rajaus = ({filter, filterList}) => {
  return (
    <div>
      Rajaa näytettäviä:
        <input
          value={filter}
          onChange={filterList}
        />
    </div>
  )
}

export default Rajaus;
