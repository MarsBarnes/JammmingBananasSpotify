import React from "react";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import SignInButton from "./util/getToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <h3 className="p-2 flex-grow-1 bd-highlight leftaligntext">Jammming</h3>
        <a
          href="https://marsbarnes.github.io/Portfolio/"
          className="styled-element saveButton btn btn-outline-success my-2 my-sm-0"
        >
          To Mars' Portfolio
        </a>
        <a
          href="https://github.com/MarsBarnes/Cozzzy-Cafe"
          className="styled-element saveButton btn btn-outline-success my-2 my-sm-0"
        >
          To GitHub Repository
        </a>
        <SignInButton />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </nav>
      <main className="main">
        <Tracklist searchQuery={searchQuery} addToPlaylist={addToPlaylist} />
        <Playlist tracks={tracks} removeFromPlaylist={removeFromPlaylist} />
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
