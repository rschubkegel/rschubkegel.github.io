import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const PaintingContainer = () => {
  return (
    <ProjectContainer
      title='Painting'
      linkText='Instagram'
      linkDest='https://www.instagram.com/theryguydraws/'>
      <p>
        One of my favorite forms of R&amp;R is painting. I most often paint with acrylics and occasionally share my work on <a href='https://www.instagram.com/theryguydraws/'>Instagram</a>.
      </p>
      <div className='flex-row-responsive'>
        <StaticImage
          src='https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/290866560_615484873021061_4865539707712812405_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=_w5HYqRhiWoAX_o4v-4&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg3MjM4MjEzNzE3NzcwMzM0Nw%3D%3D.2-ccb7-5&oh=00_AT9ucrHb5k3hi1QyuDwtyCuqZktZg3K5PgMqiy4LnbDKqQ&oe=62C70CBA&_nc_sid=30a2ef'
          alt='acrylic painting of oranges'
        />
        <StaticImage
          src='https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/271254960_671682750907469_8733320244912714736_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=52315DQ1jzIAX_l-o7U&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc0NDA5NzAyNDgzMDgxMDc1Nw%3D%3D.2-ccb7-5&oh=00_AT82ygg3J9CbAxtnoyF1qaW0Gjug1P9heOTHKeipZpcw4Q&oe=62C61C24&_nc_sid=30a2ef'
          alt='acrylic painting of a french press'
        />
      </div>
    </ProjectContainer>
  );
};

export default PaintingContainer;
