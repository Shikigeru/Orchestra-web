import React from 'react';

import TopSlider from './TopSlider';
import Menu from './Menu';
import HistoryBlock from './HistoryBlock';
import RightInfoBlock from './RightInfoBlock';
import Footer from './Footer';

import '../styles/Contacts.sass'

class Contacts extends React.Component {
    componentDidMount() {
        document.title = 'Контакти'
    }
    render() {
        const {lang} = this.props;
        const contentText = {
            serviceName: lang === 'us' ? 'State special transport service' : 'Державна спеціальна служба транспорту',
            contacts: lang === 'us' ? 'Contacts' : 'Контактна інформація',
            postCode: (lang === 'us' ? 'Postal Code:' : 'Поштовий індекс:') + ' 14017',
            address: (lang === 'us' ? 
                        'Address: Ukraine, Chernihiv city, Ivana Mazepy Street 18' 
                        : 
                        'Адреса: Україна, місто Чернігів, вулиця Івана Мазепи 18'
                    ),
            phone: (lang === 'us' ? 'Phone: ' : 'Телефон: ') + '+38 (0462) 67-70-22',
            email: 'Email: orkestr_dsst@i.ua',
            socialMedia: lang === 'us' ? 'Follow us on social media' : 'Ми у соцмережах',
            coords: lang === 'us' ? 'Coordinates:' : 'Наші координати:'
        }
        return(
            <main>
                <TopSlider />
                <Menu lang={lang}/>
                <div className="main-inner">
                    <div className="contacts">
                        <div className="dsst-logo">
                            <h2 className="medium-title">
                                {contentText.serviceName}
                            </h2>
                            <img src="/images/DSST.png" alt="dsst" />
                        </div>
                        <div className="contacts-info secondary-bg">
                            <h2 className="medium-title">
                                {contentText.contacts}
                            </h2>
                            <div className="row">
                                <div className="col-md-8 cont-col">
                                    <p>
                                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                        {contentText.postCode}
                                    </p>
                                    <p>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        {contentText.address}
                                    </p>
                                    <p>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        {contentText.phone}
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        {contentText.email}
                                    </p>
                                    <h2 className="medium-title">
                                        {contentText.socialMedia}
                                    </h2>
                                    <div className="social-media-info">
                                        <a href="https://www.facebook.com/ChernihivMilitaryOrchestra" className="facebook-social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="https://www.youtube.com/channel/UC0m-g6stcTCVynYL6T4IDsQ" className="youtube-social"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="orch-logo">
                                        <img src="/images/orchestra-logo.png" alt="orch-logo" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h2 className="medium-title coords">
                                        {contentText.coords}
                                    </h2>
                                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.085041871786!2d31.279053115769383!3d51.493306879632804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5489151174ba9%3A0x4bd345848d56e761!2z0YPQuy4g0JjQstCw0L3QsCDQnNCw0LfQtdC_0YssIDE4LCDQp9C10YDQvdC40LPQvtCyLCDQp9C10YDQvdC40LPQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDE0MDM5!5e0!3m2!1sru!2sua!4v1553866863930!5m2!1sru!2sua" width="100%" height="450" title="map"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
    
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
}

export default Contacts;