// import React from "react";

// export default function NamePlaylist({playlistname, setplaylistname}) {
  
//   const inputRef = React.useRef(null);

//   function handleChange(event) {
//     setplaylistname(event.target.value);
//   }
//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <div className="NamePlaylist">
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="Name your playlist here!"
//         name="name"
//         value={playlistname}
//         className="h1"
//         ref={inputRef}
//       ></input>
//       <span className="material-symbols-outlined" onClick={handleClick}>
//         {" "}
//         edit
//       </span>
//     </div>
//   );
// }
import React from "react";

export default function NamePlaylist({ playlistname, setplaylistname }) {
  // const inputRef = React.useRef(null);

  function handleChange(event) {
    setplaylistname(event.target.value);
  }


    return (
      <div className="NamePlaylist">
          <input
            type="text"
            id="messageBeingTyped"
            name="name"
            placeholder="Name your playlist here!"
            value={playlistname}
            onChange={handleChange}
            className="mr-sm-2 p-2 bd-highlight"
          />
          <button
            type="button"
            className="nameBtn greyBtn"
            // onClick={handleSearchButtonClick}
          >
            Name
          </button>
      </div>
    );
  }



