import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.sass";

class MenuItems extends React.Component {
  render() {
    const { lang } = this.props;
    return (
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            <i className="fa fa-home" aria-hidden="true" />
            {lang === "us" ? "Main" : "Головна"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/photos" activeClassName="active">
            <i className="fa fa-file-image-o" aria-hidden="true" />
            {lang === "us" ? "Photos" : "Фото"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/videos" activeClassName="active">
            <i className="fa fa-video-camera" aria-hidden="true" />
            {lang === "us" ? "Video" : "Відео"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            <i className="fa fa-info-circle" aria-hidden="true" />
            {lang === "us" ? "About" : "Про нас"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName="active">
            <i className="fa fa-id-card-o" aria-hidden="true" />
            {lang === "us" ? "Contacts" : "Контакти"}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default MenuItems;
