import React from 'react'
import DSKNavbar from './DSKNavbar'
import MBLNavbar from './MBLNavbar'

function Navbar() {
  return (
    <nav className='bg-[#eee]  shadow'>
        <div className='container mx-auto h-[100px] flex items-center'>
                <DSKNavbar/>
                <MBLNavbar/>
        </div>
    </nav>
  )
}

export default Navbar