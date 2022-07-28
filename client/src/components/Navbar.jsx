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
          <a className="navbar-brand" href="/">
            Setlist to Playlist
          </a>
          <div className="d-flex" role="search">
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
