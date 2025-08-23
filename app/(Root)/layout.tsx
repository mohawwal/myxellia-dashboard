import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;