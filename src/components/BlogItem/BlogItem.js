import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

const BlogItem = ({ post }) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if (post.better_featured_image) {
      setImgUrl(
        post.better_featured_image.media_details.sizes.medium.source_url,
      );
    } else {
      setImgUrl(null);
    }
  }, []);

  return (
    <div className="blog__item secondary-bg">
      <NavLink to={`/blog/${post?.id}`} className="thumb-img">
        <div className="blog__item__image">
          {imgUrl ? <img src={imgUrl} alt={post.title.rendered} /> : ''}
        </div>
      </NavLink>
      <div className="blog__item__preview-text">
        <NavLink className="blog__item__title" to={`/blog/${post?.id}`}>
          <h2>{post?.title?.rendered}</h2>
        </NavLink>
        <p className="blog__item__date">
          Дата публікації: {formatDate(post?.date)}
        </p>
        <p
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              post?.content?.rendered.length > 200
                ? `${post?.content?.rendered.slice(0, 200)}...`
                : post?.content?.rendered,
          }}
        />
        <div className="center">
          <NavLink className="prim-btn" to={`/blog/${post?.id}`}>
            <i className="fa fa-info-circle" aria-hidden="true" />
            ДЕТАЛЬНІШЕ
          </NavLink>
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  post: PropTypes.shape({
    better_featured_image: PropTypes.shape({
      media_details: PropTypes.shape({
        sizes: PropTypes.shape({
          medium: PropTypes.shape({
            source_url: PropTypes.string,
          }),
        }),
      }),
    }),
    title: PropTypes.shape({
      rendered: PropTypes.string,
    }),
    content: PropTypes.shape({
      rendered: PropTypes.string,
    }),
    id: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
};

export default BlogItem;
