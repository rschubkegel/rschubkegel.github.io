import Image from "next/image";
import Section from "../components/section";
import SubSection from "../components/subSection";
import styles from "../styles/Home.module.scss";

import teamNuPrototype from "../public/images/home/engr/team-nu-prototype.png";
import teamNuDetection from "../public/images/home/engr/team-nu-detection.png";
import teamNuQR from "../public/images/home/engr/team-nu-qr.png";
import seniorDesignCube from "../public/images/home/engr/senior-design-cube.jpg";

import gamePriest0 from "../public/images/home/games/priest-0.jpg";
import gamePriest1 from "../public/images/home/games/priest-1.jpg";
import gameBBB from "../public/images/home/games/BBB.png";
import gameCR from "../public/images/home/games/CR.png";
import gameED from "../public/images/home/games/ED.png";

import screenshotBagels from "../public/images/home/web/screenshot-bagels.jpg";
import userFlows from "../public/images/home/web/user-flow.jpg";
import screenshotZen from "../public/images/home/web/screenshot-zen.jpg";
import screenshotJS from "../public/images/home/web/screenshot-js.jpg";

import poster from "../public/images/typography/made-by-humans.png";
import anatomy1 from "../public/images/typography/anatomy/type-anatomy-grid01.png";
import anatomy2 from "../public/images/typography/anatomy/type-anatomy-grid02.png";
import letter from "../public/images/typography/twenty-seventh-letter.png";

import coaster from "../public/images/creative-suite/coasters-1.png";
import bizCard from "../public/images/creative-suite/business-card-1.png";
import spotify from "../public/images/creative-suite/playlist/18.jpg";

export default function Home() {
  return (
      <main className="gridColumn">
        <div>
          <h1>Rylan Schubkegel</h1>
          <p>
            Hello, my name is Rylan. I&apos;m a{" "}
            <abbr title="computer science">CS</abbr> student at{" "}
            <a href="https://www.georgefox.edu/" target="_blank" rel="noreferrer">
              George Fox University
            </a>
            . The purpose of this site is to showcase some of my personal work.
            If you want to get in touch, feel free to{" "}
            <a href="#contact">contact me</a>.
          </p>
        </div>
        {makeSections()}
      </main>
  );
}

function addToTableOfContents(toc, title, id) {
  if (toc) {
    toc.push(
      <a key={id} href={"#"+id}>{title}</a>
    );
  }
}

function makeSections() {
  var toc = [];
  var stuff = sections.map(item => item(toc));
  return (
    <>
      <Section title="Contents">
        <div className="tableOfContents">
          {toc}
        </div>
      </Section>
      {stuff}
    </>
  );
}

const sections = [
  // engineering
  (toc) => {
    var title = "Engineering Projects";
    var sid = "engr";
    addToTableOfContents(toc, title, sid);
    return (
      <Section key={title} title={title} id={sid}>
        <SubSection title="Senior Design">
          <p>
            I am currently the team manager of 6 students working with Daimler
            Trucks of North America. Our project is researching the usefulness of
            using the Microsoft Hololens for the truck servicing intake process.
            We are developing a proof of concept in{" "}
            <abbr title="mixed-reality">MR</abbr> using Unity and Microsoft&apos;s{" "}
            <abbr title="mixed-reality toolkit">MRTK</abbr>.
          </p>
          <div className="imgGrid oneCol">
            <div>
              <Image src={seniorDesignCube} layout="responsive" unoptimized="true"/>
            </div>
          </div>
        </SubSection>
        <SubSection title="Servant Engineering">
          <p>
            Our team explored the design challenge of helping visually impaired
            individuals navigate the world around them. As part of our
            human-centered design approach to tackling this challenge, we
            developed a high-level user story to frame our design efforts: &quot;As a
            visually impaired person, I want to identify common objects and read
            text and symbols on signs as I navigate my environment.&quot; <a
              href="https://cs.georgefox.edu/about/research/computer-vision-for-the-visually-impaired/"
              target="_blank"
              rel="noreferrer"
            >Read more here.</a>
          </p>
          <div className="imgGrid threeCol">
            <div>
              <Image src={teamNuPrototype} layout="responsive" unoptimized="true"/>
            </div>
            <div>
              <Image src={teamNuDetection} layout="responsive" unoptimized="true"/>
            </div>
            <div className="hideWhenSmall">
              <Image src={teamNuQR} layout="responsive" unoptimized="true"/>
            </div>
          </div>
        </SubSection>
      </Section>
    );
  },
  // web design
  (toc) => {
    var title = "Web Design";
    var sid = "web";
    addToTableOfContents(toc, title, sid);
    return(
      <Section key={title} title={title} id={sid}>
        <SubSection title="Web Design Class" page="web-design">
          <p>
          The following are school projects from ARTD 270, which focused
          on <abbr title="user interface">UI</abbr> design, page layout, and usability.
          </p>
          <div className="imgGrid twoCol">
            <div><Image src={screenshotBagels} layout="responsive" unoptimized="true"/></div>
            <div><Image src={userFlows} layout="responsive" unoptimized="true"/></div>
          </div>
        </SubSection>
        <SubSection title="Web Programming Class" page="web-programming">
          <p>
          The following are school projects from CSIS 304.
          In this class I learned about HTTP requests, HTML, CSS, JavaScript, PHP, REST APIs, and more.
          The class also required a landing page for our projects,
          which has been polished into the website you are now reading.
          </p>
          <div className="imgGrid twoCol">
            <div><Image src={screenshotZen} layout="responsive" unoptimized="true"/></div>
            <div><Image src={screenshotJS} layout="responsive" unoptimized="true"/></div>
          </div>
        </SubSection>
      </Section>
    );
  },
  // game development
  (toc) => {
    var title = "Game Development";
    var sid = "games";
    addToTableOfContents(toc, title, sid);
    return (
      <Section key={title} title={title} id={sid}>
        <div className="imgGrid twoCol">
          <div>
            <p>
              One of my passions is game development, which unites several of my
              other hobbies. I love game jams and small indie projects. You can see
              all my published games on <a href="https://supergobo.itch.io/" target="_blank" rel="noreferrer">my itch.io page</a>.
            </p>
            <p>
              My most notable game is an entry for <a href="https://ldjam.com/" target="_blank" rel="noreferrer"> Ludum Dare</a> 43,
              a 48-hour game making competition. Out of a total of 761
              competition entries, my game <em>Judgement of a Priest</em> placed
              27th for audio and 39th for graphics.
            </p>
          </div>
          <div className="imgGrid oneCol">
            <div className="hideWhenSmall"><Image src={gamePriest0} layout="responsive" unoptimized="true"/></div>
            <div><Image src={gamePriest1} layout="responsive" unoptimized="true"/></div>
          </div>
        </div>
        <div className="imgGrid threeCol">
          <div>
            <Image src={gameCR} layout="responsive" unoptimized="true"/>
          </div>
          <div>
            <Image src={gameBBB} layout="responsive" unoptimized="true"/>
          </div>
          <div>
            <Image src={gameED} layout="responsive" unoptimized="true"/>
          </div>
        </div>
      </Section>
    );
  },
  // graphic design
  (toc) => {
    var title = "Graphic Design";
    var sid = "graphic-design";
    addToTableOfContents(toc, title, sid);
    return (
      <Section key={title} title={title} id={sid}>
        <SubSection title="Typography Class" page="typography">
          <p>
          This page showcases some school projects from ARTD 220. The class
          explored type anatomy, page layout, hierarchy, and more.
          </p>
          <div className={styles.typographyPreview}>
            <div><Image src={poster} layout="responsive" unoptimized="true"/></div>
            <div><Image src={anatomy1} layout="responsive" unoptimized="true"/></div>
            <div><Image src={anatomy2} layout="responsive" unoptimized="true"/></div>
            <div><Image src={letter} layout="responsive" unoptimized="true"/></div>
          </div>
        </SubSection>
        <SubSection title="Creative Suite Class" page="creative-suite">
          <p>
          This page showcases some school projects from ARTD 110. The class taught
          the fundamentals of Adobe Creative Cloud using Photoshop, Illustrator,
          and InDesign.
          </p>
          <div className={styles.creativeSuitePreview}>
            <div><Image src={coaster} layout="responsive" unoptimized="true"/></div>
            <div className="hideWhenSmall"><Image src={bizCard} layout="responsive" unoptimized="true"/></div>
            <div><Image src={spotify} layout="responsive" unoptimized="true"/></div>
          </div>
        </SubSection>
      </Section>
    );
  },
  // music
  (toc) => {
    var title = "Music";
    var sid = "music";
    addToTableOfContents(toc, title, sid);
    return (
      <Section key={title} title={title} id={sid}>
        <p>
        Some of my currently published music, representing a small selection
        of the hundreds of songs I have composed and produced.
        </p>
        <div className="imgGrid twoCol" style={{marginTop:"1.5rem"}}>
          <iframe id="shoobie" src="https://open.spotify.com/embed/artist/6YrSdl1dy1dDxZETIxW7n5" allowtransparency="true" allow="encrypted-media" style={{border:"none", width:"100%", height:"26rem"}}/>
          <iframe className="hideWhenSmall" id="newbkegels" src="https://bandcamp.com/EmbeddedPlayer/track=1706869695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless style={{border:"none", width:"100%", height:"26rem"}}><a href="https://thenewbkegels.bandcamp.com/track/come-thou-fount">Come Thou Fount by The Newbkegels</a></iframe>
        </div>
      </Section>
    );
  },
  // contact
  (toc) => {
    var title = "Contact";
    var sid = "contact";
    addToTableOfContents(toc, title, sid);
    return (
      <Section key={title} title={title} id={sid}>
        <div className="tableOfContents">
        <a href="mailto:rylanschubkegel@gmail.com" target="_blank" rel="noreferrer">rylanschubkegel@gmail.com</a>
        <a href="https://www.linkedin.com/in/rschubkegel/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/rschubkegel/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </Section>
    );
  }
]