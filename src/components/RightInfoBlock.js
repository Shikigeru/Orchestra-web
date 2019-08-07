import React from 'react';

import '../styles/RightInfoBlock.sass';

const RightInfoBlock = (props) => {
    const {lang} = props;
    if (lang === 'us') {
        return (
            <div className="right-info">
                <a href="#/blog/5" className="main-link">
                    <h2 className="medium-title">Carnabands Show 2019</h2>
                    <img src="/images/carnabands.jpg" alt="carnabands" />
                </a>  
                <p>
                    February 23, 24, 2019 the orchestra of the 8th Chernihiv Training Center of the State Special Service of the Ministry of Defense of Ukraine participated in the 99th international festival "Carnaband's Show 2019" in the city of Chalon-sur-Seine, Republic of France.
                </p>
                <a href="#/blog/5" className="main-link">READ MORE</a>
            </div>
        )
    }
    return (
        <div className="right-info">
            <a href="#/blog/5" className="main-link">
                <h2 className="medium-title">Carnabands Show 2019</h2>
                <img src="/images/carnabands.jpg" alt="carnabands"/>
            </a>            
            <p>
                23, 24 лютого 2019 року оркестр 8-го Чернігівського навчального центру державної спеціальної служби Міністерства оборони України приймав участь в 99 міжнародному фестивалі «Carnaband’s
                Show 2019» в місті Шалон Сюр-Сон республіки Франція.
            </p>
            <a href="#/blog/5" className="main-link">Детальніше</a>
        </div>
    )
}

export default RightInfoBlock;