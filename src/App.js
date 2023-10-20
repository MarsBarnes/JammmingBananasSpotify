import React from "react";
import { useState } from "react";
import "./App.css";
// import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import SignInButton from "./util/getToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracks, setTracks] = useState([]);

  const addToPlaylist = (track) => {
    setTracks((prevTracks) => [...prevTracks, track]);
  };

  const removeFromPlaylist = (track) => {
    setTracks((prevTracks) => {
      const updatedTracks = prevTracks.filter(
        (prevTrack) => prevTrack.id !== track.id
      );
      return updatedTracks;
    });
  };

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  const menuClassName = isMenuExpanded ? "expandedMenu" : "collapsedMenu";

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h3 className="p-2 flex-grow-1 bd-highlight leftaligntext gridAreaA">
          Jammming
        </h3>
        <button onClick={handleMenuToggle} className= "menuBtn">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="mobileMenu gridAreaB"
          />
        </button>
          <a
            href="https://marsbarnes.github.io/Portfolio/"
          className={menuClassName + " links greyBtn gridAreaC"}
          >
            To Mars' Portfolio
          </a>
          <a
          href="https://github.com/MarsBarnes/JammmingBananasSpotify"
          className={menuClassName + " links greyBtn gridAreaD"}
          >
            To GitHub Repository
          </a>
        <SignInButton menuClassName={menuClassName} />
        {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
      </nav>
      <main className="main">
        <Tracklist
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          addToPlaylist={addToPlaylist}
        />
        <Playlist tracks={tracks} removeFromPlaylist={removeFromPlaylist} />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
