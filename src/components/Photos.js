import React from 'react';
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";


import TopSlider from './TopSlider';
import Menu from './Menu';
import InfoList from './InfoList';
import HistoryBlock from './HistoryBlock';
import RightInfoBlock from './RightInfoBlock';
import Footer from './Footer';

class Photos extends React.Component {
    state = {
        docWidth: ''
    }
    componentDidMount() {
        document.title = 'Фото';
        this.setState({
            docWidth: document.documentElement.clientWidth
        })
    }
    render() {
        
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        if (this.state.docWidth < 776) {
            settings.slidesToShow = 1 
        }
        const { lang } = this.props;
        return (
            <main className="main">
                <TopSlider />
                <Menu lang={lang} />
                <div className="main__inner">
                    <InfoList lang={lang} />
                    <Slider {...settings} className="main__slider">
                        <div>
                            <a href='https://photos.app.goo.gl/jBGqw63gtwLwRpzt9'>
                                <img src="/images/gallery/image2.jpg" alt="mp" />
                            </a>
                        </div>
                        <div>
                            <a href='https://photos.app.goo.gl/bNsuDjpNA5DmdjAu5'>
                                <img src="/images/gallery/image3.jpg" alt="mp" />
                            </a>
                        </div>
                        <div>
                            <a href='https://photos.app.goo.gl/82C22HfRNyrKLM4o8'>
                                <img src="/images/gallery/image1.jpg" alt="mp" />
                            </a>
                        </div>
                    </Slider>
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

export default Photos;