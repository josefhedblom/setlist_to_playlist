import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { SpotifyContext } from "../../context/SpotifyContext";
import axios from "axios";
export const CreatePlaylistButton = ({ data }) => {
  const accessToken = SpotifyContext();
  const createPlaylist = async () => {
    axios
      .post("/api/spotify/session/create-playlist", { data, accessToken })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("playlistId", response.data.playlistId.playlistId);
      })
      .catch((error) => console.log(error));
  };
  return (
    <ListGroup
      variant="flush"
      as="ol"
      className="d-flex justify-content-center align-items-center"
    >
      <ListGroup.Item as="li">
        <Button
          onClick={() => createPlaylist()}
          size="sm"
          variant="outline-secondary"
        >
          Create playlist
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};
