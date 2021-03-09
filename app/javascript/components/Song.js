import React from 'react';

const Song = ({ artist, song }) => {
  const { id, title, created_at } = song;
  return (
    <>
      <h1>Song: {title}</h1>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a href={`/artists/${artist.id}/songs/`}>back to all songs {artist.name}</a>
      <br/>
      <a href={`/artists/${artist.id}/songs/${song.id}`}>Songs</a>
    </>
  )
}

export default Song;


