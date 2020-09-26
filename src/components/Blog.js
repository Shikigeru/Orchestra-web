import React from "react";

import TopSlider from "./TopSlider";
import Menu from "./Menu";
import Footer from "./Footer";
import BlogItem from "./BlogItem";
import "../styles/Blog.sass";

class Blog extends React.Component {
  state = {
    posts: [],
    isLoaded: false,
  };

  componentDidMount() {
    document.title = "Блог";
    fetch("http://orkestrdsst.ho.ua/wordpress-adm/wp-json/wp/v2/posts")
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
    return (
      <main className="blog main">
        <TopSlider />
        <Menu />
        <div className="main__inner">
          {isLoaded ? (
            posts.map((post) => <BlogItem post={post} key={post.id} />)
          ) : (
            <div className="loader" />
          )}
        </div>
        <Footer />
      </main>
    );
  }
}

export default Blog;
