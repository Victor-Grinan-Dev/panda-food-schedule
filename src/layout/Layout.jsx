import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Navbar from '../components/NavBar';

function Layout() {
 
  return (
    <div>
        <Navbar />
        <Main/>
        <Footer />
    </div>
  )
}

export default Layout;