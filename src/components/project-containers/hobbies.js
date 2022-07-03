import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

import exploAnim from '../../images/animations/explosion.gif';

const HobbiesContainer = () => {
  return (
    <ProjectContainer level={2} title='Hobbies' linkText='view page' linkDest='/hobbies'>
      <p>I have numerous other creative hobbies such as game design, animation, music production, painting, etc. For more of my personal projects, check out <Link to='/hobbies'>this page</Link>.</p>
      <StaticImage src='../../images/games/creature-1.png' alt='jam game The Creature' />
      <div className='flex-row'>
        <StaticImage
          src='https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/290866560_615484873021061_4865539707712812405_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=_w5HYqRhiWoAX_o4v-4&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3MjM4MjEzNzE3NzcwMzM0Nw%3D%3D.2-ccb7-5&oh=00_AT9ucrHb5k3hi1QyuDwtyCuqZktZg3K5PgMqiy4LnbDKqQ&oe=62C70CBA&_nc_sid=30a2ef'
          alt='acrylic painting of oranges'
        />
        <img src={ exploAnim } alt='explosion animation' style={{ width: '25rem', maxWidth: '65%', height: 'auto' }} />
      </div>
    </ProjectContainer>
  );
};

export default HobbiesContainer;
