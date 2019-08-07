import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import './styles/App.sass';
import Header from './components/Header';
import Main from './components/Main';
import Photos from './components/Photos';
import Videos from './components/Videos';

import AboutUS from './components/AboutUS';
import Contacts from './components/Contacts';
import Musikparade from './components/gallery/Musikparade2014/Musikparade2014';
import General from './components/gallery/General/General';
import Anniversary from './components/gallery/Anniversary/Anniversary';
import Compositions from './components/Compositions';
import Blog from './components/Blog';
import BlogInner from './components/BlogInner';
import ScrollToTop from './components/ScrollToTop';


class App extends Component {
  state = {
    lang: 'ua'
  };
  changeLanguage(l) {
    this.setState({
      lang: l
    });
  }

  render() {
    const {lang} = this.state;
    return (
      <div className="app" style={{height: '100%'}}>
        <div className="container">
          <div className="lang">
            <img src="/images/ukraine.png" alt="ua" onClick={() => this.changeLanguage('ua')} />
            <img src="/images/united-kingdom.png" alt="us" onClick={() => this.changeLanguage('us')} />
          </div>
          <Header lang={lang} />
          <Router>
            <ScrollToTop>
              <Route path="/" component={() => <Main lang={lang} />} exact />
              <Route path="/photos" component={() => <Photos lang={lang}/>} exact />
              <Route path="/photos/musikparade-2014" component={() => <Musikparade lang={lang}/>} />
              <Route path="/photos/general" component={() => <General lang={lang}/>} />
              <Route path="/photos/anniversary" component={() => <Anniversary lang={lang}/>} />
              <Route path="/compositions" component={() => <Compositions lang={lang}/>} />
              <Route path="/videos" component={() => <Videos lang={lang} />} />
              <Route path="/about" component={() => <AboutUS lang={lang}/>} />
              <Route path="/contacts" component={() => <Contacts lang={lang}/>} />
              <Route path="/blog" component={() => <Blog lang={lang}/>} exact />
              <Route path="/blog/:id" component={BlogInner} />
            </ScrollToTop>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
