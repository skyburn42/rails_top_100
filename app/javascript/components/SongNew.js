import React from 'react';

const SongNew = ({ artist, song }) => {
 
  const { title, errors } = song
  const defaultName = name ? name : ""
  return(
    <>
      <h1>New Song</h1>
      { errors && errors }
      <form action={`/artists/${artist.id}/songs`} method="post">
        <input
          placeholder="name"
          defaultValue={defaultName}
          type="text"
          name="song[title]"
        />
        <button type="submit">Add Song</button>
      </form>
    </>
  )
}
export default SongNew;