import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import MainLayout from '../../layouts/MainLayout';

const PhotosView = ({ sliderSettings }) => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

PhotosView.propTypes = {
  sliderSettings: PropTypes.shape({}).isRequired,
};

export default PhotosView;
