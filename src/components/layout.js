import * as React from 'react';
import { Link } from 'gatsby';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/main.sass';

import logo from '../images/logo.svg';

const ResumesLink = () => {
  return (
    <Link to='/resumes' className='resumes-link'>Resumes</Link>
  );
};

function Layout({ children }) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => { setIsShown(true) };

  return (
    <div>
      <img
        className='logo'
        src={ logo }
        alt='personal logo'
        onClick={ handleClick }
      />
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
      { isShown && <ResumesLink/> }
    </div>
  );
};

export default Layout;