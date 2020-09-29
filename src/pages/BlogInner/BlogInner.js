import React from 'react';
import PropTypes from 'prop-types';
import BlogInnerView from './BlogInnerView';
import '../../styles/BlogInner.sass';

import formatDate from '../../utils/formatDate';

class BlogInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      imgUrl: '',
      isLoaded: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    fetch(
      `http://orkestrdsst.ho.ua/wordpress-adm/wp-json/wp/v2/posts/${match.params.id}`,
    )
      .then((response) => response.json())
      .then((postData) => {
        this.setState({
          post: postData,
          isLoaded: true,
        });
        if (!postData.better_featured_image) {
          this.setState({
            imgUrl: null,
          });
        } else {
          this.setState({
            imgUrl: postData.better_featured_image.source_url,
          });
        }
      });
  }

  render() {
    const { post, isLoaded, imgUrl } = this.state;
    return (
      <BlogInnerView
        post={post}
        isLoaded={isLoaded}
        imgUrl={imgUrl}
        formatDate={formatDate}
      />
    );
  }
}

BlogInner.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default BlogInner;
