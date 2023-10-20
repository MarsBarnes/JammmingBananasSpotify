import React from "react";
import { useState } from "react";
import { findAccessToken } from "../util/getToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NamePlaylist({ playlistname, setplaylistname }) {
  // const inputRef = React.useRef(null);

  const [name , setName] = useState("");

  const [nameButtonClicked, setNameButtonClicked] = useState(false);

  const handleNameButtonClick = () => {
    setNameButtonClicked(true);
    setplaylistname(name);
    setNameButtonClicked(false); // Reset the search button state after update
    const accessToken = findAccessToken();
    if (!accessToken) {
      toast("Sign into Spotify to name a playlist");
      return;
    }
  };

  function handleChange(event) {
    setName(event.target.value);
    // inputRef.current.focus()
  }

  const handleKeyDown = (event) => {
    
    if (event.key === "Enter" || nameButtonClicked) {
      const accessToken = findAccessToken();
      if (!accessToken) {
        toast("Sign into Spotify to name a playlist");
      }
      setplaylistname(name)
    }
  };


    return (
      <div className="NamePlaylist">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name your playlist here!"
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="mr-sm-2 p-2 bd-highlight"
          // ref="inputRef"
        />
        <button
          type="button"
          className="nameBtn greyBtn"
          onClick={handleNameButtonClick}
        >
          Name
        </button>
      </div>
    );
  }



