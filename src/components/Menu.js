import React from 'react';

import MenuItems from './MenuItems';
import '../styles/Menu.sass';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuShowed: false,
    };
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => {
      return {
        isMobileMenuShowed: !prevState.isMobileMenuShowed,
      };
    });
  };

  render() {
    const { lang } = this.props;
    const { isMobileMenuShowed } = this.state;
    return (
      <nav>
        <div className="mob-menu" onClick={this.toggleMobileMenu}>
          <button className="hamburger-button">
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
          <p>{lang === 'us' ? 'Menu' : 'Меню'}</p>
        </div>
        <div
          className={isMobileMenuShowed ? 'mobile-menu opened' : 'mobile-menu'}>
          <div className="close" onClick={this.toggleMobileMenu}>
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <MenuItems lang={lang} />
        </div>

        <div className="desktop-menu">
          <MenuItems lang={lang} />
        </div>
      </nav>
    );
  }
}

export default Menu;
