import Image from "next/image";
import Section from "../components/section";
import NavBar from "../components/navBar";

import businessFront from "../public/images/creative-suite/business-card-1.png";
import businessBack from "../public/images/creative-suite/business-card-2.png";
import coasters1 from "../public/images/creative-suite/coasters-1.png";
import coasters2 from "../public/images/creative-suite/coasters-2.png";
import coasters3 from "../public/images/creative-suite/coasters-3.png";
import nauticalIcons from "../public/images/creative-suite/nautical-icons.png";
import styles from "../styles/CreativeSuite.module.scss";

export default function CreativeSuite() {
  return (
    <div className="gridColumn">
      <NavBar page="Creative Suite" />

      <div>
        <h1>Creative Suite</h1>
        <p>
          This page showcases some school projects from ARTD 110. The class
          taught the fundamentals of Adobe Creative Cloud using Photoshop,
          Illustrator, and InDesign.
        </p>
      </div>

      <Section title="Business Card" id="biz-card">
        <div className="gridColumn">
          <p>
            This was a concept I created for a personal business card. This
            project is what inspired me to create a personal logo, which is used
            on my portfolio site.
          </p>
          <div className={styles.bizCards}>
            <div>
              <Image
                src={businessFront}
                layout="responsive"
                unoptimized="true"
              />
            </div>
            <div>
              <Image
                src={businessBack}
                layout="responsive"
                unoptimized="true"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        title="Spotify Playlists"
        id="playlists"
        page="https://open.spotify.com/user/213u4fxzegwrbttorspgre2gq?si=ab9808ff92e2474e"
      >
        <div className="gridColumn">
          <p>
            I am a huge fan of music, so I chose to practice my Illustrator
            skill on a series of cover images for my Spotify playlists. I
            originally started with 16 images, but as my playlists grew I
            expanded the project.
          </p>
          {playlistImages()}
        </div>
      </Section>
      <Section title="Coasters" id="coasters">
        <div className="gridColumn">
          <p>
            Each student created a set of matching coasters that were then
            printed on wood using a laser-cutter. I chose to use the same image
            (the right-most image below) with various quotes related to tea or
            coffee.
          </p>
          <div className={styles.coastersImgs}>
            <div>
              <Image src={coasters1} layout="responsive" unoptimized="true" />
            </div>
            <div className={styles.unimportant}>
              <Image src={coasters2} layout="responsive" unoptimized="true" />
            </div>
            <div>
              <Image src={coasters3} layout="responsive" unoptimized="true" />
            </div>
          </div>
        </div>
      </Section>
      <Section title="Nautical Icons" id="nautical">
        <div className="textByImg">
          <p>
            The first project involving Adobe Illustrator, I was tasked with
            creating a set of icons with a unifying theme. I chose to make
            cartoony nautical icons, because of my dad&apos;s recent interest in
            sailing.
          </p>
          <div>
            <Image src={nauticalIcons} layout="responsive" unoptimized="true" />
          </div>
        </div>
      </Section>
    </div>
  );
}

const playlistImages = () => {
  let images = [];
  for (let num = 1; num <= 27; num++) {
    let zero = num < 10 ? "0" : "";
    let source = `/images/creative-suite/playlist/${zero}${num}.jpg`;
    images.push(
      <div>
        <Image
          src={source}
          unoptimized="true"
          layout="responsive"
          width="50px"
          height="50px"
        />
      </div>
    );
  }
  return <div className={styles.playlistImgs}>{images}</div>;
};
