import React from 'react';

import '../styles/AboutUS.sass'

import TopSlider from './TopSlider';
import Menu from './Menu';
import HistoryBlock from './HistoryBlock';
import RightInfoBlock from './RightInfoBlock';
import Footer from './Footer';

import directionData from './data/directionData';
import directionDataUS from './data/directionDataUS';

class AboutUS extends React.Component {
    componentDidMount() {
        document.title = 'Про нас';
    }

    bookLink = () => {
        document.getElementById('book').scrollIntoView(); 
    }

    render() {
        const {lang} = this.props;
        if (lang === 'us') {
            return (
                <main>
                    <TopSlider />
                    <Menu lang={lang}/>
                    <div className="main-inner about">
                        <div className="book">
                            <h2 className="medium-title">The book about military orchestra</h2>
                            <img src="/images/book.gif" alt="book-img" className="book" onClick={this.bookLink}/>
                        </div>
                        <div className="secondary-bg">
                            <h2 className="medium-title">The management of the orchestra</h2>
                            
                                {
                                    directionDataUS.map((personData) => (
                                        <div className="direction-person" key={personData.id}>
                                            <img src={personData.picture} alt="dir-1" className="direction-img"/>
                                            <div className="direction-text">
                                                <p>{personData.post}</p>
                                                <p>{personData.rank}</p>
                                                <p>{personData.name}</p>
                                                <p>Phone: {personData.tel}</p>
                                                <p>{personData.email && 'e-mail: ' +personData.email}</p>
                                            </div>
                                        </div>    
                                    ))
                                }
                        </div>
                        <iframe src="https://e.issuu.com/anonymous-embed.html?u=orkestrdsst&d=__________________" style={{border: 'none', width: '100%', height: 500}} id="book" title="book"></iframe>
    
                        <div className="row">
                            <div className="col-md-7">
                                <HistoryBlock lang={lang}/>
                            </div>
                            <div className="col-md-5">
                                <RightInfoBlock lang={lang}/>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            )
        }
        return (
            <main>
                <TopSlider />
                <Menu />
                <div className="main-inner about">
                    <div className="book">
                        <h2 className="medium-title">Книга про військовий оркестр</h2>
                        <img src="/images/book.gif" alt="book-img" className="book" onClick={this.bookLink}/>
                    </div>
                    <div className="secondary-bg">
                        <h2 className="medium-title">Керівний склад оркестру</h2>
                        
                            {
                                directionData.map((personData) => (
                                    <div className="direction-person" key={personData.id}>
                                        <img src={personData.picture} alt="dir-1" className="direction-img"/>
                                        <div className="direction-text">
                                            <p>{personData.post}</p>
                                            <p>{personData.rank}</p>
                                            <p>{personData.name}</p>
                                            <p>Тел.: {personData.tel}</p>
                                            <p>{personData.email && 'e-mail: ' +personData.email}</p>
                                        </div>
                                    </div>    
                                ))
                            }
                    </div>
                    <iframe src="https://e.issuu.com/anonymous-embed.html?u=orkestrdsst&d=__________________" style={{border: 'none', width: '100%', height: 500}} id="book" title="book"></iframe>

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
        )
    }
}

export default AboutUS;