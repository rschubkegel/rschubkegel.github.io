import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const PortfolioContainer = (level) => {
  return (
    <ProjectContainer level={ level } title='Portfolio Site' linkText='view source' linkDest='https://github.com/rschubkegel/rschubkegel.github.io'>
      <p>This website is built with <Link to='https://www.gatsbyjs.com/'>Gatsby.js</Link> &amp; <Link to='https://reactjs.org/'>React.js</Link> with <Link to='https://sass-lang.com/'>Sass</Link> for styling. It has gone through several tech stacks including vanilla HTML &amp; CSS, <Link to='https://nextjs.org/'>Next.js</Link>, and <Link to='https://jekyllrb.com/'>Jekyll</Link> &amp; <Link to='https://www.markdownguide.org/'>Markdown</Link>.</p>
      <div className='flex-row flex-centered' >
        <StaticImage src='../../images/portfolio/gatsby.png' alt='Gatsby.js logo' height='10rem' />
        <StaticImage src='../../images/portfolio/react.png' alt='React.js logo' height='10rem' />
        <StaticImage src='../../images/portfolio/sass.png' alt='Sass logo' height='10rem' />
      </div>
    </ProjectContainer>
  );
};

export default PortfolioContainer;
