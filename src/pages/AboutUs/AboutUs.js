import React from 'react';
import PropTypes from 'prop-types';
import AboutUsView from './AboutUsView';

import '../../styles/AboutUS.sass';

import directionData from '../../data/directionData';
import directionDataUS from '../../data/directionDataUS';

class AboutUs extends React.Component {
  componentDidMount() {
    document.title = 'Про нас';
  }

  bookLink = () => {
    document.getElementById('book').scrollIntoView();
  };

  render() {
    const { lang } = this.props;
    return (
      <AboutUsView
        lang={lang}
        directionData={lang === 'us' ? directionDataUS : directionData}
        onBookClick={this.bookLink}
      />
    );
  }
}

AboutUs.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default AboutUs;
