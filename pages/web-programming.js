import Image from "next/image";
import Section from "../components/section";
import NavBar from "../components/navBar";

import trello from "../public/images/web-programming/trello.jpg";
import conway from "../public/images/web-programming/conway.jpg";
import zen from "../public/images/web-programming/zen.jpg";
import personal from "../public/images/web-programming/personal.jpg";

export default function WebProgramming() {
  return (
    <div className="gridColumn">
      <NavBar page="Web Programming"/>
      <div>
        <h1>Web Programming</h1>
        <p>
          This class focused on the technology of the web, including HTML, CSS,
          JavaScript, and PHP. It also covered HTTP requests and REST APIs.
        </p>
      </div>
      <Section title="REST API">
        <div className="textByImg">
          <div className="gridColumn">
            <p>
              The final class project had us interact with a web{" "}
              <abbr title="application programming interface">API</abbr>. Since
              I am a prolific Trello user, I chose to work with their interface.
              This project focused more on back-end development than front-end.
            </p>
            <p>
              <em>
                Note: I did not get this fully working due to my busy class
                schedule. However, I have since created a Python program that
                successfully interacts width Trello&apos;s REST API.
                <a href="https://github.com/rschubkegel/assignment-scraper">
                  Check it out here!
                </a>
              </em>
            </p>
          </div>
          <div>
            <Image src={trello} layout="responsive" unoptimized="true" />
          </div>
        </div>
      </Section>
      <Section title="Interactive JavaScript">
        <div className="textByImgRev">
          <div>
            <Image src={conway} layout="responsive" unoptimized="true" />
          </div>
          <p>
            This is the first class project where JavaScript was required; our
            page just needed to be modified somehow by a script.
          </p>
        </div>
      </Section>
      <Section title="CSS Zen Garden">
      <div className="textByImg">
        <p>
          In order to practice using <abbr title="cascading style sheets">CSS</abbr>,
          we re-styled a pre-existing web page. We were allowed to style the page any way we
          wanted as long as we did not edit
          the <abbr title="hyper-text markup language">HTML</abbr> (aside from
          making relative links absolute).
        </p>
        <div><Image src={zen} layout="responsive" unoptimized="true" /></div>
        </div>
      </Section>
      <Section title="Personal Project">
      <div className="textByImgRev">
        <div><Image src={personal} layout="responsive" unoptimized="true" /></div>
        <p>
          The first project of the class required us to include 3 pages, a
          table, a list, and other basic{" "}
          <abbr title="hyper-text markup language">HTML</abbr> elements.
        </p>
        </div>
      </Section>
    </div>
  );
}
