import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const InfoListItem = ({ title, image, subTitle, text }) => {
  return (
    <div className="col-md-4 card-container">
      <NavLink to="/compositions" className="info-card">
        <h2>{title}</h2>
        <div className="item">
          <div className="img-container">{image}</div>
          <div className="item-text">
            <h6>{subTitle}</h6>
            <p>{text}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

InfoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoListItem;
