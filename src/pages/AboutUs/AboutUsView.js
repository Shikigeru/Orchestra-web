import React from 'react';
import PropTypes from 'prop-types';
import TopSlider from '../../components/TopSlider';
import Menu from '../../components/Menu';
import HistoryBlock from '../../components/HistoryBlock';
import RightInfoBlock from '../../components/RightInfoBlock';
import Footer from '../../components/Footer';

const AboutUsView = ({ lang, directionData, onBookClick }) => {
  return (
    <main className="main">
      <TopSlider />
      <Menu lang={lang} />
      <div className="main__inner about">
        <div className="book">
          <h2 className="medium-title">
            {lang === 'us'
              ? 'The book about military orchestra'
              : 'Книга про військовий оркестр'}
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
            {lang === 'us'
              ? 'The management of the orchestra'
              : 'Керівний склад оркестру'}
          </h2>
          {directionData.map((person) => (
            <div className="direction-person" key={person.id}>
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

AboutUsView.propTypes = {
  lang: PropTypes.string.isRequired,
  directionData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onBookClick: PropTypes.func.isRequired,
};

export default AboutUsView;
