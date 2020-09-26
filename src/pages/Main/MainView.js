import React from 'react';
import PropTypes from 'prop-types';

import TopSlider from '../../components/TopSlider';
import Menu from '../../components/Menu';
import InfoList from '../../components/InfoList';
import InnerSlider from '../../components/InnerSlider';
import HistoryBlock from '../../components/HistoryBlock';
import RightInfoBlock from '../../components/RightInfoBlock';
import Footer from '../../components/Footer';

const MainView = ({ lang }) => {
  return (
    <main className="main">
      <TopSlider />
      <Menu lang={lang} />
      <div className="main__inner">
        <InfoList lang={lang} />
        <InnerSlider />
        {lang === 'us' ? (
          <div className="main__text">
            <p>
              Without exaggeration, it is safe to call our military orchestra of
              the 8th Chernihiv Learning Center a calling card of the State
              Special Transport Service.
            </p>
            <p>
              Military orchestra started his creative biography from the first
              days of the existence of military base. Born in 1950, the team
              began a great creative career, honorably fulfilling the
              responsible tasks of cultural service and aesthetic education of
              servicemen.
            </p>
            <p>
              Since the beginning of the formation and for today, the orchestra
              has led by 8 military conductors. The creative team are well known
              not only in Chernihiv, but also far beyond its borders. Almost all
              state events and military ceremonies of our state do not pass
              without bright performances of our collective. With its highly
              artistic inputs to the Ukrainian audience, as well as on the
              scenes of the states of the world, the collective gained
              recognition of the demanding audience of the international
              community.
            </p>
          </div>
        ) : (
          <div className="main__text">
            <p>
              Без перебільшення можна сміливо назвати наш військовий оркестр
              8-го навчального Чернігівського центру візитною карткою Державної
              спеціальної служби транспорту.
            </p>
            <p>
              З перших днів існування частини започаткував свою творчу біографію
              і військовий оркестр. Народжений в 1950 році колектив почав
              великий творчий шлях, з честю виконуючи відповідальні завдання
              культурного обслуговування та естетичного виховання
              військовослужбовців.
            </p>
            <p>
              З початку формування і по сьогоднішній день оркестром керувало 8
              військових диригентів. Творчий колектив добре знаний не лише в
              Чернігові, а й далеко за його межами. Майже всі урочисті заходи та
              військові церемоніали нашої Держави не проходять без яскравих
              виступів нашого колективу. Своїми високохудожніми вступами перед
              українським глядачем, а також на сценах держав світу, колектив
              здобув визнання вимогливих глядачів міжнародного співтовариства.
            </p>
          </div>
        )}
        <div className="row">
          <div className="col-md-7">
            <HistoryBlock lang={lang} />
          </div>
          <div className="col-md-5">
            <RightInfoBlock lang={lang} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

MainView.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default MainView;
