import React from "react";
import NamePlaylist from "./NamePlaylist";
import SaveToSpotifyButton from "./SaveToSpotifyButton";

const Playlist = ({ tracks, removeFromPlaylist }) => {

  const [playlistname, setplaylistname] = React.useState("");

  const resultList = tracks.map((item) => (
    <tr key={item.id}>
      <td>{item.trackName.replace(/["]+/g, "")}</td>
      <td>{item.artistName.replace(/["]+/g, "")}</td>
      <td>{item.albumName.replace(/["]+/g, "")}</td>
      {/* <td>{item.uri}</td> */}
      <td>
        <button className="greyBtn" onClick={() => removeFromPlaylist(item)}>
          Remove
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <div className="NamePlaylist">
        <NamePlaylist
          playlistname={playlistname}
          setplaylistname={setplaylistname}
        />
      </div>
      <div className="playlistTable">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              {/* <th>uri</th> */}
              <th></th>
            </tr>
          </thead>
          {resultList.length ? (
            <tbody>{resultList}</tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="4">Add songs from the search</td>
              </tr>
            </tbody>
          )}
        </table>
        <SaveToSpotifyButton tracks={tracks} playlistname={playlistname} />
      </div>
    </>
  );
};

export default Playlist;
