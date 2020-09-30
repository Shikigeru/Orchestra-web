import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import BlogItem from '../../components/BlogItem/BlogItem';
import MainLayout from '../../layouts/MainLayout';

const BlogView = ({ isLoaded, posts }) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('Blog.title');
  });

  return (
    <MainLayout>
      {isLoaded ? (
        posts.map((post) => <BlogItem post={post} key={post.id} />)
      ) : (
        <div className="loader" />
      )}
    </MainLayout>
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
