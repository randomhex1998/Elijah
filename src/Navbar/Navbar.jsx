import React from 'react'
import DSKNavbar from './DSKNavbar'

function Navbar() {
  return (
    <nav className='bg-[#eee]  shadow'>
        <div className='container mx-auto h-[100px] flex items-center justify-between'>
                <DSKNavbar/>
        </div>
    </nav>
  )
}

export default Navbar