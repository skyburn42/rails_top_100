import React from 'react';

const Artists = ({ billboard, artists }) => {
  const { title, id } = billboard
  return(
    <>
      <h1>Artists from {title} billboard</h1>
      <a href={`/billboards/${id}/artists/new`}>New Artist</a>
      <br />
      <a href={`/billboards/${id}`}>Back to {title}</a>
      { artists.map((artist) => (
        <div key={artist.id}>
          <h2>{artist.name}</h2>
          <a href={`/billboards/${id}/artists/${artist.id}`}>Show</a>
          <br />
          <a href={`/billboards/${id}/artists/${artist.id}/edit`}>Edit</a>
          <br />
          <a 
            href={`/billboards/${id}/artists/${artist.id}`}
            data-method="delete"
          >
            Delete
          </a>
        </div>
      ))}
    </>
  )
}
export default Artists;