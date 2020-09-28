import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideosView from './VideosView';
import videoData from '../../data/videoData';

import '../../styles/Video.sass';

export class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: videoData,
      more: 4,
      isEnabled: true,
    };
  }

  componentDidMount() {
    document.title = 'Відео';
  }

  showMore = () => {
    const { more, items } = this.state;
    if (more >= items.length - 2) {
      this.setState({
        more: items.length,
        isEnabled: false,
      });
    } else {
      this.setState((prevState) => {
        return {
          more: prevState.more + 2,
        };
      });
    }
  };

  showLess = () => {
    this.setState({
      more: 4,
      isEnabled: true,
    });
  };

  render() {
    const { lang } = this.props;
    const { items, more, isEnabled } = this.state;
    return (
      <VideosView
        lang={lang}
        items={items}
        more={more}
        isEnabled={isEnabled}
        showMore={this.showMore}
        showLess={this.showLess}
      />
    );
  }
}

Videos.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Videos;
