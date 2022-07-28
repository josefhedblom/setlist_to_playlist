import SpotifyLogo from "../../../assets/Spotify_Logo_RGB_Green.png";
export const SpotifyAbout = () => {
  return (
    <div className="px-4 py-2 my-5 text-center">
      <img
        src={SpotifyLogo}
        alt="Spotify-logo"
        style={{ width: "300px", height: "100%", padding: "1rem" }}
      />
      <div className="col-lg-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <p>
            The Spotify API is used for authorization and for creating new
            playlists and add tracks. Please read the{" "}
            {
              <a href="https://developer.spotify.com" target="_blank">
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
