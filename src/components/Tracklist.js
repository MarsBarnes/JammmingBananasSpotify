import React from "react";
import { useSearchResults } from "../hooks/useSearchResults";
import SearchBar from "./SearchBar";

const Tracklist = ({ setSearchQuery, searchQuery, addToPlaylist }) => {
  // const { error, fetching, json } = useSearchResults(searchQuery);
  const { json } = useSearchResults(searchQuery);

  // if (fetching || !json) {
  //   return (
  //     <>
  //       <div className="flexSearch">
  //         {error ? (
  //           <h1 className="NameTracklist">Search</h1>
  //         ) : (
  //           <h1 className="NameTracklist">Search Results</h1>
  //         )}
  //         <SearchBar
  //           searchQuery={searchQuery}
  //           setSearchQuery={setSearchQuery}
  //         />
  //       </div>
  //       <div>
  //         <table className="table table-striped table-dark tracklistTable">
  //           <thead>
  //             <tr>
  //               <th>Song</th>
  //               <th>Artist</th>
  //               <th>Album</th>
  //               {/* <th>uri</th> */}
  //               <th></th>
  //             </tr>
  //           </thead>
  //           <tbody></tbody>
  //         </table>
  //       </div>
  //     </>
  //   );
  // }


  let list = [];
  let resultList = []

  if (json?.tracks.items) { 
    for (const item of json.tracks.items) {
      let trackName = JSON.stringify(item.name);
      let artistName = JSON.stringify(item.artists[0].name);
      let albumName = JSON.stringify(item.album.name);
      let id = JSON.stringify(item.id);
      let uri = JSON.stringify(item.uri);
      list.push({ trackName, artistName, albumName, id, uri });
    }
    resultList = list.map((item) => (
      <tr key={item.id}>
        <td>{item.trackName.replace(/["]+/g, "")}</td>
        <td>{item.artistName.replace(/["]+/g, "")}</td>
        <td>{item.albumName.replace(/["]+/g, "")}</td>
        {/* <td>{item.uri}</td> */}
        <td>
          <button
            className="greyBtn"
            onClick={() => addToPlaylist(item)}
          >
            Add
          </button>
        </td>
      </tr>
    ));
}

  return (
    <>
      <div className="NameTracklist">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="tracklistTable">
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
                <td colSpan="4">Search for results</td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Tracklist;
