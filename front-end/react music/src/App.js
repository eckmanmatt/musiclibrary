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
  const [toggle, setToggle] = useState(true)
  const [updatedArtist, setUpdatedArtist] = useState('');
  const [updatedAlbum, setUpdatedAlbum] = useState('');
  const [updatedSong, setUpdatedSong] = useState('');
  const [updatedYear, setUpdatedYear] = useState();

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
  const handleUpdatedArtistChange = (event) => {
    setUpdatedArtist(event.target.value)
  }
  const handleUpdatedAlbumChange = (event) => {
    setUpdatedAlbum(event.target.value)
  }
  const handleUpdatedSongChange = (event) => {
    setUpdatedSong(event.target.value)
  }
  const handleUpdatedYearChange = (event) => {
    setUpdatedYear(event.target.value)
  }

  const handleUpdatedArtist = (musicData) => {
    axios.put(`http://127.0.0.1:3000/music/${musicData._id}`,
      {
        artist: updatedArtist
      }
    ).then((response) => {
      axios.get('http://127.0.0.1:3000/music')
            .then((response) => {
              setMusic(response.data)
            })
    })
  }
  const handleUpdatedAlbum = (musicData) => {
    axios.put(`http://127.0.0.1:3000/music/${musicData._id}`,
      {
        album: updatedAlbum
      }
    ).then((response) => {
      axios.get('http://127.0.0.1:3000/music')
            .then((response) => {
              setMusic(response.data)
            })
    })
  }
  const handleUpdatedSong = (musicData) => {
    axios.put(`http://127.0.0.1:3000/music/${musicData._id}`,
      {
        song: updatedSong
      }
    ).then((response) => {
      axios.get('http://127.0.0.1:3000/music')
            .then((response) => {
              setMusic(response.data)
            })
    })
  }
  const handleUpdatedYear = (musicData) => {
    axios.put(`http://127.0.0.1:3000/music/${musicData._id}`,
      {
        year: updatedYear
      }
    ).then((response) => {
      axios.get('http://127.0.0.1:3000/music')
            .then((response) => {
              setMusic(response.data)
            })
    })
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


  const editMusic = (event) => {
    event.preventDefault()
    axios.put(`http://127.0.0.1:3000/music/${music._id}`,
      {
        artist: event.artist,
        album: event.album,
        song: event.song,
        year: event.year
      })
      .then(() => {
          axios.get(`http://127.0.0.1:3000/music`).then((response) => {
            setMusic(response.data)
          })
      })
  }


  const handleEdit = (musicData) => {
    toggle ? setToggle(false) : setToggle(true)
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
                    <li className="listItem">Artist: {music.artist}</li>
                    <li className="listItem">Album: {music.album}</li>
                    <li className="listItem">Song: {music.song}</li>
                    <li className="listItem">Year: {music.year}</li>
                    {toggle ?
                    <></>  :
                    <>
                      Artist: <input type="text" placeholder={music.artist} onKeyUp={handleUpdatedArtistChange}/><br/>
                      <button onClick={(event) => {handleUpdatedArtist(music)}}>Update Artist</button><br/>

                      Album: <input type="text" placeholder={music.album} onKeyUp={handleUpdatedAlbumChange}/><br/>
                      <button onClick={(event) => {handleUpdatedAlbum(music)}}>Update Album</button><br/>

                      Song: <input type="text" placeholder={music.song} onKeyUp={handleUpdatedSongChange}/><br/>
                      <button onClick={(event) => {handleUpdatedSong(music)}}>Update Song</button><br/>

                      Year: <input type="text" placeholder={music.year} onKeyUp={handleUpdatedYearChange}/><br/>
                      <button onClick={(event) => {handleUpdatedYear(music)}}>Update Year</button><br/>
                      <br/>
                    </>
                    }
                    <button onClick = {(event) => {handleEdit(music)}}>Edit Entry</button>
                    <button onClick = {(event) => {handleDelete(music)}}>Delete Entry</button>

                  </ul>
                </div>
              )
        })}


      </div>
    </>
  );
}

export default App;
