import React from 'react';
import BillboardImg from './assets/tst.png';


const url = "http://localhost:3000/billboards/";
const Billboards = ({ billboards }) => {
  return (
    <div className="mycards">
      
      <h1>Your Favorites</h1>
      <a href={"/billboards/new"}>Create Your Billboard</a>
      <div className="cardList">
        { billboards.map( (billboard) => 
        <div className="holy">
            
            <h3 className="holyh">{billboard.title}</h3>
            <img className="imgTest" src={BillboardImg}/>
               
            <div className="holycard">
              <a className="links"href={url + billboard.id}>Show</a>
              <br />
              <a className="links" href={url + billboard.id + "/edit"}>Edit</a>
              <br />
                <a className="links"
                  href={url + billboard.id }
                  data-method="delete">Delete
                </a>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
export default Billboards;