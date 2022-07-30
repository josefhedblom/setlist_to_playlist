import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import MyModal from "../../components/Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SpotifyContext } from "../../context/SpotifyContext";
import axios from "axios";
export const CreatePlaylistButton = ({ data }) => {
  const [show, setShow] = useState(false);
  const [playlistLink, setPlaylistLink] = useState("");

  const handleClose = () => setShow(false);
  const accessToken = SpotifyContext();

  const createPlaylist = async () => {
    data.accessToken = accessToken;
    axios
      .post("/api/spotify/session/create-playlist", { data })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setPlaylistLink(response.data.playlistId.playlistId);
          localStorage.setItem(
            "playlistId",
            response.data.playlistId.playlistId
          );
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
      <ListGroup
        variant="flush"
        as="ol"
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
              <a
                href={`https://open.spotify.com/playlist/${playlistLink}`}
                target="_blank"
              >
                View playlist{" "}
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
    </>
  );
};
