import React from 'react';
const ArtistEdit = ({ billboard, artist }) => {
  const { id } = billboard
  const { name } = artist
  const defaultName = name ? name : "";
  return(
    <>
      <h1>Edit Artist</h1>
      <form action={`/billboards/${id}/artists/${artist.id}`} method="post">
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

export default ArtistEdit;