import * as React from 'react';
import { Link } from 'gatsby';
import { useState } from 'react';
import Layout from '../components/layout';
import ProjectContainer from '../components/projectContainer';

import voluntime from '../components/project-containers/voluntime';
import portfolio from '../components/project-containers/portfolio';
import artd270 from '../components/project-containers/artd270';
import hololens from '../components/project-containers/hololens';
import arGlasses from '../components/project-containers/arGlasses';
import hobbies from '../components/project-containers/hobbies';

import logo from '../images/logo.svg';

const contents = [
  <ProjectContainer level={2} title='Web Dev' faded>
    { voluntime(3) }
    { portfolio(3) }
    { artd270(3) }
  </ProjectContainer>,
  <ProjectContainer level={2} title='UX Design' faded>
    { hololens(3) }
    { arGlasses(3) }
  </ProjectContainer>,
  <ProjectContainer level={2} title='Hobbies' faded>
    { hobbies() }
  </ProjectContainer>
];

const ResumesLink = () => {
  return (
    <Link to='/resumes' className='resumes-link'>Resumes</Link>
  );
};

const IndexPage = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => { setIsShown(true) };
  return (
    <Layout>
      <img
        className='logo'
        src={ logo }
        alt='personal logo'
        onClick={ handleClick }
      />
      <div className='intro'>
        <h1 className='hero'>
          Hello, I&apos;m <span className='highlight'>Rylan</span>
        </h1>
        <p>
          I&apos;m a passionate programmer, artist, and coffee lover.
          This site represents a small selection of my personal and professional work.
          Feel free to reach out via <a href='mailto:rylanschubkegel@gmail.com'>email</a> or <a href='https://github.com/rschubkegel/'>LinkedIn</a>,
          I would love to connect!
        </p>
      </div>
      <div className='flex-col'>
        { contents.map( e => (e) ) }
      </div>
      { isShown && <ResumesLink/> }
    </Layout>
  );
};

export default IndexPage;