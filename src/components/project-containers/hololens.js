import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const HololensContainer = (level) => {
  return (
    <ProjectContainer level={ level } title='Mixed Reality UX Research'>
      <p>I was the team manager of 6 students working with <Link to="https://northamerica.daimlertruck.com/">Daimler Trucks of North America</Link> to research the utility of Microsoft&apos;s <Link to="https://www.microsoft.com/en-us/hololens/hardware">Hololens 2</Link> for Daimler&apos;s servicing intake process. We developed small-scale text input applications in <abbr title="mixed reality">MR</abbr> using <Link to="https://unity.com/">Unity</Link> and Microsoft&apos;s <abbr title="mixed reality toolkit">MRTK</abbr>. After having users test these applications we were able derive insights about the unique user experience of the Hololens headset, providing our client with valuable information about the efficacy of MR in their truck servicing process.</p>
      <div className='flex-col'>
        <StaticImage src='../../images/hololens/cube.jpg' alt='hand and cube in mixed reality' />
        <div className='flex-row'>
          <StaticImage src='../../images/hololens/user-flow.png' alt='user interaction flowchart' />
          <StaticImage src='../../images/hololens/wireframes.jpg' alt='application wireframes' />
        </div>
      </div>
    </ProjectContainer>
  );
};

export default HololensContainer;
