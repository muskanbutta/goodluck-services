import React from 'react'

const Navbar = ({filterItem, serviceList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
      {
        serviceList.map((curElem) => {
      return(
        <button className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button>
      )

    })
      }
      </div>
    </nav>
    </>
  )
}

export default Navbar
