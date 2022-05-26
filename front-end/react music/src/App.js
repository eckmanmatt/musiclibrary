import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'


const App = () => {

  const [artist, setArtist] = useState("")
<<<<<<< HEAD
  const [album, setAlbum] = useState("")
  const [song, setSong] = useState("")
  const [year, setYear] = useState()
=======
>>>>>>> ea2f59c441eb92ed33fb58e351751869bba2d975
  const [music, setMusic] = useState([])

  const handleNewArtist = (event) => {
    setArtist(event.target.value)
  }
<<<<<<< HEAD
  const handleNewAlbum = (event) => {
    setAlbum(event.target.value)
  }
  const handleNewSong = (event) => {
    setSong(event.target.value)
  }
  const handleNewYear = (event) => {
    setYear(event.target.value)
  }
=======
>>>>>>> ea2f59c441eb92ed33fb58e351751869bba2d975

  const handleFormSubmit = (event) => {
    event.preventDefault()
    axios.post('http://127.0.0.1:3000/music',
      {
<<<<<<< HEAD
        artist: artist,
        album: album,
        song: song,
        year: year
=======
        artist: artist
>>>>>>> ea2f59c441eb92ed33fb58e351751869bba2d975
      }).then(() => {
          axios.get('http://127.0.0.1:3000/music').then((response) => {
            setMusic(response.data)
          })
      })
  }

<<<<<<< HEAD
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
          Artist: <input type="text" onChange={handleNewArtist}/><br/>
          Album: <input type="text" onChange={handleNewAlbum}/>
=======

  return (
    <>
    <div class="addMusic">
      <h1 class="title">Music Library</h1>
      <form onSubmit = {handleFormSubmit}>
          Artist: <input type="text" onChange={handleNewArtist}/>
>>>>>>> ea2f59c441eb92ed33fb58e351751869bba2d975
          <br/>
          <br/>
          <input type="submit" value="Add Artist"/>
      </form>
      </div>
<<<<<<< HEAD
      <div>
      <ul>
        {music.map((music) => {
              return(
                <li key={music._id}>
                {music.artist}<br/>
                {music.album}<br/>
                <button onClick={(event) => {
                  handleDelete(music)}}>Delete</button>
                </li>
              )
        })}
      </ul>
=======
      <div class="list">

        {music.map((music) => {
              return(
                <div class="listContainer">
                  <li class="listItem">{music.artist}</li>
                </div>
              )
        })}

>>>>>>> ea2f59c441eb92ed33fb58e351751869bba2d975
      </div>
    </>
  );
}

export default App;
