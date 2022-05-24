import * as React from "react";
import ProjectContainer from "../projectContainer";

import walkCycle from "../../images/animations/walk-cycle.gif";
import zoetrope from "../../images/animations/zoetrope.gif";
import circleBoogie from "../../images/animations/circle-boogie.gif";
import sixFt from "../../images/animations/six-ft-apart.gif";
import jack from "../../images/animations/jack-in-the-box.gif";
import digiFire from "../../images/animations/fire.gif";
import paperFire from "../../images/animations/fire-paper.gif";
import explo from "../../images/animations/explosion.gif";
import bunny from "../../images/animations/bunny.gif";
import lipSync from "../../images/animations/monty-python.gif";
import wave from "../../images/animations/wave.gif";

const AnimationContainer = () => {
  return (
    <ProjectContainer title="Animation">
      <p>
        Aside from game graphics, I&apos;ve created animations for a few different
        classes in high school and college. Here is a collection of some of my
        favorites.
      </p>
      <div className="flex-row flex-centered">
        <img
          src={walkCycle}
          alt="physical hand-drawn walk cycle"
          style={{ maxWidth: "31.3%" }}
        />
        <img
          src={zoetrope}
          alt="physical hand-drawn paper airpline zoetrope"
          style={{ maxWidth: "31.3%" }}
        />
        <img
          src={circleBoogie}
          alt="digital hand-drawn horror circle boogie"
          style={{ maxWidth: "31.3%" }}
        />
      </div>
      <div className="flex-row flex-centered">
        <img
          src={sixFt}
          alt="stop-motion animation"
          style={{ maxWidth: "45%" }}
        />
        <img
          src={jack}
          alt="digital hand-drawn character scared by a jack-in-the-box animation"
          style={{ maxWidth: "52%" }}
        />
      </div>
      <div className="flex-row flex-centered">
        <img
          src={digiFire}
          alt="digital hand-drawn fire animation"
          style={{ maxWidth: "15%" }}
        />
        <img
          src={paperFire}
          alt="physical paper fire animation"
          style={{ maxWidth: "30%" }}
        />
        <img
          src={explo}
          alt="digital hand-drawn explosion animation"
          style={{ maxWidth: "50%" }}
        />
      </div>
      <div className="flex-row flex-centered">
        <img
          src={bunny}
          alt="digital hand-drawn bunny animation"
          style={{ maxWidth: "33%" }}
        />
        <img
          src={lipSync}
          alt="digital hand-drawn lip-sync character animation"
          style={{ maxWidth: "22%" }}
        />
        <img
          src={wave}
          alt="digital hand-drawn waving character animation"
          style={{ maxWidth: "40%" }}
        />
      </div>
    </ProjectContainer>
  );
};

export default AnimationContainer;
