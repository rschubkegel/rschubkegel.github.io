import * as React from 'react';
import Layout from '../components/layout';
import ProjectContainer from '../components/projectContainer';

import voluntime from '../components/project-containers/voluntime';
import portfolio from '../components/project-containers/portfolio';
import artd270 from '../components/project-containers/artd270';
import hololens from '../components/project-containers/hololens';
import arGlasses from '../components/project-containers/arGlasses';
import hobbies from '../components/project-containers/hobbies';

const contents = [
  <ProjectContainer level={2} title='Web Development'>
    { voluntime(3) }
    { portfolio(3) }
    { artd270(3) }
  </ProjectContainer>,
  <ProjectContainer level={2} title='UX Design'>
    { hololens(3) }
    { arGlasses(3) }
  </ProjectContainer>,
  hobbies(),
];

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>
          Hello, my name is Rylan 👋
        </h1>
        <p>
          I&apos;m a passionate programmer, artist, and coffee lover.
          This site represents a small selection of my personal and professional work.
          Feel free to reach out via <a href='mailto:rylanschubkegel@gmail.com'>email</a> or <a href='https://github.com/rschubkegel/'>LinkedIn</a>,
          I would love to connect!
        </p>
      </div>
      <div className='flex-col'>
        { contents.map( e => (e) ) }
      </div>
    </Layout>
  );
};

export default IndexPage;
