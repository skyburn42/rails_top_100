import React from 'react';
const url = "http://localhost:3000/billboards/";
const Billboards = ({ billboards }) => {
  return (
    <>
      
      <h1>Your Favorites</h1>
      <a href={"/billboards/new"}>Create Your Billboard</a>
      
      { billboards.map( (billboard) => 
        <div>
          <h3>{billboard.title}</h3>
          <a href={url + billboard.id}>Show</a>
          <br />
          <a href={url + billboard.id + "/edit"}>Edit</a>
          <br />
          <a 
            href={url + billboard.id }
            data-method="delete"
          >
            Delete
          </a>
        </div>
      )}
    </>
  )
}
export default Billboards;