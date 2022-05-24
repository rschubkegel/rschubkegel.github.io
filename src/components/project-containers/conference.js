import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const ConferenceBrandingContainer = (level) => {
  return (
    <ProjectContainer level={ level } title='Conference Branding'>
      <p>Starting with just the required text for a design conference, I created a logo, poster design, and website layout. I found the background image on <Link to='https://www.pexels.com/'>Pexels</Link>, my typical source of high quality photos.</p>
      <StaticImage src='../../images/typography/made-by-humans.jpg' alt='poster' />
    </ProjectContainer>
  );
};

export default ConferenceBrandingContainer;
