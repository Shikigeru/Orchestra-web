import React from 'react';
import PropTypes from 'prop-types';
import MainView from './MainView';
import '../../styles/Main.sass';

class Main extends React.Component {
  componentDidMount() {
    document.title =
      'Військовий оркестр 8-го навчального Чернігівського центру Держспецтрансслужби';
  }

  render() {
    const { lang } = this.props;
    return <MainView lang={lang} />;
  }
}

Main.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Main;
