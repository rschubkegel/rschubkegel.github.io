import * as React from "react";
import ProjectContainer from "../projectContainer";

const MusicContainer = () => {
  return (
    <ProjectContainer title="Music Production">
      <p>
        Some of my currently published music, representing a small selection of
        hundreds of songs I have made. I started producing as a young teenager
        under the alias{" "}
        <a href="https://open.spotify.com/embed/artist/6YrSdl1dy1dDxZETIxW7n5">
          Shoobie Doobie
        </a>{" "}
        (a nickname my coach gave me when I played baseball). Most recently I have
        begun producing music with my wife under the alias{" "}
        <a href="https://thenewbkegels.bandcamp.com">The Newbkegels</a>.
      </p>
      <div className="flex-row-responsive">
        <iframe
          title="shoobie-spotify"
          id="shoobie"
          src="https://open.spotify.com/embed/artist/6YrSdl1dy1dDxZETIxW7n5"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <iframe
          title="newkegels-bandcamp"
          id="newbkegels"
          src="https://bandcamp.com/EmbeddedPlayer/track=1706869695/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
          seamless=""
        >
          <a href="https://thenewbkegels.bandcamp.com/track/come-thou-fount">
            Come Thou Fount by The Newbkegels
          </a>
        </iframe>
      </div>
    </ProjectContainer>
  );
};

export default MusicContainer;
