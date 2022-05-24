import Image from "next/image";
import Section from "../components/section";
import SubSection from "../components/subSection";
import NavBar from "../components/navBar";

import bagels from "../public/images/web-design/bagels-screenshot-full.png";
import virtualSketches from "../public/images/web-design/virtual-card-sketches.jpg";
import virtualFinal from "../public/images/web-design/virtual-card-final.jpg";
import personaMark from "../public/images/web-design/persona-mark.jpg";
import personaJanet from "../public/images/web-design/persona-janet.jpg";
import userFlow from "../public/images/web-design/user-flow.jpg";
import siteMap from "../public/images/web-design/site-map.jpg";
import styleTile from "../public/images/web-design/style-tile.png";
import wireframeDesktop from "../public/images/web-design/wireframe-desktop.jpg";
import wireframeMobile from "../public/images/web-design/wireframe-mobile.jpg";
import mockupDesktop from "../public/images/web-design/mockup-desktop.png";
import mockupMobile from "../public/images/web-design/mockup-mobile.png";

export default function WebDesign() {
  return (
    <div className="gridColumn">
      <NavBar page="Web Design"/>
      <div>
        <h1>Web Design</h1>
        <p>
          This class focused on the design aspects of UX rather than the
          technology. The class encouraged the process of sketching,
          wireframing, and then building a functional website. All projects were
          completed during the spring 2021 semester.
        </p>
      </div>
      <Section title="Product Page">
        <div className="textByImg">
          <p>
            This was probably my favorite project. Our task was to create a
            product launch page, but I requested to make a &quot;product&quot;
            page for bagels instead of a real product. Choosing tasty images and
            adding silly text made this project tons of fun, but I still learned
            a lot because we were required to use <a href="https://getbootstrap.com/">Bootstrap</a> to
            make the final page.
          </p>
          <div>
            <Image src={bagels} layout="responsive" unoptimized="true" />
          </div>
        </div>
      </Section>
      <Section title="Virtual Card">
      <div className="textByImgRev">
        <div><Image src={virtualFinal} layout="responsive" unoptimized="true" /></div>
        <div>
          <p>
            This project was designed to learn/practice{" "}
            <abbr title="hyper-text markup language">HTML</abbr> and{" "}
            <abbr title="cascading style sheets">CSS</abbr>. Everything was coded
            by hand, so we didn&apos;t spend time polishing it (making it
            responsive, adding transitions, etc.) because the class is geared
            toward design students.
          </p>
          <div className="imgGrid oneCol" style={{marginTop:"2rem"}}>
            <div><Image src={virtualSketches} layout="responsive" unoptimized="true" /></div>
          </div>
        </div>
      </div>
      </Section>
      <Section title="Website Redesign">
        <p>
          The first task of this project was to find a website to redesign. I
          chose the website of the Vatican for two reasons: 1) I currently
          attend an Anglican church and have an interest in the relationship
          between traditional Christianity and technology, and 2) the website is
          severely outdated and in need of renovation. My design process focused
          on the potential users of the site and how to help them accomplish
          their goals.
        </p>
        <SubSection title="User Personas">
          <div className="imgGrid twoCol">
            <div><Image src={personaMark} layout="responsive" unoptimized="true" /></div>
            <div><Image src={personaJanet} layout="responsive" unoptimized="true" /></div>
          </div>
        </SubSection>
        <SubSection title="User Flow">
          <div className="imgGrid oneCol">
            <div><Image src={userFlow} layout="responsive" unoptimized="true" /></div>
          </div>
        </SubSection>
        <SubSection title="Site Map">
          <div className="imgGrid oneCol">
            <div><Image src={siteMap} layout="responsive" unoptimized="true" /></div>
          </div>
        </SubSection>
        <SubSection title="Style Tile">
          <div className="imgGrid oneCol">
            <div><Image src={styleTile} layout="responsive" unoptimized="true" /></div>
          </div>
        </SubSection>
        <SubSection title="Wireframes">
          <div className="imgGrid twoCol" style={{gridTemplateColumns:"auto 25%", gap:"2rem", alignItems:"center"}}>
            <div><Image src={wireframeDesktop} layout="responsive" unoptimized="true" /></div>
            <div><Image src={wireframeMobile} layout="responsive" unoptimized="true" /></div>
          </div>
        </SubSection>
        <SubSection title="Final Mockups">
          <div className="imgGrid twoCol" style={{gridTemplateColumns:"auto 25%", gap:"2rem", alignItems:"center"}}>
            <div><Image src={mockupDesktop} layout="responsive" unoptimized="true" /></div>
            <div><Image src={mockupMobile} layout="responsive" unoptimized="true" /></div>
          </div>
        </SubSection>
      </Section>
    </div>
  );
}
