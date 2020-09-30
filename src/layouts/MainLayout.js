import React from 'react';
import PropTypes from 'prop-types';

import TopSlider from '../components/TopSlider/TopSlider';
import Menu from '../components/Menu/Menu';
import InfoList from '../components/InfoList/InfoList';
import BottomInfoBlock from '../components/BottomInfoBlock/BottomInfoBlock';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <main className="main">
      <TopSlider />
      <Menu />
      <div className="main__inner">
        <InfoList />
        {children}
        <BottomInfoBlock />
      </div>
      <Footer />
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
