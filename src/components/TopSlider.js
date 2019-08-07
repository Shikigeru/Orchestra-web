import React from 'react';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import "../styles/TopSlider.sass";

class TopSlider extends React.Component {
    state = {
        screenWidth: ''
    }
    componentDidMount() {
        this.setState({
            screenWidth: document.documentElement.clientWidth
        })
        
    }
    render() {
        const {screenWidth} = this.state;
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true
        };
        return (
            <div className="top-slider">
                <div className={screenWidth <= 925 ? 'lira hidden' : 'lira'}>
                    <img src="/images/lira/1.png" alt="1" />
                    <img src="/images/lira/2.gif" alt="2" />
                    <img src="/images/lira/3.png" alt="3" />
                </div>
                <Slider {...settings}>
                    <div>
                        <img src="/images/slider-images/header1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/slider-images/header2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/slider-images/header3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/images/slider-images/header4.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        )
    }
}

export default TopSlider;