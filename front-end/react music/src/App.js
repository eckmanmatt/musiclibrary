import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'



const App = () => {
  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")

  return (
    <>
      <h1>Music Library</h1>
    </>
  );
}

export default App;
