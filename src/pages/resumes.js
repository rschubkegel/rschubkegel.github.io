import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

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
      <h1><Link to='/'>Home</Link> &gt; Current Resumes</h1>
      { data.allFile.nodes.map(e => {
        return (<a href={ e.relativePath } className='preview-link' style={{ fontSize: '120%' }}>{ e.name }</a>)
      }) }
    </Layout>
  );
};

export default ResumesPage;
