import React from "react";
import { useState } from "react";
import { findAccessToken } from "../util/getToken";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//resource used to help build SearchBar component  https://codingbeautydev.com/blog/react-get-input-value-on-enter/

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  
  const [messageBeingTyped, setMessageBeingTyped] = useState("");

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    setSearchQuery(messageBeingTyped);
    setSearchButtonClicked(false); // Reset the search button state after update
    const accessToken = findAccessToken();
    if (!accessToken) {
      toast("Sign into Spotify to search");
    }
  };

  const handleChange = (event) => {
    setMessageBeingTyped(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || searchButtonClicked) {
      const accessToken = findAccessToken();
      if (!accessToken) {
        toast("Sign into Spotify to search");
      }
      setSearchQuery(messageBeingTyped);
    }
  };

  return (
    <div >
      <input
        type="text"
        id="messageBeingTyped"
        name="messageBeingTyped"
        placeholder="Search"
        value={messageBeingTyped}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="mr-sm-2 p-2 bd-highlight"
      />
      <button
        type="button"
        className="nameBtn greyBtn"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
