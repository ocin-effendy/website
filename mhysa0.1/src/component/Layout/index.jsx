import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';

function Layout({children, address}) {
  return (
      <div className="overflow-hidden w-full">
            <Nav data={address} />
            {children}
            <Footer />
      </div>
  )
}

export default Layout;
