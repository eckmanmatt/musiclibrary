import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'


const App = () => {

  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")
  const [song, setSong] = useState("")
  const [year, setYear] = useState()
  const [music, setMusic] = useState([])

  const handleNewArtist = (event) => {
    setArtist(event.target.value)
  }
  const handleNewAlbum = (event) => {
    setAlbum(event.target.value)
  }
  const handleNewSong = (event) => {
    setSong(event.target.value)
  }
  const handleNewYear = (event) => {
    setYear(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:3000/music',
      {
        artist: artist,
        album: album,
        song: song,
        year: year
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
    <div className="addMusic">
      <h1 className="title">Music Library</h1>
      <form onSubmit = {handleFormSubmit}>
          Artist: <input type="text" onChange={handleNewArtist}/><br/>
          Album: <input type="text" onChange={handleNewAlbum}/><br/>
          Song: <input type="text" onChange={handleNewSong}/><br/>
          Year: <input type="number" onChange={handleNewYear}/><br/>
          <br/>
          <input type="submit" value="Add Artist"/>
      </form>
      </div>
      <div className="list">

        {music.map((music) => {
              return(
                <div className="listContainer" key={music._id}>
                  <ul>
                    <li className="listItem">{music.artist}</li>
                    <li className="listItem">{music.album}</li>
                    <li className="listItem">{music.song}</li>
                    <li className="listItem">{music.year}</li>
                  </ul>
                </div>
              )
        })}
      </div>
    </>
  );
}

export default App;
