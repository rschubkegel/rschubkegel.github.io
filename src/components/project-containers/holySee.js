import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const HolySeeContainer = (level) => {
  return (
    <ProjectContainer level={ level } title='Website Redesign'>
      <p style={{ marginBottom: '0' }}>
        The first task of this project was to find a website to redesign.
        I chose the <Link to='https://www.vatican.va/content/vatican/en.html'>website of the Vatican</Link> for two reasons:
        1{')'} I attended an Anglican church throughout college and have an interest in the relationship between traditional Christianity and technology,
        and 2{')'} the website is severely outdated and in need of renovation.
        My design process focused on the potential users of the site and how to help them accomplish their goals.
      </p>
      <h3 className='small-section-header'>User Personas</h3>
      <div className='flex-row'>
        <StaticImage src='../../images/artd270/persona-janet.jpg' alt='user persona' />
        <StaticImage src='../../images/artd270/persona-mark.jpg' alt='user persona' />
      </div>
      <h3 className='small-section-header'>User Flows</h3>
      <StaticImage src='../../images/artd270/user-flow.jpg' alt='user flows' />
      <h3 className='small-section-header'>Site Map</h3>
      <StaticImage src='../../images/artd270/site-map.jpg' alt='site map' />
      <h3 className='small-section-header'>Style Tile</h3>
      <StaticImage src='../../images/artd270/style-tile.png' alt='style tile' />
      <h3 className='small-section-header'>Wireframes</h3>
      <div className='flex-row'>
        <StaticImage src='../../images/artd270/wireframe-desktop.jpg' alt='high fidelity desktop wireframes' />
        <StaticImage src='../../images/artd270/wireframe-mobile.jpg' alt='high fidelity mobile wireframes' />
      </div>
      <h3 className='small-section-header'>Final Mockups</h3>
      <div className='flex-row'>
        <StaticImage src='../../images/artd270/mockup-desktop.png' alt='desktop mockup' />
        <StaticImage src='../../images/artd270/mockup-mobile.png' alt='mobile mockup' />
      </div>
    </ProjectContainer>
  );
};

export default HolySeeContainer;
