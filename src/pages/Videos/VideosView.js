import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import TopSlider from '../../components/TopSlider/TopSlider';
import Menu from '../../components/Menu/Menu';
import InfoList from '../../components/InfoList/InfoList';
import BottomInfoBlock from '../../components/BottomInfoBlock/BottomInfoBlock';
import Footer from '../../components/Footer/Footer';

const VideosView = ({ more, items, isEnabled, showMore, showLess }) => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('Videos.title');
  });
  return (
    <main className="main">
      <TopSlider />
      <Menu />
      <div className="main__inner">
        <InfoList />
        <div className="video-block secondary-bg">
          <h2 className="medium-title">{t('Videos.orchestraPerfomances')}</h2>
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
              {t('Videos.loadMore')}
            </button>
            <button
              type="button"
              onClick={() => showLess()}
              className={`prim-btn load-more ${isEnabled && 'hidden'}`}>
              <i className="fa fa-arrow-circle-o-up" aria-hidden="true" />
              {t('Videos.hide')}
            </button>
          </div>
        </div>
        <BottomInfoBlock />
      </div>
      <Footer />
    </main>
  );
};

VideosView.propTypes = {
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
