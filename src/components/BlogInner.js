import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/BlogInner.sass';
import TopSlider from './TopSlider';
import Menu from './Menu';
import Footer from './Footer';


class BlogInner extends React.Component {
    state = {
        post: {},
        imgUrl: '',
        isLoaded: false
    }
    componentDidMount() {
        fetch(`http://orkestrdsst.ho.ua/wordpress-adm/wp-json/wp/v2/posts/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((postData) => {
            this.setState({
                post: postData,
                isLoaded: true
            })
            if (!postData.better_featured_image) {
                this.setState({
                    imgUrl: null
                })
                
            } else {
                this.setState({
                    imgUrl: postData.better_featured_image.source_url
                })
            }
        })
    }
    render() {
        const {post, isLoaded, imgUrl} = this.state;

        return (
            <main>
                <TopSlider />
                <Menu />
                <div className="main-inner">
                    <div className="secondary-bg blog-inner">
                        {isLoaded ? 
                            <div>
                                <h1 className="medium-title">{post.title.rendered}</h1>
                                <div className="image">
                                    {imgUrl ? <img src={imgUrl} alt={post.title.rendered} /> : ''}
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                <div className="back-link">
                                    <NavLink to="/blog" className='prim-btn back'><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>Назад</NavLink>
                                </div>
                            </div>
                            :
                            <h1>Loading...</h1>
                        }
                    </div>
                </div>
                <Footer />
            </main>
        )
    }
}

export default BlogInner;