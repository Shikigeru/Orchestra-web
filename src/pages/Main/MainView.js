import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../../layouts/MainLayout';
import InnerSlider from '../../components/InnerSlider/InnerSlider';

const MainView = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('Main.title');
  });
  return (
    <MainLayout>
      <InnerSlider />
      <div className="main__text">
        <p>{t('Main.descriptionFirstParagraph')}</p>
        <p>{t('Main.descriptionSecondParagraph')}</p>
        <p>{t('Main.descriptionThirdParagraph')}</p>
      </div>
    </MainLayout>
  );
};

export default MainView;
