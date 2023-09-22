import React from "react";

export default function NamePlaylist({playlistname, setplaylistname}) {
  
  const inputRef = React.useRef(null);

  function handleChange(event) {
    setplaylistname(event.target.value);
  }
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div className="NamePlaylist">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Name your playlist here!"
        name="name"
        value={playlistname}
        className="h1"
        ref={inputRef}
      ></input>
      <span className="material-symbols-outlined" onClick={handleClick}>
        {" "}
        edit
      </span>
    </div>
  );
}

