import React, { Suspense } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Main from '../pages/Main/Main';
// React lazy loading components
const Photos = React.lazy(() => import('../pages/Photos/Photos'));
const Videos = React.lazy(() => import('../pages/Videos/Videos'));
const AboutUs = React.lazy(() => import('../pages/AboutUs/AboutUs'));
const Contacts = React.lazy(() => import('../pages/Contacts/Contacts'));
const Compositions = React.lazy(() =>
  import('../pages/Compositions/Compositions'),
);
const Blog = React.lazy(() => import('../pages/Blog/Blog'));
const BlogInner = React.lazy(() => import('../pages/BlogInner/BlogInner'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div className="loader" />}>
        <Route path="/" component={Main} exact />
        <Route path="/photos" component={Photos} exact />
        <Route path="/compositions" component={Compositions} />
        <Route path="/videos" component={Videos} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:id" component={BlogInner} />
      </Suspense>
    </Router>
  );
};

export default AppRouter;
