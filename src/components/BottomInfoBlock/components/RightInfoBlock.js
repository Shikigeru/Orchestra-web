import React from 'react';
import { useTranslation } from 'react-i18next';

import '../../../styles/RightInfoBlock.sass';

const RightInfoBlock = () => {
  const { t } = useTranslation();
  return (
    <div className="right-info">
      <a href="#/blog/5" className="main-link">
        <h2 className="medium-title">{t('RightInfoBlock.title')}</h2>
        <img src="/images/carnabands.jpg" alt="carnabands" />
      </a>
      <p>{t('RightInfoBlock.text')}</p>
      <a href="#/blog/5" className="main-link">
        {t('RightInfoBlock.readMore')}
      </a>
    </div>
  );
};

export default RightInfoBlock;
