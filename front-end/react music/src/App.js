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

  const handleDelete = (artistData) => {
    axios.delete(`http://127.0.0.1:3000/music/${artistData._id}`)
      .then(() => {
        axios
          .get('http://127.0.0.1:3000/music')
          .then((response) => {
            setMusic(response.data)
          })
      })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/music').then((response) => {
      setMusic(response.data)
    })
  },[])

  return (
    <>
    <div>
      <h1>Music Library</h1>
      <form onSubmit = {handleFormSubmit}>
          Artist: <input type="text" onChange={handleNewArtist}/>
          <br/>
          <br/>
          <input type="submit" value="Add Artist"/>
      </form>
      </div>
      <div>
      <ul>
        {music.map((music) => {
              return(
                <li key={music._id}>{music.artist}
                <button onClick={(event) => {
                  handleDelete(music)}}>Delete</button>
                </li>
              )
        })}
      </ul>
      </div>
    </>
  );
}

export default App;
