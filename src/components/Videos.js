import React from 'react';

import TopSlider from './TopSlider';
import Menu from './Menu';
import InfoList from './InfoList';
import HistoryBlock from './HistoryBlock';
import RightInfoBlock from './RightInfoBlock';
import Footer from './Footer';
import videoData from './data/videoData.js';

import '../styles/Video.sass';

class Videos extends React.Component {
    state = {
        items: videoData,
        more: 4,
        isEnabled: true
    }

    componentDidMount() {
        document.title = 'Відео';
    }

    showMore() {
        if (this.state.more >= this.state.items.length - 2) {
            this.setState({
                more: this.state.items.length,
                isEnabled: false
            })
        } else {
            this.setState({
                more: this.state.more + 2
            })
        }
    }

    render() {
        const {items, more, isEnabled} = this.state;
        const {lang} = this.props;

        return (
            <main className="main">
                <TopSlider />
                <Menu lang={lang}/>
                <div className="main__inner">
                    <InfoList lang={lang}/>
                    <div className="video-block secondary-bg">
                        <h2 className='medium-title'>
                            {lang === 'us' ? 
                                'Orchestra performances across Ukraine and abroad ' 
                                : 
                                'Виступи оркестру по всій Україні та далеко за її межами'
                            }
                        </h2>
                        <div className="row">
                            {items.map((video) => (
                                <div className="col-md-6" key={video.id}>
                                    <div className="responsive-iframe">
                                        <iframe
                                            src={video.src}
                                            width="100%"
                                            height="300px"
                                            style={{ 'border': 'none', 'overflow': 'hidden' }}
                                            title={video.id}
                                            allowFullScreen
                                        >
                                        </iframe>
                                    </div>
                                </div>
                            )).reverse().slice(0, more)}
                            <button
                                onClick={this.showMore.bind(this)}
                                className={!isEnabled ? 'prim-btn load-more hidden' : 'prim-btn load-more'}
                            >
                                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
                                {lang === 'us' ? 'Load More' : 'Завантажити ще'}
                            </button>
                        </div>
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

export default Videos;