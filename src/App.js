import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

import './styles/index.sass';
import Header from './components/Header';
import AppRouter from './navigation/AppRouter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'ua',
    };
  }

  changeLanguage(l) {
    this.setState({
      lang: l,
    });
  }

  render() {
    const { lang } = this.state;
    return (
      <div className="app" style={{ height: '100%' }}>
        <div className="container">
          <div className="lang">
            <img
              src="/images/ukraine.png"
              alt="ua"
              onClick={() => this.changeLanguage('ua')}
            />
            <img
              src="/images/united-kingdom.png"
              alt="us"
              onClick={() => this.changeLanguage('us')}
            />
          </div>
          <Header lang={lang} />
          <AppRouter lang={lang} />
        </div>
      </div>
    );
  }
}

export default App;
