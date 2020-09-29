import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import TopSlider from '../../components/TopSlider';
import Menu from '../../components/Menu/Menu';
import InfoList from '../../components/InfoList';
import InnerSlider from '../../components/InnerSlider/InnerSlider';
import BottomInfoBlock from '../../components/BottomInfoBlock/BottomInfoBlock';
import Footer from '../../components/Footer/Footer';

const MainView = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('Main.title');
  });
  return (
    <main className="main">
      <TopSlider />
      <Menu />
      <div className="main__inner">
        <InfoList />
        <InnerSlider />
        <div className="main__text">
          <p>{t('Main.descriptionFirstParagraph')}</p>
          <p>{t('Main.descriptionSecondParagraph')}</p>
          <p>{t('Main.descriptionThirdParagraph')}</p>
        </div>
        <BottomInfoBlock />
      </div>
      <Footer />
    </main>
  );
};

export default MainView;
