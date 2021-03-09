import React from 'react';

const Artist = ({ billboard, artist }) => {
  const { id, title} = billboard;
  return (
    <>
      <h1>Artist: {artist.name}</h1>
      <p>
        created: {artist.created_at}, id: {artist.id}
      </p>
      <a href={`/artists/`}>back to Artists from {title}</a>
      <br/>
      <a href={`/artists/${artist.id}/songs`}>Songs</a>
    </>
  )
}

export default Artist;