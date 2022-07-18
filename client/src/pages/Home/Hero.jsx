export const Hero = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Setlist to Playlist</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Create a Spotify playlist from Setlist.fm!</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button className="btn btn-primary btn-lg px-4 gap-3">
            Login with Spotify
          </button>
        </div>
      </div>
    </div>
  );
};
