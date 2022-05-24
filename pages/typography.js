import Section from "../components/section";
import Image from "next/image";
import imageLoader from "../components/imageLoader";
import NavBar from "../components/navBar";
import styles from "../styles/Typography.module.scss";

import madeByHumans from "../public/images/typography/made-by-humans.png";
import amendment from "../public/images/typography/amendment.png";
import ta1 from "../public/images/typography/anatomy/type-anatomy-grid01.png";
import ta2 from "../public/images/typography/anatomy/type-anatomy-grid02.png";
import ta3 from "../public/images/typography/anatomy/type-anatomy-grid03.png";
import ta4 from "../public/images/typography/anatomy/type-anatomy-grid04.png";
import ta5 from "../public/images/typography/anatomy/type-anatomy-grid05.png";
import ta6 from "../public/images/typography/anatomy/type-anatomy-grid06.png";
import ta7 from "../public/images/typography/anatomy/type-anatomy-grid07.png";
import ta8 from "../public/images/typography/anatomy/type-anatomy-grid08.png";
import ta9 from "../public/images/typography/anatomy/type-anatomy-grid09.png";
import ta10 from "../public/images/typography/anatomy/type-anatomy-grid10.png";
import letterDiagram from "../public/images/typography/twenty-seventh-letter.png";

export default function Typography() {
  return (
    <div className="gridColumn">
      <NavBar page="Typography"/>
      <div>
        <h1>Typography</h1>
        <p>
          This page showcases some school projects from ARTD 220. The class
          explored type anatomy, page layout, hierarchy, and more. All projects
          were completed during the fall 2019 semester.
        </p>
      </div>
      <Section title="Conference Branding" id="conference">
        <div className="textByImg">
          <p>
            Starting with just the required text for a design conference, I
            created a logo, poster design, and website layout (only the poster
            is included). I found the background image on{" "}
            <a href="https://www.pexels.com/">Pexels</a>, my typical source of
            high quality photos.
          </p>
          <div className="imgGrid oneCol">
            <div>
              <Image src={madeByHumans} layout="responsive" loader={imageLoader}/>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Constitutional Amendment" id="amendment">
        <div className="textByImgRev">
          <div className="imgGrid oneCol">
            <div>
              <Image src={amendment} layout="responsive" loader={imageLoader}/>
            </div>
          </div>
          <p>
            This project encouraged me to research a constitutional amendment of
            interest and create a poster to raise awareness for it. I chose the
            fourth amendment and focused on a modern issue it addresses:
            location privacy. The text is taken directly from Justice Roberts of
            the Supreme Court when it ruled against using cellular triangulation
            without a warrant.
          </p>
        </div>
      </Section>
      <Section title="Type Anatomy Exercise" id="anatomy">
        <div className="gridColumn">
          <p>
            The goal of this exercise was to create images using only type. The
            forms could be cropped, transformed, or stretched, but the essence
            of the typeface had to be preserved.
          </p>
          <div
            className={styles.anatomyImgs}
          >
            <div>
              <Image src={ta1} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta2} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta3} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta4} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta5} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta6} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta7} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta8} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta9} layout="responsive" loader={imageLoader}/>
            </div>
            <div>
              <Image src={ta10} layout="responsive" loader={imageLoader}/>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Twenty-seventh Letter" id="letter">
        <div className="textByImg">
          <p>
            In this project, we were prompted to create a 27th letter of the
            alphabet. We were limited to making a new letter-form using the
            style of an existing typeface. I chose to make a character for
            silent usages of the letter &quot;p&quot;.
          </p>
          <div className="imgGrid">
            <div>
              <Image src={letterDiagram} layout="responsive" loader={imageLoader}/>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
