import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Header from './components/Header/Header';
import AppRouter from './navigation/AppRouter';

import './styles/index.sass';
import i18n from './i18n';

class App extends Component {
  render() {
    return (
      <div className="app" style={{ height: '100%' }}>
        <div className="container">
          <div className="lang">
            <img
              src="/images/ukraine.png"
              alt="ua"
              onClick={() => i18n.changeLanguage('ua')}
            />
            <img
              src="/images/united-kingdom.png"
              alt="us"
              onClick={() => i18n.changeLanguage('en')}
            />
          </div>
          <Header />
          <AppRouter />
        </div>
      </div>
    );
  }
}

export default App;
