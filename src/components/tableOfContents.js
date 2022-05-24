import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

// props.containers is expecting an array of ProjectContainer components
const TableOfContents = ({ title, containers, page }) => {
  const headerText = title ? title : 'Contents';
  const baseUrl = `${ 
    useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `).site.siteMetadata.siteUrl
   }${ page ? page : '' }`;
  return (
    <div className='table-of-contents'>
      <h3>{ headerText }</h3>
      <ul>
        {
          containers.map( e => (
            <li>
              <Link to={ `${ baseUrl }#${ e.props.title.replaceAll(' ', '').toLowerCase()} ` }>
                { e.props.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TableOfContents;
