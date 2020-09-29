import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TopSlider from '../../components/TopSlider/TopSlider';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import BlogItem from '../../components/BlogItem/BlogItem';

const BlogView = ({ isLoaded, posts }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('Blog.title');
  });

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
};

BlogView.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()),
};

BlogView.defaultProps = {
  posts: [],
};

export default BlogView;
