import React from 'react';
import SongImg from './assets/songs.jpeg';

const styles = {

  center: {
    textAlign: 'center',
  },

  songs: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'space-around',
    justifyContent: 'center',
    alignItems: 'center'
  },

  song_contents: {
    border: '5px solid black',
    height: '200px',
    width: '300px',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'rgb(221, 224, 221)',
  }
}

const Songs = ({ artist, songs }) => {
  const { name, id, billboard_id } = artist
  
  return(
    <>
      <h1 style={styles.center}>Songs from {name}</h1>
      <p style={styles.center}><a href={`/artists/${artist.id}/songs/new`}>New Song</a></p>
      <p style={styles.center}><a href={`/billboards/${artist.billboard_id}/artists/${artist.id}`}>Back to {artist.name}</a></p>
      <div className="cardList">
      { songs.map((song) => (
        <div className="holy" key={song.id}>
          <h3 className="holyh">{song.title}</h3>
          <img src={SongImg}/>
          <div className="holycard">
            <a className="links" href={`/artists/${artist.id}/songs/${song.id}`}>Play</a>
            <a className="links" href={`/artists/${artist.id}/songs/${song.id}/edit`}>Edit</a>
            <a className="links"
              href={`/artists/${artist.id}/songs/${song.id}`}
              data-method="delete"
            >
              Delete
            </a>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}
export default Songs;