import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/InfoList.sass';


class InfoList extends React.Component {
    render() {
        const { lang } = this.props;
        return (
            <div className="info-list">
                <div className="row">
                    <div className="col-md-4 .col-sm-12 item-container">
                        <NavLink to='/compositions'>
                            <h2>
                                {lang === 'us' ? 'Repertoire of orchestra' : 'Репертуар оркестру'}
                            </h2>
                            <div className="item">
                                <img src="/images/info-list/img1-sax.png" alt="sax" />
                                <div className="item-text">
                                    <span>
                                        {lang === 'us' ? 
                                            'List of songs and musical works performed by orchestra' 
                                            : 
                                            'Список композицій та музикальних творів які виконує оркестр'
                                        }
                                    </span>
                                    <p>
                                        {lang === 'us' ?
                                            'From classic to contemporary'
                                            :
                                            'Від класики до сучасності'
                                        }
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-md-4 .col-sm-12 item-container">
                        <NavLink to='/blog'>
                            <h2>
                                {lang === 'us' ? 'News' : 'Новини'}
                            </h2>
                            <div className="item">
                                <img src="/images/info-list/img2.png" alt="clock" />
                                <div className="item-text">
                                    <span>
                                        {lang === 'us' ? 
                                            'What Chernihiv live orchestra SSTS' 
                                            : 
                                            'Чим живе Чернігівський оркестр ДССТ'
                                        }
                                    </span>
                                    <p>
                                        {lang === 'us' ? 
                                            'Things to travel, enchanting tour and more' 
                                            : 
                                            'Визначні поїздки, феєричні турне та багато іншого'
                                        }
                                    </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-md-4 .col-sm-12 item-container">
                        <NavLink to="/contacts">
                            <h2>
                                {lang === 'us' ? 'Questions?' : 'Запитання?'}
                            </h2>
                            <div className="item">
                                <img src="/images/info-list/img3.png" alt="ask" />
                                <div className="item-text">
                                    <span>
                                        {lang === 'us' ? 
                                            'If you do not find the information contact us' 
                                            : 
                                            'Якщо ви не знайшли потрібну Вам інформацію звертайтесь до нас'
                                        }
                                    </span>
                                    <p>e-mail: orkestr_dsst@i.ua</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoList;