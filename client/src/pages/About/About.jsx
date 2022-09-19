import { SpotifyAbout } from "./Spotify/SpotifyAbout";
import { SetlistfmAbout } from "./Setlistfm/SetlistfmAbout";
export const About = () => {
  return (
    <div className="about">
      <SpotifyAbout />
      <SetlistfmAbout />
    </div>
  );
};
