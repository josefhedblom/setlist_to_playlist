import { Link } from "react-router-dom";
export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("playlistId");
    window.location.reload(true);
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Setlist to Playlist
          </Link>

          <div className="d-flex">
            <Link className="nav-link" to="/about">
              About
            </Link>
            {localStorage.getItem("access_token") ? (
              <button
                onClick={() => logout()}
                className="btn btn-outline-success"
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
};
