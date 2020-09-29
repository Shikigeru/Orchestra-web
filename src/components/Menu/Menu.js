import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import MenuList from '../MenuList/MenuList';
import '../../styles/Menu.sass';

const Menu = () => {
  const { t } = useTranslation();
  const [isMobileMenuShowed, setIsMobileMenuShowed] = useState(false);

  return (
    <nav>
      <div
        role="button"
        tabIndex={0}
        className="mob-menu"
        onClick={() => setIsMobileMenuShowed(!isMobileMenuShowed)}>
        <button type="button" className="hamburger-button">
          <i className="fa fa-bars" aria-hidden="true" />
        </button>
        <p>{t('Menu.menu')}</p>
      </div>
      <div
        className={isMobileMenuShowed ? 'mobile-menu opened' : 'mobile-menu'}>
        <div
          role="button"
          tabIndex={0}
          className="close"
          onClick={() => setIsMobileMenuShowed(!isMobileMenuShowed)}>
          <i className="fa fa-times" aria-hidden="true" />
        </div>
        <MenuList />
      </div>

      <div className="desktop-menu">
        <MenuList />
      </div>
    </nav>
  );
};

export default Menu;
