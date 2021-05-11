import React, { useEffect, useState } from 'react';
import HeaderTop from './Components/HeaderTop';
import Navigation from './Components/HeaderNav';
import './header.css';
import { connect } from 'react-redux';
import CategorySidebar from './Components/SubComponents/CategorySidebar';

function Index(props) {
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
      <Navigation
        categoryBar={props.categoryBar}
        setCategoryBar={props.setCategoryBar}
      />
      {/* <CategorySidebar
        categoryBar={props.categoryBar}
        setCategoryBar={props.setCategoryBar}
      /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
