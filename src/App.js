import React, { Component, Suspense } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import './styles/App.sass';
import Header from './components/Header';
import Main from './components/Main';

// React lazy loading components
const Photos = React.lazy(() => import('./components/Photos')); 
const Videos = React.lazy(() => import('./components/Videos'));
const AboutUS = React.lazy(() => import('./components/AboutUS'));
const Contacts = React.lazy(() => import('./components/Contacts'));
const Compositions = React.lazy(() => import('./components/Compositions'));
const Blog = React.lazy(() => import('./components/Blog'));
const BlogInner = React.lazy(() => import('./components/BlogInner'))


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
            <Suspense fallback={<div className="loader"></div>}>
              <Route path="/" component={() => <Main lang={lang} />} exact />
              <Route path="/photos" component={() => <Photos lang={lang}/>} exact />
              <Route path="/compositions" component={() => <Compositions lang={lang}/>} />
              <Route path="/videos" component={() => <Videos lang={lang} />} />
              <Route path="/about" component={() => <AboutUS lang={lang}/>} />
              <Route path="/contacts" component={() => <Contacts lang={lang}/>} />
              <Route path="/blog" component={() => <Blog lang={lang}/>} exact />
              <Route path="/blog/:id" component={BlogInner} />
            </Suspense>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
