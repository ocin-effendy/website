import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';

function Layout({children, address}) {
  return (
      <>
            <Nav data={address} />
            {children}
            <Footer />
      </>

  )
}

export default Layout;
