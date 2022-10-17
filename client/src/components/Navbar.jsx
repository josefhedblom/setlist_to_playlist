import { Link } from "react-router-dom";
export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("playlistId");
    window.location.reload(true);
  };

  const toggleNavbar = () => {
    const navLinks = document.querySelector(".navbar-links");
    navLinks.classList.toggle("active");
  };

  return (
    <nav id="navbar">
      <a href="#" class="toggle-button" onClick={() => toggleNavbar()}>
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
        <span class="nav-bar"></span>
      </a>
      <ul className="navbar-links">
        <li>
          <Link className="link__hover__navbar" to="/about">
            About
          </Link>
        </li>
        <li>
          <a className="link__hover__navbar" href="https://josefhedblom.se" target="_blank">
            Contact
          </a>
        </li>
        <li>
          <a className="link__hover__navbar" href="https://github.com/josefhedblom" target="_blank">
            Github
          </a>
        </li>
        <li>
          <Link className="link__hover__navbar" to="/release-notes">
            Release notes
          </Link>
        </li>
        <li>
          <a className="link__hover__navbar" href="https://developer.spotify.com" target="_blank">
            Spotify Api
          </a>
        </li>
        <li>
          <a
            className="link__hover__navbar"
            href="https://api.setlist.fm/docs/1.0/index.html"
            target="_blank"
          >
            Setlist FM API
          </a>
        </li>
        {localStorage.getItem("access_token") ? (
          <li onClick={() => logout()}>
            <a className="link__hover__navbar" id="logout-btn">
              Logout
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
