import React from 'react';
const SongEdit = ({ artist, song }) => {
  
  const { name } = artist
  const { title } = song
  const defaultTitle = title ? title : "";
  return(
    <>
      <h1>Edit Song</h1>
      <form action={`/artists/${artist.id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="patch"/>
        <input
          placeholder="Title"
          required
          type="text"
          defaultValue={defaultTitle}
          name="song[title]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}

export default SongEdit;