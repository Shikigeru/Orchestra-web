import React from 'react';
import '../styles/Header.sass';

const Header = (props) => {
    const {lang} = props;
    return (
        <header>
            <h1 className="logo-text">
                {lang === 'us' ? 
                    'MILITARY BAND OF 8TH CHERNIHIV TRAINING CENTRE'
                    :
                    'ВІЙСЬКОВИЙ ОРКЕСТР 8-ГО НАВЧАЛЬНОГО ЧЕРНІГІВСЬКОГО ЦЕНТРУ'
                }
            </h1>
            <h3 className="logo-subtext">
                {lang === 'us' ?
                    'HEAD ORCHESTRA - CONDUCTOR COLONEL NIKOLAY SMAL'
                    :
                    'НАЧАЛЬНИК ОРКЕСТРУ - ВІЙСЬКОВИЙ ДИРИГЕНТ ПОЛКОВНИК МИКОЛА СМАЛЬ'
                }
            </h3>
        </header>
    )
}

export default Header;