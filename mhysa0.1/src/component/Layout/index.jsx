import React from 'react';
import Footer from '../Footer';
import Nav from '../Nav';

function Layout({children, address, data}) {
  return (
      <div className="w-full">
            <Nav address={address} data={data} />
            {children}
            <Footer />
      </div>
  )
}

export default Layout;
