import React from 'react';

import MenuItems from './MenuItems';
import '../styles/Menu.sass';


class Menu extends React.Component {
    state = {
        isMobileMenuShowed: false
    }

    toggleMobileMenu = () => {
        this.setState({
            isMobileMenuShowed: !this.state.isMobileMenuShowed
        })
    }

    render() {
        const { lang } = this.props;
        return (
            <nav>
                <div className="mob-menu" onClick={this.toggleMobileMenu}>
                    <button className="hamburger-button" >
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <p>{lang === 'us' ? 'Menu' : 'Меню'}</p>
                </div>
                <div className={this.state.isMobileMenuShowed ? 'mobile-menu opened' : 'mobile-menu'}>
                    <div className="close" onClick={this.toggleMobileMenu}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <MenuItems lang={lang} />
                </div>

                <div className="desktop-menu">
                    <MenuItems lang={lang}/>
                </div>
            </nav>
        )
    }
}

export default Menu;