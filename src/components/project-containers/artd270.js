import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const ARTD270Container = (level) => {
  return (
    <ProjectContainer level={ level } title='Web Design Class' linkText='view page' linkDest='/artd270'>
      <p>The following are school projects from ARTD 270, which focused on UI design, page layout, and usability.</p>
      <div className='flex-row'>
        <StaticImage src='../../images/artd270/bagels-banner.jpg' alt='screenshot of product page' />
        <StaticImage src='../../images/artd270/style-tile.png' alt='style tile' />
      </div>
    </ProjectContainer>
  );
};

export default ARTD270Container;
