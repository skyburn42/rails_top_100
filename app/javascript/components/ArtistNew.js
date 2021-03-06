import React from 'react';

const ArtistNew = ({ billboard, artist }) => {
  const { id } = billboard
  const { name, errors } = artist
  const defaultName = name ? name : ""
  return(
    <>
      <h1>New Artist</h1>
      { errors && errors }
      <form action={`/billboards/${id}/artists`} method="post">
        <input
          placeholder="name"
          defaultValue={defaultName}
          type="text"
          name="artist[name]"
        />
        <button type="submit">Add Artist</button>
      </form>
    </>
  )
}
export default ArtistNew;