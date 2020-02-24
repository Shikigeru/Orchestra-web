import React from 'react';
import '../styles/Footer.sass'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year}</p>
            <p>Provided by Orkestr SSTS</p>
            <div className="footer-social">
                <a href="https://www.facebook.com/ChernihivMilitaryOrchestra">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
                <a href="https://www.youtube.com/channel/UC0m-g6stcTCVynYL6T4IDsQ">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;