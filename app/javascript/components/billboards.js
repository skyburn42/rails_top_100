import React from 'react';
const url = "http://localhost:3000/billboards/";
const Billboards = ({ billboards }) => {
  return (
    <>
      <h1>All the Billboards</h1>
      <a href={"/billboards/new"}>Add billboard </a>
      { billboards.map( (billboard) => 
        <div>
          <h3>{billboard.title}</h3>
        </div>
      )}
    </>
  )
}
export default Billboards;