import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
      <Link to='/home'>Home</Link>
    </Layout>
  );
};

export default NotFoundPage;
