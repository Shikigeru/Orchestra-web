import React from 'react';

import '../styles/HistoryBlock.sass';

const HistoryBlock = (props) => {
    const {lang} = props;
    if (lang === 'us') {
        return (
            <div className="history-block">
                <h2 className="medium-title">Interesting and rich history</h2>
                <p><strong>The history of Military orchestra of the 8th Chernihiv training centre began in 1950.</strong></p>
                <p>It is one of the best creative teams of Ukraine. Its official concert activity and actively promotes military, moral and cultural - aesthetic education personnel of the State Special Transport service. Since 2004, a military orchestra 8th Chernihiv training centre managed by Head orchestra - the military conductor colonel Nikolay Smal.</p>
                <p>Thanks to the hard work of military musicians creative team is a laureate of Ukrainian Festival Competition "Morchyn gathers friends" and awarded diplomas and degrees. A military band is well known in the CIS countries and the European Union, where musicians adequately represented the art of our country. In 2014 a military band 8th Chernihiv training centre was awarded the Cup - "The best military band Musikparade 2014 ".</p>
                <p><u>The main goal of our team is spread Ukrainian art, wide popularization of the creative achievements of Ukrainian people.</u></p>
            </div>
        )
    }
    return (
        <div className="history-block">
            <h2 className="medium-title">Цікава та багата історія</h2>
            <p><strong>Військовий оркестр 8-го Чернігівського навчального центру розпочав свою творчу біографію у 1950 році.</strong></p>
            <p>З початку свого існування і по теперішній час колектив є одним з найкращих творчих колективів України. Його службова і концертна діяльність активно сприяє військовому, моральному і культурно - естетичному вихованню особового складу Державної Спеціальної Служби Транспорту. Починаючи з 2004 року військовим оркестром 8-го Чернігівського навчального центру керує начальник оркестру – військовий диригент полковник Микола Смаль.</p>
            <p>Завдяки наполегливій праці військових музикантів творчий колектив являється Лауреатом Всеукраїнського фестивалю-конкурсу «Моршин збирає друзів» та нагороджений дипломом І ступеню. Військовий оркестр добре знають в країнах СНД, в країнах Європейського Союзу, де музиканти гідно представляли мистецтво нашої держави. У 2014 військовий оркестр 8-го Чернігівського навчального центру було нагороджено кубком – «Найкращий військовий оркестр «Musikparade 2014».</p>
            <p><u>Головною метою нашого колективу є поширення українського мистецтва, широка популяризація творчих здобутків українського народу.</u></p>
        </div>
    )
}

export default HistoryBlock;