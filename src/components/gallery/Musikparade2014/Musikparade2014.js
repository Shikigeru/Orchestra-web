import React from "react";
import Gallery from 'react-grid-gallery';

import Menu from '../../Menu';
import musikparade2014Data from './musikparade2014Data';

class Musikparade extends React.Component {
    render() {
        const {lang} = this.props;

        if (lang === 'us') {
            return (
                <div>
                    <main>
                        <Menu lang={lang}/>
                    </main>
                    <Gallery images={musikparade2014Data} enableImageSelection={false} />
                </div>
            )
        }
        return (
            <div>
                <main>
                    <Menu lang={lang}/>
                </main>
                <Gallery images={musikparade2014Data} enableImageSelection={false} />
            </div>
        )
    }
}

export default Musikparade;