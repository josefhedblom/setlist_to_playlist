import CONFIG from "../../config/index";
import SpotifyIcon from "../../assets/Spotify_Logo_RGB_Black.png";
export function Login() {
  return (
    <>
      <section className="login-container">
        <img id="loginLogo" src={SpotifyIcon} alt="Spotify Logo" />
      </section>
      <section className="login-container">
        <a id="loginBtn" href={CONFIG.URL}>
          login with spotify
        </a>
      </section>
    </>
  );
}
