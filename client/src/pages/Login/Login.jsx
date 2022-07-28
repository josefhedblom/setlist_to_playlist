import { CONFIG } from "../../config/env.config";
import SpotifyLogo from "../../assets/Spotify_Icon_RGB_White.png";
export function Login() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Setlist to Playlist</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Create a Spotify playlist from Setlist.fm!</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a
            className="btn btn-lg"
            style={{ backgroundColor: "#1DB954", color: "#fff" }}
            href={CONFIG.URL_DEV}
          >
            <img
              src={SpotifyLogo}
              alt="Spotify-logo"
              style={{ width: "90px", height: "100%", padding: "1rem" }}
            />
            Login in with Spotify
          </a>
        </div>
      </div>
    </div>
  );
}
