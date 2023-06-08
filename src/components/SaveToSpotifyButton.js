import React from "react";
import useUserId from "../hooks/useUserId";
import { findAccessToken } from "../util/getToken";

function SaveToSpotifyButton({ tracks, playlistname}) {
  const { error, fetching, json } = useUserId();
  
  // console.log(json, fetching, error);

  async function handleClick() {
    const userId = json.id;
    console.log(userId);
    const accessToken = findAccessToken();
    console.log(accessToken);
    const res = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // TODO:Replace IDIDIT with playlist name from NamePlaylist here
          name: playlistname,
          description: "New playlist description",
          public: false,
        }),
      }
    );

    console.log(res.status);
    const json2 = await res.json();
    console.log(`playlist id: ${json2.id}`);
    console.log({ tracks });

    const uris = tracks.map((item) => item.uri.replace(/["]+/g, ""));
    console.log(`uris i am asking for : ${uris}`);

    const res2 = await fetch(
      `https://api.spotify.com/v1/playlists/${json2.id}/tracks?uris=${uris}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        // TODO: lookinto how he numbers below work
        body: JSON.stringify({
          range_start: 1,
          insert_before: 3,
          range_length: 2,
        }),
      }
    );

    console.log(res2.status);
    const json3 = await res2.json();
    console.log(json3);
  }

  return (
    <button
      type="button"
      className="saveButton btn btn-outline-success my-2 my-sm-0"
      onClick={handleClick}
    >
      Save "{playlistname}" To Spotify
    </button>
  );
}

export default SaveToSpotifyButton;
