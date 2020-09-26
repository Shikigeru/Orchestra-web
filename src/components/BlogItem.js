import React from "react";
import { NavLink } from "react-router-dom";

class BlogItem extends React.Component {
  state = {
    imgUrl: "",
  };

  componentDidMount() {
    if (this.props.post.better_featured_image) {
      this.setState({
        imgUrl: this.props.post.better_featured_image.media_details.sizes.medium
          .source_url,
      });
    } else {
      this.setState({
        imgUrl: null,
      });
    }
  }

  formatDate = function (postDate) {
    const year = postDate.slice(0, 4);
    const month = postDate.slice(5, 7);
    const day = postDate.slice(8, 10);
    return `${year}.${month}.${day}`;
  };

  render() {
    const { title, content, id, date } = this.props.post;
    const { imgUrl } = this.state;
    return (
      <div className="blog__item secondary-bg">
        <NavLink to={`/blog/${id}`} className="thumb-img">
          <div className="blog__item__image">
            {imgUrl ? <img src={imgUrl} alt={title.rendered} /> : ""}
          </div>
        </NavLink>
        <div className="blog__item__preview-text">
          <NavLink className="blog__item__title" to={`/blog/${id}`}>
            <h2>{title.rendered}</h2>
          </NavLink>
          <p className="blog__item__date">
            Дата публікації: {this.formatDate(date)}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html:
                content.rendered.length > 200
                  ? `${content.rendered.slice(0, 200)}...`
                  : content.rendered,
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
  }
}

export default BlogItem;
