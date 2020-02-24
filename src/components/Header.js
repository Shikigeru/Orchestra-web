import React from 'react';
import '../styles/Header.sass';

const Header = (props) => {
    const {lang} = props;
    const contentText = {
        headerText: (lang === 'us' ? 
                        'MILITARY BAND OF THE 8TH CHERNIHIV LEARNING CENTRE'
                        :
                        'ВІЙСЬКОВИЙ ОРКЕСТР 8-ГО НАВЧАЛЬНОГО ЧЕРНІГІВСЬКОГО ЦЕНТРУ'
                    ),
        subheadText: (lang === 'us' ?
                        'HEAD ORCHESTRA - CONDUCTOR COLONEL NIKOLAY SMAL'
                        :
                        'НАЧАЛЬНИК ОРКЕСТРУ - ВІЙСЬКОВИЙ ДИРИГЕНТ ПОЛКОВНИК МИКОЛА СМАЛЬ'
                     )
    }
    return (
        <header>
            <h1 className="logo-text">
                {contentText.headerText}
            </h1>
            <h3 className="logo-subtext">
                {contentText.subheadText}
            </h3>
        </header>
    )
}

export default Header;