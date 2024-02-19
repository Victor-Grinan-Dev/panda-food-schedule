import React from 'react';

import Main from '../components/Main';
import Navbar from '../components/NavBar';
import "./Layout.css"

function Layout() {
 
  return (
    <div className='layout'>
       <Navbar /> 
        <Main/>
        
    </div>
  )
}

export default Layout;