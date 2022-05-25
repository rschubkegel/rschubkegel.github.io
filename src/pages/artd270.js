import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import productPage from '../components/project-containers/productPage';
import virtualCard from '../components/project-containers/virtualCard';
import websiteRedesign from '../components/project-containers/holySee';

const contents = [
  websiteRedesign(),
  productPage(),
  virtualCard(),
];

const ARTD270 = () => {
  return (
    <Layout>
      <div>
        <h1><Link to='/'>Home</Link> &gt; ARTD 270</h1>
        <p>
          ARTD 270 focused on interface design, user experience, typography, and layout of web design.
          This is a selection of my favorite projects from the class.
        </p>
      </div>
      <div className='flex-col'>
        { contents.map( e => (e) ) }
      </div>
    </Layout>
  );
};

export default ARTD270;
