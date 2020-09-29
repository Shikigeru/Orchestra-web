import React from 'react';
import { useTranslation } from 'react-i18next';

import '../../../styles/HistoryBlock.sass';

const LeftInfoBlock = () => {
  const { t } = useTranslation();
  return (
    <div className="history-block">
      <h2 className="medium-title">{t('LeftInfoBlock.title').toUpperCase()}</h2>
      <p>
        <strong>{t('LeftInfoBlock.boldText')}</strong> <br />
        {t('LeftInfoBlock.plainText')}
        <br />
        <u>{t('LeftInfoBlock.underlineText')}</u>
      </p>
    </div>
  );
};

export default LeftInfoBlock;
