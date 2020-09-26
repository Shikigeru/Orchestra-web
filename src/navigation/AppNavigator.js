import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from '../pages/Main/Main';
// React lazy loading components
const Photos = React.lazy(() => import('../pages/Photos/Photos'));
const Videos = React.lazy(() => import('../components/Videos'));
const AboutUS = React.lazy(() => import('../components/AboutUS'));
const Contacts = React.lazy(() => import('../components/Contacts'));
const Compositions = React.lazy(() => import('../components/Compositions'));
const Blog = React.lazy(() => import('../components/Blog'));
const BlogInner = React.lazy(() => import('../components/BlogInner'));

const AppNavigator = ({ lang }) => {
  return (
    <Router>
      <Suspense fallback={<div className="loader" />}>
        <Route path="/" component={() => <Main lang={lang} />} exact />
        <Route path="/photos" component={() => <Photos lang={lang} />} exact />
        <Route
          path="/compositions"
          component={() => <Compositions lang={lang} />}
        />
        <Route path="/videos" component={() => <Videos lang={lang} />} />
        <Route path="/about" component={() => <AboutUS lang={lang} />} />
        <Route path="/contacts" component={() => <Contacts lang={lang} />} />
        <Route path="/blog" component={() => <Blog lang={lang} />} exact />
        <Route path="/blog/:id" component={BlogInner} />
      </Suspense>
    </Router>
  );
};

AppNavigator.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default AppNavigator;
