import * as React from 'react';
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
      <div className='flex-col'>
        { contents.map( e => (e) ) }
      </div>
    </Layout>
  );
};

export default ARTD270;
