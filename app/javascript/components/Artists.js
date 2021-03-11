import React from 'react';
import Artt from './assets/Artt.png';

const Artists = ({ billboard, artists }) => {
  const { title, id } = billboard
  return(
    <div className="myartists">

      <h1>Artists from {title} billboard</h1>
      <a className="mainlinks" href={`/billboards/${id}/artists/new`}>New Artist</a>
      <br />
      <a className="mainlinks" href={`/billboards/${id}`}>Back to {title}</a>
      <div className="cardList">
      { artists.map( (artist) => 
        <div className="holy">
          <div key={artist.id}>
            <h3 className="holyh">{artist.name}</h3>
            <img className="imgTest" src={Artt}></img>

            <div className="holycard">
              <a className="links" href={`/billboards/${id}/artists/${artist.id}`}>Show</a>
              <br />
              <a className="links" href={`/billboards/${id}/artists/${artist.id}/edit`}>Edit</a>
              <br />
              <a className="links"
              href={`/billboards/${id}/artists/${artist.id}`}
              data-method="delete">Delete</a>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
export default Artists;