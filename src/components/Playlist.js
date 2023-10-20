import React from "react";
import NamePlaylist from "./NamePlaylist";
import SaveToSpotifyButton from "./SaveToSpotifyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Playlist = ({ tracks, removeFromPlaylist }) => {

  const [playlistname, setplaylistname] = React.useState("");

  const resultList = tracks.map((item, i) => (
    <tr key={i}>
      <td>{item.trackName.replace(/["]+/g, "")}</td>
      <td>{item.artistName.replace(/["]+/g, "")}</td>
      <td>{item.albumName.replace(/["]+/g, "")}</td>
      {/* <td>{item.uri}</td> */}
      <td>
        <button className="circle" onClick={() => removeFromPlaylist(i)}>
          <FontAwesomeIcon icon={faMinus} size="lg" />
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
