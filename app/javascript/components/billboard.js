import React from 'react';
const Billboard = ({ billboard }) => {
  const { id, title, created_at } = billboard;
  // const id = sub.id
  // const title = sub.title
  // const created_at = sub.created_at
  return (
    <>
      <h1>Billboard: {title}</h1>
      <p>
        created: {created_at}, id: {id}
      </p>
      <a className="mainlinks" href={`/billboards`}>back</a>
      <br></br>
      <a className="mainlinks" href={`/billboards/${id}/artists`}>Artists</a>
    </>
  )
}
export default Billboard;