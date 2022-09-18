import { Link } from "react-router-dom";
export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("playlistId");
    window.location.reload(true);
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://josefhedblom.se" target="_blank">
              Contact
            </a>
          </li>
          <li>
            <a href="https://github.com/josefhedblom" target="_blank">
              Github
            </a>
          </li>
          <li>
            <Link to="/release-notes">Release notes</Link>
          </li>
          <li>
            <a href="https://developer.spotify.com" target="_blank">
              Spotify Api
            </a>
          </li>
          <li>
            <a href="https://api.setlist.fm/docs/1.0/index.html" target="_blank">
              Setlist FM API
            </a>
          </li>
          {localStorage.getItem("access_token") ? (
            <li onClick={() => logout()}>
              <a id="logout-btn">Logout</a>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};
