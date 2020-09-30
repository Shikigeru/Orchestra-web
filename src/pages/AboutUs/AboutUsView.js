import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { directionData, directionDataUS } from '../../data/directionData';
import MainLayout from '../../layouts/MainLayout';

const AboutUsView = ({ onBookClick }) => {
  const { t } = useTranslation();
  const { language } = i18next;
  const [direction, setDirection] = useState(directionData);
  useEffect(() => {
    document.title = t('AboutUs.title');
  });
  useEffect(() => {
    if (language === 'en') {
      setDirection(directionDataUS);
    } else {
      setDirection(directionData);
    }
  }, [language]);
  return (
    <MainLayout>
      <div className="main__inner about">
        <div className="book">
          <h2 className="medium-title">
            {t('AboutUs.bookAboutMilitaryOrchestra')}
          </h2>
          <img
            src="/images/book.gif"
            alt="book-img"
            className="book"
            onClick={() => onBookClick()}
          />
        </div>
        <div className="secondary-bg">
          <h2 className="medium-title">
            {t('AboutUs.managementOfTheOrchestra')}
          </h2>
          {direction.map((person) => (
            <div className="direction-person" key={person.name}>
              <img src={person.picture} alt="dir-1" className="direction-img" />
              <div className="direction-text">
                <p>{person.post}</p>
                <p>{person.rank}</p>
                <p>{person.name}</p>
                <p>Тел.: {person.tel}</p>
                <p>{person.email && `e-mail: ${person.email}`}</p>
              </div>
            </div>
          ))}
        </div>
        <iframe
          src="https://e.issuu.com/anonymous-embed.html?u=orkestrdsst&d=__________________"
          style={{ border: 'none', width: '100%', height: 500 }}
          id="book"
          title="book"
        />
      </div>
    </MainLayout>
  );
};

AboutUsView.propTypes = {
  onBookClick: PropTypes.func.isRequired,
};

export default AboutUsView;
