import CONFIG from "../../config/index";
import SpotifyLogo from "../../assets/Spotify_Logo_RGB_Green.png";
import SpotifyIcon from "../../assets/Spotify_Icon_RGB_White.png";
export function Login() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Setlist to Playlist</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          With Setlist to Playlist you can search for artists' concerts and
          create Spotify playlists from their setlist!
        </p>
        <div>
          <a
            className="btn btn-lg"
            style={{
              backgroundColor: "#1DB954",
              color: "#fff",
              width: "100%",
              borderRadius: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              padding: "1rem",
            }}
            href={CONFIG.URL}
          >
            <img
              src={SpotifyIcon}
              alt="Spotify-logo"
              style={{ width: "80px", height: "80px" }}
            />
            Login in Spotify
          </a>
        </div>
      </div>
    </div>
  );
}
