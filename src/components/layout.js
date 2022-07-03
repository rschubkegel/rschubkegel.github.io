import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import useSiteMetadata from '../hooks/use-site-metadata';
import '../styles/main.sass';

import socialPreview from '../images/social-preview.jpg';
import logo from '../images/logo.svg';

function Layout({ children }) {
  const { title, siteUrl } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <meta charset='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
        <link rel='canonical' href={ siteUrl } />

        <meta property='og:title' content={ title } />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={ siteUrl } />
        <meta property='og:image' content={ socialPreview } />

        <title>{ title }</title>
        <desc>
          This site represents a small selection of my personal and professional work.
          Feel free to reach out, I would love to connect!
        </desc>
        <meta name='author' content='Rylan Schubkegel' />
        <link rel='icon' type='img/svg' href={ logo } />
      </Helmet>
      <main>
        { children }
      </main>
      <footer>
        <div className='flex-col'>
          <a
            href='mailto:rylanschubkegel@gmail.com'
            role='button'
            aria-label='email'>
              <FontAwesomeIcon size='2xl' icon={ faEnvelope }/>
          </a>
          <a
            href='https://www.linkedin.com/in/rschubkegel/'
            role='button'
            aria-label='LinkedIn'>
              <FontAwesomeIcon size='2xl' icon={ faLinkedin }/>
          </a>
          <a
            href='https://github.com/rschubkegel/'
            role='button'
            aria-label='GitHub'>
              <FontAwesomeIcon size='2xl' icon={ faGithubSquare }/>
          </a>
        </div>
        <p style={{ display: 'none' }}>© Rylan Schubkegel 2022</p>
      </footer>
    </div>
  );
};

export default Layout;