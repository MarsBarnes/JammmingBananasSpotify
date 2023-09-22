import React from "react";
import { useSearchResults } from "../hooks/useSearchResults";

const Tracklist = ({ searchQuery, addToPlaylist }) => {
  const { error, fetching, json } = useSearchResults(searchQuery);
  console.log(json, fetching, error);

  if (error) {
    console.log({ error });
    return (
      <>
        <h1 className="NameTracklist">Search Results</h1>
        <div>
          <table className="table table-striped table-dark tracklistTable">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                {/* uncomment line below to display song uri */}
                {/* <th>uri</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </>
    );
  }

  if (fetching) {
    console.log("Loading...");
    return (
      <>
        <h1 className="NameTracklist">Search Results</h1>
        <div>
          <table className="table table-striped table-dark tracklistTable">
            <thead>
              <tr>
                <th>Song</th>
                <th>Artist</th>
                <th>Album</th>
                {/* uncomment line below to display song uri */}
                {/* <th>uri</th> */}
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </>
    );
  }

  if (!json) {
    console.log("no data for some reason");
    return (
      <>
        <h1 className="NameTracklist">Search Results</h1>
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
            <tbody></tbody>
          </table>
        </div>
      </>
    );
  }

  let list = [];

  for (const item of json.tracks.items) {
    let trackName = JSON.stringify(item.name);
    let artistName = JSON.stringify(item.artists[0].name);
    let albumName = JSON.stringify(item.album.name);
    let id = JSON.stringify(item.id);
    let uri = JSON.stringify(item.uri);
    list.push({ trackName, artistName, albumName, id, uri });
  }
  const resultList = list.map((item) => (
    <tr key={item.id}>
      <td>{item.trackName.replace(/["]+/g, "")}</td>
      <td>{item.artistName.replace(/["]+/g, "")}</td>
      <td>{item.albumName.replace(/["]+/g, "")}</td>
      {/* uncomment line below to display song uri */}
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
      <h1 className="NameTracklist">Search Results</h1>
      <div>
        <table className="table table-striped table-dark tracklistTable">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
              {/* uncomment line below to display song uri */}
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
