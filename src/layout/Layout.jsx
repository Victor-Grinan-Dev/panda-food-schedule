import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Navbar from '../components/NavBar';
import "./Layout.css"

function Layout() {
 
  return (
    <div className='layout'>
       <Navbar /> 
        <Main/>
        <Footer />
    </div>
  )
}

export default Layout;