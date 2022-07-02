import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

import exploAnim from '../../images/animations/explosion.gif';

const HobbiesContainer = () => {
  return (
    <ProjectContainer level={2} title='Hobbies'>
      <p style={{ marginBottom: '0' }}>I have numerous other creative hobbies such as game design, animation, music production, painting, etc. For more of my personal projects, check out <Link to='/hobbies'>this page</Link>.</p>
      <div className='flex-row'>
        <StaticImage src='../../images/games/creature-1.png' alt='jam game The Creature' />
        <img src={ exploAnim } alt='explosion animation' style={{ width: '20rem', maxWidth: '50%', height: 'auto' }} />
      </div>
    </ProjectContainer>
  );
};

export default HobbiesContainer;
