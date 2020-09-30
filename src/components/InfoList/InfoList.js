import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoListItem from './components/InfoListItem';
import '../../styles/InfoList.sass';

const InfoList = () => {
  const { t } = useTranslation();
  return (
    <div className="info-list">
      <div className="row">
        <InfoListItem
          title={t('InfoList.repertoire')}
          image={<img src="/images/info-list/repertoire.png" alt="sax" />}
          subTitle={t('InfoList.listOfSongs')}
          text={t('InfoList.fromClassicToContemporary')}
          link="/compositions"
        />
        <InfoListItem
          title={t('InfoList.news')}
          image={<img src="/images/info-list/news.png" alt="clock" />}
          subTitle={t('InfoList.liveOrchestra')}
          text={t('InfoList.thingsToTravel')}
          link="/blog"
        />
        <InfoListItem
          title={t('InfoList.questions')}
          image={<img src="/images/info-list/question.png" alt="ask" />}
          subTitle={t('InfoList.contactUs')}
          text="e-mail: orkestr_dsst@i.ua"
          link="/contacts"
        />
      </div>
    </div>
  );
};

export default InfoList;
