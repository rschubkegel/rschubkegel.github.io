import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectContainer = ({ level, title, linkText, linkDest, children }) => {
  const key = `${ title.replaceAll(' ', '-').toLowerCase() }`;
  const header = level === 2 // default header level is 2
    ? <h2 style={{ display: 'inline-block' }}>{ title }</h2>
    : <h3 style={{ display: 'inline-block' }}>{ title }</h3>;
  const linkOrNot = linkDest
    ? linkDest.startsWith('http')
      ? <a href={ linkDest } className='preview-link script'>{ linkText }</a>     // external links use <a>
      : <Link to={ linkDest } className='preview-link script'>{ linkText }</Link> // internal links use <Link>
    : null;
  return (
    <div id={ key } key={ key } className='preview-container'>
      <div className='preview-container-header'>
        <FontAwesomeIcon size='xl' icon={ faLink } className={`copy-link-btn${ linkDest ? '' : ' solo' }`} onClick={ () => {
          let t = `${ window.location.href.replace(window.location.hash,"") }#${ key }`;
          navigator.clipboard.writeText(t);
          document.getElementById(key).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }}/>
        { header }
        { linkOrNot }
      </div>
      { level === 2 ? <hr/> : null }
      <div className='flex-col'>
        { children }
      </div>
    </div>
  );
};

export default ProjectContainer;
