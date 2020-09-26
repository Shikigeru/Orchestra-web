import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import TopSlider from '../../components/TopSlider';
import Menu from '../../components/Menu';
import InfoList from '../../components/InfoList';
import HistoryBlock from '../../components/HistoryBlock';
import RightInfoBlock from '../../components/RightInfoBlock';
import Footer from '../../components/Footer';

const PhotosView = ({ lang, sliderSettings }) => {
  return (
    <main className="main">
      <TopSlider />
      <Menu lang={lang} />
      <div className="main__inner">
        <InfoList lang={lang} />
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
        <div className="row">
          <div className="col-md-7">
            <HistoryBlock lang={lang} />
          </div>
          <div className="col-md-5">
            <RightInfoBlock lang={lang} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

PhotosView.propTypes = {
  lang: PropTypes.string.isRequired,
  sliderSettings: PropTypes.shape({}).isRequired,
};

export default PhotosView;
