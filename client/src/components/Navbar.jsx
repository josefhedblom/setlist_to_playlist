export const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("access_token");
    window.history.pushState({}, null, "/");
  };
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Setlist to Playlist</a>
          <div className="d-flex" role="search">
            <button onClick={logout} className="btn btn-outline-success">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
