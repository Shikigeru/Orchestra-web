import React from "react";
import Gallery from 'react-grid-gallery';

import Menu from '../../Menu';
import anniversaryData from './anniversaryData.js';

class Anniversary extends React.Component {
    render() {
        const {lang} = this.props;
        return (
            <div>
                <main>
                    <Menu lang={lang} />
                </main>
                <Gallery images={anniversaryData} enableImageSelection={false} />
            </div>
        )
    }
}

export default Anniversary;