import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="mt-auto pb-auto navbar navbar-expand-lg bg-light ">
      <div className="mx-4">
        <small>Copyright &copy; Josef Hedblom 2022</small>
      </div>
      <div className="nav">
        <a
          className="nav-link"
          href="https://github.com/josefhedblom/setlist_to_playlist"
          target="_blank"
        >
          Github
        </a>
        <a
          className="nav-link"
          href="https://twitter.com/JosefHedblom"
          target="_blank"
        >
          Twitter
        </a>
        <a className="nav-link" href="https://josefhedblom.se" target="_blank">
          Contact
        </a>
        <a className="nav-link" href="https://www.setlist.fm/" target="_blank">
          Setlist.fm
        </a>
        <a className="nav-link" href="https://open.spotify.com" target="_blank">
          Spotify
        </a>
        <Link className="nav-link" to="/release-notes">
          Release notes
        </Link>
      </div>
    </footer>
  );
};
