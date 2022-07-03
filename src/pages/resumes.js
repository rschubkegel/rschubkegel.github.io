import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

import logo from '../images/logo.svg';

const ResumesPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile {
      nodes {
        name
        relativePath
      }
    }
  }
  `);
  return (
    <Layout>
      <img
        className='logo'
        src={ logo }
        alt='personal logo'
      />
      <Link className='return-link' to='/'>Home</Link>
      <h1 className='hero highlight'>Current Resumes</h1>
      <div className='flex-col'>
        { data.allFile.nodes.map(e => {
          return (<a href={ e.relativePath } className='preview-link' style={{ fontSize: '120%' }}>{ e.name }</a>)
        }) }
      </div>
    </Layout>
  );
};

export default ResumesPage;
