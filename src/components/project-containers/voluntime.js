import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ProjectContainer from "../projectContainer";

const VoluntimeContainer = (level) => {
  return (
    <ProjectContainer
      level={level}
      title="Voluntime"
      linkText="view site"
      linkDest="https://volunti.me/"
    >
      <div>
        <p>
          Voluntime is 1st place winner of George Fox University&apos;s second
          annual Code Jam, a 30-hour coding competition. Voluntime is a platform
          that connects volunteers to service events, allowing people to easily
          find ways to help their community. I designed the front-end in{" "}
          <Link to="https://www.figma.com/">Figma</Link> and implemented it
          using <Link to="https://reactjs.org/">React</Link> and{" "}
          <Link to="https://mui.com/">Material UI</Link>.
        </p>
        <p>
          Check out the <Link to="https://volunti.me/">Voluntime website</Link>,
          the{" "}
          <Link to="https://devpost.com/software/top-secret-team-3-project-title">
            Code Jam competition submission
          </Link>
          , or the{" "}
          <Link to="https://github.com/Voluntime">GitHub organization</Link>.
        </p>
      </div>
      <div className="flex-row">
        <StaticImage
          src="../../images/voluntime/voluntime1.jpg"
          alt="Voluntime login screen"
        />
        <StaticImage
          src="../../images/voluntime/voluntime2.jpg"
          alt="Voluntime main feed"
        />
      </div>
    </ProjectContainer>
  );
};

export default VoluntimeContainer;
