import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.sass';


class Menu extends React.Component {
    state = {
        isMenuShowed: false,
    }
    toggleMenu = () => {
        this.setState({
            isMenuShowed: !this.state.isMenuShowed
        })
    }

    render() {
        const { lang } = this.props;
        return (
            <nav>
                <div className="mob-menu" onClick={this.toggleMenu}>
                    <button className="hamburger-button" >
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </button>
                    <p>{lang === 'us' ? 'Menu' : 'Меню'}</p>
                </div>
                <ul className={!this.state.isMenuShowed ? 'toggle-menu' : ''}>
                    <li>
                        <NavLink to='/' activeClassName="active" exact>
                            <i className="fa fa-home" aria-hidden="true"></i>
                            {lang === 'us' ? 'Main' : 'Головна'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/photos' activeClassName="active">
                            <i className="fa fa-file-image-o" aria-hidden="true"></i>
                            {lang === 'us' ? 'Photos' : 'Фото'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/videos' activeClassName="active">
                            <i className="fa fa-video-camera" aria-hidden="true"></i>
                            {lang === 'us' ? 'Video' : 'Відео'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName="active">
                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                            {lang === 'us' ? 'About' : 'Про нас'}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts' activeClassName="active">
                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                            {lang === 'us' ? 'Contacts' : 'Контакти'}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu;