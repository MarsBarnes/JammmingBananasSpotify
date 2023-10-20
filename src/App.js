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

  const removeFromPlaylist = (i) => {
    setTracks((prevTracks) => {
      const updatedTracks = prevTracks.filter(
        (_prevTrack, index) =>index !== i
      );
      return updatedTracks;
    });
  };

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setIsMenuExpanded(!isMenuExpanded);
  };

  const menuClassName = isMenuExpanded ? "expandedMenu" : "collapsedMenu";

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h3 className="p-2 flex-grow-1 bd-highlight leftaligntext gridAreaA">
          Jammming
        </h3>
        <button onClick={handleMenuToggle} className="menuBtn">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="mobileMenu gridAreaB"
          />
        </button>
        <div className={`${menuClassName} gridAreaC`}>
          <a
            href="https://marsbarnes.github.io/Portfolio/"
            className="links greyBtn"
          >
            To Mars' Portfolio
          </a>
          <a
            href="https://github.com/MarsBarnes/JammmingBananasSpotify"
            className="links greyBtn"
          >
            To GitHub Repository
          </a>
          <SignInButton />
            {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
        </div>
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
