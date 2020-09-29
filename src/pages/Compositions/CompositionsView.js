import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import TopSlider from '../../components/TopSlider';
import Menu from '../../components/Menu';
import InfoList from '../../components/InfoList';
import HistoryBlock from '../../components/HistoryBlock';
import RightInfoBlock from '../../components/RightInfoBlock';
import Footer from '../../components/Footer';
import {
  militaryEN,
  militaryUA,
  perfEN,
  perfUA,
} from '../../data/compositions';

const Compositions = () => {
  const { t } = useTranslation();
  const [military, setMilitary] = useState(militaryUA);
  const [perf, setPerf] = useState(perfUA);
  const { language } = i18next;

  useEffect(() => {
    document.title = t('Compositions.title');
  });
  useEffect(() => {
    if (language === 'en') {
      setMilitary(militaryEN);
      setPerf(perfEN);
    } else {
      setMilitary(militaryUA);
      setPerf(perfUA);
    }
  }, [language]);

  return (
    <main className="main">
      <TopSlider />
      <Menu />
      <div className="main__inner">
        <InfoList />
        <div className="secondary-bg">
          <div>
            <h2 className="medium-title center">
              {t('Compositions.marchingRepertoire')}
            </h2>
            <ul className="bold-list">
              {military.map((composition) => (
                <li key={composition}>{composition}</li>
              ))}
            </ul>
            <h2 className="medium-title center">
              {t('Compositions.repertoireOfSpeech')}
            </h2>
            <ul className="bold-list">
              {perf.map((composition) => (
                <li key={composition}>{composition}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <HistoryBlock />
          </div>
          <div className="col-md-5">
            <RightInfoBlock />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Compositions;
