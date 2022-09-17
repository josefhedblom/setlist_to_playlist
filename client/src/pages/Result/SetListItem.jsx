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
    <div className="accordion__content">
      <section className="button">
        <button onClick={() => addToPlaylist(songs.name)}>Save playlist</button>
      </section>
      <ol>
        {data.set.map(({ song }) => {
          return song.map((songs, index) => {
            return <li key={index}>{songs.name}</li>;
          });
        })}
      </ol>
    </div>
  );
};
