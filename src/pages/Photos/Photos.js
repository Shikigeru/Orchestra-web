import React from 'react';

import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import PhotosView from './PhotosView';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docWidth: '',
    };
  }

  componentDidMount() {
    this.setState({
      docWidth: document.documentElement.clientWidth,
    });
  }

  render() {
    const { docWidth } = this.state;
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    if (docWidth < 776) {
      settings.slidesToShow = 1;
    }
    return <PhotosView sliderSettings={settings} />;
  }
}

export default Photos;
