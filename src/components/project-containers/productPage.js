import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ProjectContainer from '../projectContainer';

const ProductPageContainer = (level) => {
  return (
    <ProjectContainer level={ level } title='Product Page'>
      <p>This was probably my favorite project. Our task was to create a product launch page, but I requested to make a “product” page for bagels instead of a <em>real</em> product. Choosing tasty images and adding silly text made this project tons of fun, but I still learned a lot because we were required to use <Link to='https://getbootstrap.com/'>Bootstrap</Link> to make the final page.</p>
      <StaticImage src='../../images/artd270/bagels-screenshot-full.jpg' alt='screenshot of bagels product page' />
    </ProjectContainer>
  );
};

export default ProductPageContainer;
