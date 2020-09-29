import React from 'react';
import PropTypes from 'prop-types';
import TopSlider from '../../components/TopSlider';
import Menu from '../../components/Menu';
import InfoList from '../../components/InfoList';
import HistoryBlock from '../../components/HistoryBlock';
import RightInfoBlock from '../../components/RightInfoBlock';
import Footer from '../../components/Footer';

const VideosView = ({ lang, more, items, isEnabled, showMore, showLess }) => {
  return (
    <main className="main">
      <TopSlider />
      <Menu lang={lang} />
      <div className="main__inner">
        <InfoList lang={lang} />
        <div className="video-block secondary-bg">
          <h2 className="medium-title">
            {lang === 'us'
              ? 'Orchestra performances across Ukraine and abroad '
              : 'Виступи оркестру по всій Україні та далеко за її межами'}
          </h2>
          <div className="row">
            {items
              .map((video) => (
                <div className="col-md-6" key={video.id}>
                  <div className="responsive-iframe">
                    <iframe src={video.src} title={video.id} allowFullScreen />
                  </div>
                </div>
              ))
              .reverse()
              .slice(0, more)}
            <button
              type="button"
              onClick={() => showMore()}
              className={`prim-btn load-more ${!isEnabled && 'hidden'}`}>
              <i className="fa fa-arrow-circle-o-down" aria-hidden="true" />
              {lang === 'us' ? 'Load More' : 'Завантажити ще'}
            </button>
            <button
              type="button"
              onClick={() => showLess()}
              className={`prim-btn load-more ${isEnabled && 'hidden'}`}>
              <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />
              {lang === 'us' ? 'Hide' : 'Згорнути'}
            </button>
          </div>
        </div>

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

VideosView.propTypes = {
  lang: PropTypes.string.isRequired,
  more: PropTypes.number.isRequired,
  showMore: PropTypes.func.isRequired,
  showLess: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

VideosView.defaultProps = {
  items: [],
};

export default VideosView;
