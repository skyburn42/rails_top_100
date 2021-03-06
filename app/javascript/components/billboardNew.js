import React from 'react';
const BillboardNew = ({ billboard }) => {
  // if it does fail, the values don't get lost
  const { title } = billboard
  const defaultTitle = title ? title : ""
  return(
    <>
      <h1>New Billboard</h1>
      <form action="/billboards" method="post">
        <select placeholder="Title" type="text" defaultValue={defaultTitle} name="billboard[title]">
          <option placeholder="Title" type="text" defaultValue={defaultTitle} name="billboard[title]"> </option>
          <option value="Todays Country">Todays Country</option>
          <option value="Coding EDM">Coding EDM</option>
          <option value="Todays 100 Hits">Todays Top Hits</option>
          <option value="Pop Hits">Pop Hits</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </>
  )
}
export default BillboardNew;