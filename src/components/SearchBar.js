import React from "react";
import { useState } from "react";
//USED THIS WEBSITE TO HELP BUILD THE SearchBar COMPONENT  https://codingbeautydev.com/blog/react-get-input-value-on-enter/

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [messageBeingTyped, setMessageBeingTyped] = useState("");

  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  const handleSearchButtonClick = () => {
    setSearchButtonClicked(true);
    setSearchQuery(messageBeingTyped);
    setSearchButtonClicked(false); // Reset the search button state after update
  };

  const handleChange = (event) => {
    setMessageBeingTyped(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || searchButtonClicked) {
      // Get input value
      setSearchQuery(messageBeingTyped);
    }
  };

  return (
    <div className="form-inline">
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
        className="btn btn-outline-success my-2 my-sm-0"
        onClick={handleSearchButtonClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
