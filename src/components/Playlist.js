import React from "react";
import NamePlaylist from "./NamePlaylist";
import SaveToSpotifyButton from "./SaveToSpotifyButton";

const Playlist = ({ tracks, removeFromPlaylist }) => {
  console.log({ tracks });

  const [playlistname, setplaylistname] = React.useState("");

  const resultList = tracks.map((item) => (
    <tr key={item.id}>
      <td>{item.trackName.replace(/["]+/g, "")}</td>
      <td>{item.artistName.replace(/["]+/g, "")}</td>
      <td>{item.albumName.replace(/["]+/g, "")}</td>
      {/* <td>{item.uri}</td> */}
      <td>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => removeFromPlaylist(item)}
        >
          Remove
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <NamePlaylist playlistname={playlistname} setplaylistname={setplaylistname} />
      <div>
        <table className="table table-striped table-dark playlistTable">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              {/* <th>uri</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>{resultList}</tbody>
        </table>
        <SaveToSpotifyButton tracks={tracks} playlistname={playlistname} />
      </div>
    </>
  );
};

export default Playlist;
