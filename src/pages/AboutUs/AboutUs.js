import React from 'react';
import AboutUsView from './AboutUsView';

import '../../styles/AboutUS.sass';

class AboutUs extends React.Component {
  bookLink = () => {
    document.getElementById('book').scrollIntoView();
  };

  render() {
    return <AboutUsView onBookClick={this.bookLink} />;
  }
}

export default AboutUs;
