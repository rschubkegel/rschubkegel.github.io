import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/main.sass';

import logo from '../images/logo.svg';

const Layout = ({ children }) => {
  return (
    <div style={{ margin: 'auto' }} className='flex-col flex-centered main-content'>
      <div className='flex-centered'>
        <img src={ logo } alt='personal logo' className='personal-logo' />
      </div>
      <main style={{ margin: 'auto' }} className='flex-col flex-centered'>
        { children }
      </main>
      <footer className='flex-col flex-centered'>
        <div className='flex-row'>
          <a href='mailto:rylanschubkegel@gmail.com' role='button' aria-label='email'><FontAwesomeIcon size='2xl' icon={ faEnvelope }/></a>
          <a href='https://www.linkedin.com/in/rschubkegel/' role='button' aria-label='LinkedIn'><FontAwesomeIcon size='2xl' icon={ faLinkedin }/></a>
          <a href='https://github.com/rschubkegel/' role='button' aria-label='GitHub'><FontAwesomeIcon size='2xl' icon={ faGithubSquare }/></a>
        </div>
        <p style={{ margin: 0 }}>© Rylan Schubkegel 2022</p>
      </footer>
    </div>
  );
};

export default Layout;