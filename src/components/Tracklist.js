import React from "react";
import { useSearchResults } from "../hooks/useSearchResults";

const Tracklist = ({ searchQuery, addToPlaylist }) => {
  const { error, fetching, json } = useSearchResults(searchQuery);
  console.log(json, fetching, error);

  if (error) {
    return <div>{error}</div>;
  }

  if (fetching) {
    return <div>Loading...</div>;
  }

  if (!json) {
    return <div>no data for some reason</div>;
  }

  let list = [];

  for (const item of json.tracks.items) {
    let trackName = JSON.stringify(item.name);
    let artistName = JSON.stringify(item.artists[0].name);
    let albumName = JSON.stringify(item.album.name);
    let id = JSON.stringify(item.id);
    let uri = JSON.stringify(item.uri);
    list.push({ trackName, artistName, albumName, id, uri });
    // console.log(list)
  }
  const resultList = list.map((item) => (
    <tr key={item.id}>
      <td>{item.trackName.replace(/["]+/g, "")}</td>
      <td>{item.artistName.replace(/["]+/g, "")}</td>
      <td>{item.albumName.replace(/["]+/g, "")}</td>
      {/* <td>{item.uri}</td> */}
      <td>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => addToPlaylist(item)}
        >
          Add
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h1 className="NameTracklist">Tracklist</h1>
      {/* <h1>Tracklist (searching for {searchQuery})</h1> */}
      <div>
        <table className="table table-striped table-dark tracklistTable">
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
      </div>
    </>
  );
};

export default Tracklist;
