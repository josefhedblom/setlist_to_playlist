import { useId, useState } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";

import axios from "axios";
export const SetListItem = ({ data }) => {
  const songId = useId();
  const accessToken = SpotifyContext();
  const [playlistLink, setPlaylistLink] = useState("");
  const [show, setShow] = useState(false);

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
    <div className="accordion__content">
      <section className="accordion__content__button">
        <button onClick={() => createPlaylist()}>Create playlist</button>
      </section>
      <ol>
        {data.set.map(({ song }) => {
          return song.map((songs, index) => {
            return (
              <>
                <div className="divider">
                  <li key={songId}>{songs.name} </li>
                  <button className="add__btn" onClick={() => addToPlaylist(songs.name)}>
                    Add to playlist
                  </button>
                </div>
              </>
            );
          });
        })}
      </ol>
    </div>
  );
};
