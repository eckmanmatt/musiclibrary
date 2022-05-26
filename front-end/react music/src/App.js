import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'


const App = () => {

  const [artist, setArtist] = useState("")
  const [music, setMusic] = useState([])

  const handleNewArtist = (event) => {
    setArtist(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:3000/music',
      {
        artist: artist
      }).then(() => {
          axios.get('http://127.0.0.1:3000/music').then((response) => {
            setMusic(response.data)
          })
      })
  }


  return (
    <>
    <div class="addMusic">
      <h1 class="title">Music Library</h1>
      <form onSubmit = {handleFormSubmit}>
          Artist: <input type="text" onChange={handleNewArtist}/>
          <br/>
          <br/>
          <input type="submit" value="Add Artist"/>
      </form>
      </div>
      <div class="list">

        {music.map((music) => {
              return(
                <div class="listContainer">
                  <li class="listItem">{music.artist}</li>
                </div>
              )
        })}

      </div>
    </>
  );
}

export default App;
