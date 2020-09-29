import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import TopSlider from '../../components/TopSlider';
import Menu from '../../components/Menu/Menu';
import BottomInfoBlock from '../../components/BottomInfoBlock/BottomInfoBlock';
import Footer from '../../components/Footer/Footer';

const ContactsView = () => {
  const { t } = useTranslation();
  const mapLink =
    'https://www.google.com/maps/' +
    'embed?pb=!1m18!1m12!1m3!1d2484.' +
    '085041871786!2d31.279053115769383!' +
    '3d51.493306879632804!2m3!1f0!2f0!3f' +
    '0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x' +
    '46d5489151174ba9%3A0x4bd345848d56e76' +
    '1!2z0YPQuy4g0JjQstCw0L3QsCDQnNCw0Lf' +
    'QtdC_0YssIDE4LCDQp9C10YDQvdC40LPQv' +
    'tCyLCDQp9C10YDQvdC40LPQvtCy0YHQutCw' +
    '0Y8g0L7QsdC70LDRgdGC0YwsIDE0MDM5!5e0!' +
    '3m2!1sru!2sua!4v1553866863930!5m2!1sru!2sua';

  useEffect(() => {
    document.title = t('Contacts.title');
  });

  return (
    <main className="main">
      <TopSlider />
      <Menu />
      <div className="main__inner">
        <div className="contacts">
          <div className="dsst-logo">
            <h2 className="medium-title">{t('Contacts.serviceName')}</h2>
            <img src="/images/DSST.png" alt="dsst" />
          </div>
          <div className="contacts__info secondary-bg">
            <h2 className="medium-title">{t('Contacts.contacts')}</h2>
            <div className="row">
              <div className="col-md-8 cont-col">
                <div className="contacts__info__item">
                  <div className="icon-holder">
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                  </div>
                  {`${t('Contacts.postalCode')}: 14017`}
                </div>
                <div className="contacts__info__item">
                  <div className="icon-holder">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                  </div>
                  {t('Contacts.address')}
                </div>
                <div className="contacts__info__item">
                  <div className="icon-holder">
                    <i className="fa fa-phone" aria-hidden="true" />
                  </div>
                  {`${t('Contacts.phone')}: +38 (0462) 67-70-22`}
                </div>
                <div className="contacts__info__item">
                  <div className="icon-holder">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </div>
                  <a href="mailto:orkestr_dsst@i.ua" className="main-link">
                    &nbsp;{`${t('Contacts.email')}: orkestr_dsst@i.ua`}
                  </a>
                </div>
                <h2 className="medium-title">{t('Contacts.socialMedia')}</h2>
                <div className="social__media">
                  <a href="https://www.facebook.com/ChernihivMilitaryOrchestra">
                    <div className="icon-holder">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UC0m-g6stcTCVynYL6T4IDsQ">
                    <div className="icon-holder">
                      <i className="fa fa-youtube-play" aria-hidden="true" />
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="orch-logo">
                  <img src="/images/orchestra-logo.png" alt="orch-logo" />
                </div>
              </div>
              <div className="col-md-12">
                <h2 className="medium-title coords">
                  {t('Contacts.coordinates')}
                </h2>
                <iframe
                  className="map"
                  src={mapLink}
                  width="100%"
                  height="450"
                  title="map"
                />
              </div>
            </div>
          </div>
        </div>
        <BottomInfoBlock />
      </div>
      <Footer />
    </main>
  );
};

export default ContactsView;
