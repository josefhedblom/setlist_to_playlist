import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { SpotifyContext } from "../../context/SpotifyContext";
import axios from "axios";
export const SetListItem = ({ data }) => {
  const addToPlaylist = async (song) => {
    const id = localStorage.getItem("playlistId");
    const accessToken = SpotifyContext();
    data.song = song;
    (data.accessToken = accessToken), (data.id = id);
    axios
      .post("/api/spotify/session/add-to-playlist/", { data })
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <ListGroup variant="flush" as="ol" numbered>
      {data.set.map(({ song }) => {
        return song.map((songs, index) => {
          return (
            <ListGroup.Item key={index} as="li">
              {songs.name}{" "}
              <Button
                onClick={() => addToPlaylist(songs.name)}
                size="sm"
                variant="outline-secondary"
              >
                Add to playlist
              </Button>
            </ListGroup.Item>
          );
        });
      })}
    </ListGroup>
  );
};
