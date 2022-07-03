import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectContainer = ({ level, title, linkText, linkDest, faded, children }) => {
  const key = `${ title.replaceAll(' ', '-').toLowerCase() }`;
  const headerClass =  faded ? 'section-header-faded' : 'section-header';
  const header = level === 2 // default header level is 2
    ? <h2 className={ headerClass }>{ title }</h2>
    : <h3 className={ headerClass }>{ title }</h3>;
  const linkOrNot = linkDest
    ? linkDest.startsWith('http')
      ? <a href={ linkDest } className='preview-link'>{ linkText }</a>     // external links use <a>
      : <Link to={ linkDest } className='preview-link'>{ linkText }</Link> // internal links use <Link>
    : null;
  const copyButton =
    <FontAwesomeIcon size='xl' icon={ faLink } className='copy-btn' onClick={ () => {
      let t = `${ window.location.href.replace(window.location.hash,"") }#${ key }`;
      navigator.clipboard.writeText(t);
      document.getElementById(key).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }}/>;
  return (
    <div id={ key } key={ key }>
      <div className='flex-row sec-hdr-ctr'>
        { !faded ? copyButton : null }
        { header }
        { linkOrNot }
      </div>
      <div className='flex-col'>
        { children }
      </div>
    </div>
  );
};

export default ProjectContainer;
