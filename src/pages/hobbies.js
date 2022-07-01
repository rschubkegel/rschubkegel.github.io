import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import GameDevContainer from "../components/project-containers/gameDev";
import MusicContainer from "../components/project-containers/music";
import PaintingContainer from "../components/project-containers/painting";
import AnimationContainer from "../components/project-containers/animation";

const contents = [
  GameDevContainer(),
  MusicContainer(),
  PaintingContainer(),
  AnimationContainer(),
];

const HobbiesPage = () => {
  return (
    <Layout>
      <h1><Link to='/'>Home</Link> &gt; Hobbies</h1>
      <div className="flex-col">{contents.map((e) => e)}</div>
    </Layout>
  );
};

export default HobbiesPage;
