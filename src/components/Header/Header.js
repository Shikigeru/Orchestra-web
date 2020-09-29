import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/Header.sass';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <h1 className="logo-text">{t('Header.title').toUpperCase()}</h1>
      <h3 className="logo-subtext">
        {t('Header.headOfOrchestra').toUpperCase()}
      </h3>
    </header>
  );
};

export default Header;
