import SpotifyLogo from "../../../assets/Spotify_Logo_RGB_Green.png";
export const SpotifyAbout = () => {
  return (
    <div>
      <div className="about-title">
        <img
          src={SpotifyLogo}
          alt="Spotify-logo"
          style={{ width: "200px", height: "100%", padding: "1rem" }}
        />
      </div>
      <div>
        <div>
          <p>
            The Spotify API is used for authorization and for creating new playlists and add tracks.
            Please read the{" "}
            {
              <a className="link__hover" href="https://developer.spotify.com" target="_blank">
                API Terms of Use carefully
              </a>
            }{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
};
