import React from 'react';
const SongEdit = ({ artist, song }) => {
  const { id } = billboard
  const { name } = artist
  const { title } = song
  const defaultName = name ? name : "";
  return(
    <>
      <h1>Edit Song</h1>
      <form action={`/artists/${artist.id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultName}
          name="artist[name]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}

export default SongEdit;