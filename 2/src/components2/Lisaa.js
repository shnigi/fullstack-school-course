import React from 'react'

const Lisaa = ({submit, newName, handleName, phoneNumber, handlePhone}) => {
  return (
    <form onSubmit={submit}>
      <div>
        nimi:
        <input
         value={newName}
         onChange={handleName}
        />
      </div>
      <div>
       numero:
       <input
         value={phoneNumber}
         onChange={handlePhone}
       />
     </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default Lisaa;
