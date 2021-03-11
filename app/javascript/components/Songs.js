import React from 'react';

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
      <div style={styles.songs}>
      { songs.map((song) => (
        <div style={styles.song_contents} key={song.id}>
          <h2 style={styles.center}>{song.title}</h2>
          <ul>
            <li><a href={`/artists/${artist.id}/songs/${song.id}`}>Play</a></li>
            <li><a href={`/artists/${artist.id}/songs/${song.id}/edit`}>Edit</a></li>
            <li><a 
                href={`/artists/${artist.id}/songs/${song.id}`}
                data-method="delete"
              >
                Delete
              </a></li>
          </ul>
        </div>
      ))}
      </div>
    </>
  )
}
export default Songs;