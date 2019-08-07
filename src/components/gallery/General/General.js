import React from "react";
import Gallery from 'react-grid-gallery';
import { NavLink } from 'react-router-dom';


import Menu from '../../Menu';
import Footer from "../../Footer";

import generalData from './generalData.js';
import '../../../styles/Gallery.sass';

class General extends React.Component {
    render() {
        const {lang} = this.props;
        return (
            <div className="gallery">
                <main>
                    <Menu lang={lang}/>
                </main>
                <Gallery images={generalData} enableImageSelection={false} />
                <NavLink to="/photos" className="btn">Назад</NavLink>
                <Footer />
            </div>
        )
    }
}

export default General;