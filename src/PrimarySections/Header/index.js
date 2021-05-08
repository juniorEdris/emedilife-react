import React, { useEffect, useState } from 'react';
import HeaderTop from './Components/HeaderTop';
import Navigation from './Components/HeaderNav';
import './header.css';

function Index() {
  const [stickyNav, setStickyNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {
        if (window.scrollY > 300) {
          setStickyNav(true);
        } else {
          setStickyNav(false);
        }
      });
    };
  }, [stickyNav]);
  return (
    <div className={stickyNav && 'header_sticky'}>
      <HeaderTop />
      <Navigation />
    </div>
  );
}

export default Index;
