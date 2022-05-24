import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const VirtualCardContainer = (level) => {
  return (
    <ProjectContainer level={ level } title='Virtual Card'>
      <p>This project was designed to learn/practice HTML and CSS. Everything was coded by hand, so we didn&apos;t spend time polishing it (making it responsive, adding transitions, etc.) because the class is geared toward design students.</p>
      <div className='flex-row'>
        <StaticImage src='../../images/artd270/virtual-card-sketches.jpg' alt='wireframe sketches' />
        <StaticImage src='../../images/artd270/virtual-card-final.jpg' alt='screenshot of final virtual card' />
      </div>
    </ProjectContainer>
  );
};

export default VirtualCardContainer;
