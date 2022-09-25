import React, { useState } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";
import axios from "axios";
export const CreatePlaylistButton = ({ data }) => {
  const [show, setShow] = useState(false);
  const [playlistLink, setPlaylistLink] = useState("");

  const accessToken = SpotifyContext();

  const createPlaylist = async () => {
    data.accessToken = accessToken;
    axios
      .post("/api/spotify/session/create-playlist", { data })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setPlaylistLink(response.data.playlistId.playlistId);
          localStorage.setItem("playlistId", response.data.playlistId.playlistId);
          setShow(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setShow(false);
      });
  };

  return (
    <>
      <section className="accordion__content__button">
        <button onClick={() => createPlaylist(songs.name)}>Create playlist</button>
      </section>
    </>
  );
};

/* 
<ListGroup
        variant="flush"
        as="li"
        className="d-flex justify-content-center align-items-center"
      >
        <ListGroup.Item as="li">
          <Button variant="primary" onClick={() => createPlaylist()}>
            Create Playlist
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Playlist:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>
                {data.artist} live @ {data.venue} | {data.eventDate}
              </h5>
              <a href={`https://open.spotify.com/playlist/${playlistLink}`} target="_blank">
                View Spotify playlist{" "}
              </a>{" "}
              |{" "}
              <a href={`${data.url}`} target="_blank">
                View setlist on Setlist.fm{" "}
              </a>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </ListGroup.Item>
      </ListGroup>
*/
