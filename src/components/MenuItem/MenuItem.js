import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ link, icon, title }) => {
  return (
    <NavLink to={link} activeClassName="active" exact>
      {icon}
      {title}
    </NavLink>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
