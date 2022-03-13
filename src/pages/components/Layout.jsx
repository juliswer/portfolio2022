import React from 'react'
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <div className="bg-gray-900">
            {children}
        </div>
    </>
  )
}

export default Layout