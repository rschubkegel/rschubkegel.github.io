import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const ARGlassesContainer = (level) => {
  return (
    <ProjectContainer level={ level } title='AR Glasses' linkText='read more' linkDest='https://cs.georgefox.edu/about/research/computer-vision-for-the-visually-impaired/'>
      <p>Our team explored the design challenge of helping visually impaired individuals navigate the world around them. As part of our human-centered design approach to tackling this challenge, we developed a high-level user story to frame our design efforts: “As a visually impaired person, I want to identify common objects and read text and symbols on signs as I navigate my environment.” <Link to="https://cs.georgefox.edu/about/research/computer-vision-for-the-visually-impaired/">Read more here.</Link></p>
      <div className='flex-row'>
          <StaticImage src='../../images/ar-glasses/prototype.png' alt='paper prototype' />
          <StaticImage src='../../images/ar-glasses/detection.png' alt='ML computer vision prediction of playing cards' />
        </div>
    </ProjectContainer>
  );
};

export default ARGlassesContainer;
