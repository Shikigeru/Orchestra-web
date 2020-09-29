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
  const {
    rendered: { title, content },
    id,
    date,
  } = post;
  return (
    <div className="blog__item secondary-bg">
      <NavLink to={`/blog/${id}`} className="thumb-img">
        <div className="blog__item__image">
          {imgUrl ? <img src={imgUrl} alt={title} /> : ''}
        </div>
      </NavLink>
      <div className="blog__item__preview-text">
        <NavLink className="blog__item__title" to={`/blog/${id}`}>
          <h2>{title}</h2>
        </NavLink>
        <p className="blog__item__date">Дата публікації: {formatDate(date)}</p>
        <p
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              content.length > 200 ? `${content.slice(0, 200)}...` : content,
          }}
        />
        <div className="center">
          <NavLink className="prim-btn" to={`/blog/${id}`}>
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
    rendered: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
    id: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default BlogItem;
