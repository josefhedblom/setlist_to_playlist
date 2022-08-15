import { useState, useEffect, useContext } from "react";
import { Result } from "../Result/Result";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SearchResultList from "../../assets/serach-result-list.png";
import SearchResultListTracks from "../../assets/serach-result-list-tracks.png";
import ModalContext from "../../context/ModalProvider";

export function Dashboard() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState([]);
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const handleClose = () => {
    setIsOpen(false);
  };

  const fetchData = async (search) => {
    try {
      const data = await fetch("/api/setlist/artists/" + search);
      if (data.status === 429) {
        setError(data.statusText);
      }
      const response = await data.json();
      setResult(response);
    } catch {
      (error) => {
        console.log(error);
      };
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(search);
    setSearch("");
  };
  return (
    <div>
      <Modal show={isOpen} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Setlist to Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            With Setlist to Playlist you can search for artists concerts and create Spotify
            playlists from their setlist!
          </p>
          <h5>Search</h5>
          <p>Search for an artist or band and get setlists from the latest concerts.</p>
          <p>Example: Bob Dylan</p>
          <div>
            <img style={{ width: "100%" }} src={SearchResultList} alt="SearchResultList" />
          </div>
          <br />
          <div>
            <h5>Create playlist and add tracks</h5>
            <p>
              Click the 'Create Playlist' button to create a new playlist
              <br />
              Click the 'Add to playlist' button to add track to the playlist
            </p>
            <img
              style={{ width: "100%" }}
              src={SearchResultListTracks}
              alt="SearchResultListTracks"
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <form onSubmit={handleSubmit}>
        <div className="input-group mt-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search SetlistFm"
            aria-label="Search SetlistFm"
            aria-describedby="button-addon2"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="btn btn-md btn-success" type="submit">
            Search
          </button>
        </div>
      </form>
      <div>{result.length > 0 && error.length < 1 ? <Result data={result} /> : <p>{error}</p>}</div>
    </div>
  );
}
