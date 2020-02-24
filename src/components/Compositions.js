import React from 'react';

import TopSlider from './TopSlider';
import Menu from './Menu';
import InfoList from './InfoList';
import HistoryBlock from './HistoryBlock';
import RightInfoBlock from './RightInfoBlock';
import Footer from './Footer';




class Compositions extends React.Component {
    render() {
        const {lang} = this.props;
        const militaryUA = [
            'ГІМН', 
            'ЗУСТРІЧНИЙ МАРШ (ГРИБОЇДОВ)', 
            'ЗУСТРІЧНИЙ МАРШ (ПЕРЦЕВ)', 
            'МАРШ ПРЕОБРАЖЕНСЬКОГО ПОЛКА',
            '"СТЕПОМ, СТЕПОМ"',
            '"РЕВЕ ТА СТОГНЕ"',
            'МАРШ "СЛАВА ГЕРОЯМ"',
            'МАРШ "КРИЛА УКРАЇНИ"',
            'МАРШ "ВМС"',
            'МАРШ "КАЛИНА ПАМ’ЯТІ"',
            'МАРШ "КОЗАЦЬКА СЛАВА"',
            'МАРШ ЧЕРНІГІВСЬКОГО ПОЛКА"',
            'МАРШ "СПОГАД ПРО ПОЛКОВИЙ ОРКЕСТР"',
            'МАРШ "ПРОЩАНИЕ СЛАВЯНКИ"',
            'ФАНФАРА "ЗА УКРАЇНУ"',
            'ФАНФАРА "ЗАРАТУСТРА"',
            'ПОЛЬКА',
            'ТУШ',
            'ФАНФАРА "НЕЗАЛЕЖНІСТЬ"',
            'МАРШ "УКРАЇНСЬКИЙ МАРШ"',
            'МАРШ "ПРИКОРДОННИХ ВІЙСЬК"',
            'ДУХОВНИЙ ГІМН " БОЖЕ ВЕЛИКИЙ ЄДИНИЙ"' 
        ];

        const perfUA = [
            'М. ЛИСЕНКО "БОЖЕ ВЕЛИКИЙ ЄДИНИЙ"',
            'Д. ГУЛЯЄВ – МАРШ "ВОСПОМИНАНИЕ"',
            'О. БІЛАШ "ДВА КОЛЬОРИ", СОЛІСТ ДМИТРО ПОЛВАНЮК',
            'М. СКОРИК МЕЛОДІЯ ДО КІНОФІЛЬМУ "ВИСОКИЙ ПЕРЕВАЛ"',
            'М. ФРАДКІН "ПЕСНЯ О ДНЕПРЕ", СОЛІСТ ДМИТРО ПОЛВАНЮК',
            'Б. ОКУДЖАВА – МАРШ З КІНОФІЛЬМУ "БЕЛОРУССКИЙ ВОКЗАЛ", "НАМ НУЖНА ОДНА ПОБЕДА"',
            'М. ТАРАВЕРДИЕВ "МГНОВЕНИЕ", СОЛІСТ ІВАН БЕРІЗКА',
            'А. ПАХМУТОВА, Л. ЛЬВОВ "ПОКЛОНИМСЯ ВЕЛИКИМ ТЕМ ГОДАМ", СОЛІСТ ДМИТРО ПОЛВАНЮК',
            'О. МОРОЗОВ МАРШ "СЛАВА ГЕРОЯМ"',
            'А.БАЖЕНОВ "УКРАЇНСЬКЕ ДЕФІЛЕ - ФАНТАЗІЯ"',
            'О.КАБАЧЕНКО "МНОГАЯ ЛІТА"',
            'МАРШ "ЧЕРНІГІВСЬКОГО ПОЛКА"',
            'МАРШ "СПОГАД ПРО ПОЛКОВИЙ ОРКЕСТР"',
            'М.ТАРАВЕРДІЄВ "МГНОВЕНИЯ", СОЛІСТ ДМИТРО ПОЛВАНЮК',
            '"ОЙ ПРИ ЛУЖКУ, ПРИ ЛУЖКУ", МУЗИЧНА КАРТИНКА НА ТЕМУ УКРАЇНСЬКОЇ НАРОДНОЇ ПІСНІ',
            'МУЗ. А.ПАХМУТОВА, СЛ. М.ЛЬВОВА "ПОКЛОНИМСЯ ВЕЛИКИМ ТЕМ ГОДАМ", СОЛІСТ ДМИТРО ПОЛВАНЮК',
            'J.KERN "SMOKE", ВИКОНУЄ СОЛІСТКА ІРИНА ПОПУДРЕНКО',
            'DIZZY STROTFORD "MAXIMA"'
        ];
         
        const militaryEN = [
            'ANTHEM',
            'ONCOMING MARCH (GRIBOYEDOV)',
            'ONCOMING MARCH (PERTSEV)',
            'MARCH PREOBRAZHENSKY REGIMENT',
            '"STEPPE, STEPPE"',
            '"ROARS AND GROANS"',
            'MARCH "GLORY TO HEROES"',
            'MARCH "WINGS OF UKRAINE"',
            'MARCH "IUD"',
            'MARSH "KALINA MEMORY"',
            'MARSH "COSSACK GLORY"',
            'MARSH CHERNIGOV REGIMENT"',
            'MARCH "REMEMBERING THE REGIMENTAL BAND"',
            'MARCH "FAREWELL SLAVIANKA"',
            'FANFARE "FOR UKRAINE"',
            'FANFARE "ZARATHUSTRA"',
            'POLKA',
            'INDIAN INK',
            'FANFARE "INDEPENDENCE"',
            'MARCH "UKRAINIAN MARCH"',
            'MARCH "BORDER TROOPS"',
            'THE SPIRITUAL HYMN "GOD GREAT ONE"'
        ];
        const perfEN = [
            'M. LYSENKO "OH GREAT ONE"',
            'D. GULYAEV - MARCH "MEMOIRS"',
            'O. BILASH "TWO COLORS" SOLOIST DMITRY POLVANYUK',
            'M. SKORYK TUNE FOR THE FILM "HIGH PASS"',
            'M. FRADKIN "SONG OF THE DNIEPER," LEAD SINGER DMITRY POLVANYUK',
            'B. OKUDZHAVA - MARCH FROM THE MOVIE "BELORUSSKIJ STATION," "WE NEED A ONE VICTORY"',
            'M. TARIVERDIEV "MHNOVENYE" LEAD SINGER JOHN BIRCH',
            'A. PAKHMUTOVA, L. LVIV "POKLONYMSYA GREAT THEMES HODAM" SOLOIST DMITRY POLVANYUK',
            'MOROZOV MARCH "GLORY TO HEROES"',
            'A. BAZHENOV "UKRAINIAN FASHION SHOW - FANTASY"',
            'O. KABACHENKO "MANY YEARS"',
            'MARSH "CHERNIGOV REGIMENT"',
            'MARCH "REMEMBERING THE REGIMENTAL BAND"',
            'M. TARAVERDIYEV "MHNOVENYYA" SOLOIST DMITRY POLVANYUK',
            '"OH WHEN THE LAWN, THE LAWN" MUSICAL PICTURE ON UKRAINIAN FOLK SONG',
            'MUSIC. A.PAHMUTOVA, SL. LVIV "GREAT POKLONYMSYA TOPICS HODAM" SOLOIST DMITRY POLVANYUK',
            'J.KERN "SMOKE", PERFORMING SOLOIST IRINA POPUDRENKO',
            'DIZZY STROTFORD "MAXIMA"'
        ];
        return(
            <main>
                <TopSlider />
                <Menu lang={lang}/>
                <div className="main-inner">
                    <InfoList lang={lang} />    
                    <div className="secondary-bg">
                        {
                            lang === 'us' ?
                                <div>
                                    <h2 className="medium-title center">Official - marching repertoire</h2>
                                    <ul className="bold-list">
                                        {militaryEN.map((composition) => (
                                            <li key={Math.random() * 100000}>{composition}</li>
                                        ))}
                                    </ul>
                                    <h2 className="medium-title center">The repertoire of speech</h2>
                                    <ul className="bold-list">
                                        {perfEN.map((composition) => (
                                            <li key={Math.random() * 100000}>{composition}</li>
                                        ))}
                                    </ul>
                                </div>
                                :
                                <div>
                                    <h2 className="medium-title center">Службово - стройовий репертуар</h2>
                                    <ul className="bold-list">
                                        {militaryUA.map((composition) => (
                                            <li key={Math.random() * 100000}>{composition}</li>
                                        ))}
                                    </ul>
                                    <h2 className="medium-title center">Репертуар виступу</h2>
                                    <ul className="bold-list">
                                        {perfUA.map((composition) => (
                                            <li key={Math.random() * 100000}>{composition}</li>
                                        ))}
                                    </ul>
                                </div>
                        }
                    </div>
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
        )
    }
}

export default Compositions;