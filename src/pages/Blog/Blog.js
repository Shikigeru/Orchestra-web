import React from 'react';
import BlogView from './BlogView';

import '../../styles/Blog.sass';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://orkestrdsst.ho.ua/wordpress-adm/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((postData) => {
        this.setState({
          posts: postData,
          isLoaded: true,
        });
      });
  }

  render() {
    const { posts, isLoaded } = this.state;
    return <BlogView posts={posts} isLoaded={isLoaded} />;
  }
}

export default Blog;
