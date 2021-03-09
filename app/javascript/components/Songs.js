import React from 'react';

const Songs = ({ artist, songs }) => {
  const { name, id, billboard_id } = artist
  
  return(
    <>
      <h1>Songs from {name} Artist</h1>
      <a href={`/artists/${artist.id}/songs/new`}>New Song</a>
      <br />
      <a href={`/billboards/${artist.billboard_id}/artists/${artist.id}`}>Back to {artist.name}</a>
      { songs.map((song) => (
        <div key={song.id}>
          <h2>{song.title}</h2>
          <a href={`/artists/${artist.id}/songs/${song.id}`}>Play</a>
          <br />
          <a href={`/artists/${artist.id}/songs/${song.id}/edit`}>Edit</a>
          <br />
          <a 
            href={`/artists/${artist.id}/songs/${song.id}`}
            data-method="delete"
          >
            Delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Songs;