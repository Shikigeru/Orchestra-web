import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import TopSlider from '../../components/TopSlider/TopSlider';
import Menu from '../../components/Menu/Menu';
import InfoList from '../../components/InfoList/InfoList';
import BottomInfoBlock from '../../components/BottomInfoBlock/BottomInfoBlock';
import Footer from '../../components/Footer/Footer';

const PhotosView = ({ sliderSettings }) => {
  return (
    <main className="main">
      <TopSlider />
      <Menu />
      <div className="main__inner">
        <InfoList />
        <Slider {...sliderSettings} className="main__slider">
          <div>
            <a href="https://photos.app.goo.gl/jBGqw63gtwLwRpzt9">
              <img src="/images/gallery/image2.jpg" alt="mp" />
            </a>
          </div>
          <div>
            <a href="https://photos.app.goo.gl/bNsuDjpNA5DmdjAu5">
              <img src="/images/gallery/image3.jpg" alt="mp" />
            </a>
          </div>
          <div>
            <a href="https://photos.app.goo.gl/82C22HfRNyrKLM4o8">
              <img src="/images/gallery/image1.jpg" alt="mp" />
            </a>
          </div>
        </Slider>
        <BottomInfoBlock />
      </div>
      <Footer />
    </main>
  );
};

PhotosView.propTypes = {
  sliderSettings: PropTypes.shape({}).isRequired,
};

export default PhotosView;
