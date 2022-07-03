import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const GameDevContainer = () => {
  return (
    <ProjectContainer
      title='Game Development'
      linkText='ich.io page'
      linkDest='https://supergobo.itch.io/'
    >
      <div>
        <p>
          One of my passions is game development, which unites several of my
          other hobbies. I love game jams and small indie projects. You can see
          all my published games on{' '}
          <a href='https://supergobo.itch.io/'>my itch.io page</a>.
        </p>
        <p>
          My most recent game,{' '}
          <a href='https://supergobo.itch.io/the-creature'>The Creature</a>, was
          made with two friends. It was completed in a week for the{' '}
          <a href='https://itch.io/jam/weeksauce-3'>Week Sauce Game Jam</a>.
        </p>
        <p>
          My most notable game is an entry for{' '}
          <a href='https://ldjam.com/'>Ludum Dare</a> 43, a 48-hour game making
          competition. Out of a total of 761 competition entries, my game{' '}
          <a href='https://supergobo.itch.io/judgement-of-a-priest?secret=y8iE62XuowSe3dRCjaB3YANzE8'>Judgement of a Priest</a> placed 27th for audio and 39th for
          graphics.
        </p>
      </div>
      <div className='flex-row flex-centered'>
        <a href='https://supergobo.itch.io/the-creature'>
          <StaticImage
            src='../../images/games/creature-1.png'
            alt='screenshot of The Creature'
          />
        </a>
        <a href='https://supergobo.itch.io/the-creature'>
          <StaticImage
            src='../../images/games/creature-2.png'
            alt='screenshot of The Creature'
          />
        </a>
        <a href='https://supergobo.itch.io/judgement-of-a-priest?secret=y8iE62XuowSe3dRCjaB3YANzE8' style={{ maxWidth: '32.5%' }}>
          <StaticImage
            src='../../images/games/priest-1.jpg'
            alt='screenshot of Judgement of a Priest'
          />
        </a>
      </div>
      <div className='flex-row flex-centered'>
        <a href='https://supergobo.itch.io/earth-defense' style={{ maxWidth: '35%' }}>
          <StaticImage
            src='../../images/games/ED.png'
            alt='screenshot of Earth Defense'
          />
        </a>
        <a href='https://supergobo.itch.io/bok-bok-beats' style={{ maxWidth: '26%' }}>
          <StaticImage
            src='../../images/games/BBB.png'
            alt='screenshot of Bok Bok Beats'
          />
        </a>
        <a href='https://supergobo.itch.io/cave-runner' style={{ maxWidth: '32%' }}>
          <StaticImage
            src='../../images/games/CR.png'
            alt='screenshot of Cave Runner'
          />
        </a>
      </div>
    </ProjectContainer>
  );
};

export default GameDevContainer;
