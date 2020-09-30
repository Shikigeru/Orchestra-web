import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import {
  militaryEN,
  militaryUA,
  perfEN,
  perfUA,
} from '../../data/compositions';
import MainLayout from '../../layouts/MainLayout';

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
    <MainLayout>
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
    </MainLayout>
  );
};

export default Compositions;
