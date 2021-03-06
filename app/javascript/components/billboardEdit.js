import React from 'react';
const BillboardEdit = ({ billboard }) => {
  const { title, id } = billboard
  const defaultTitle = title ? title : "";
  return(
    <>
      <h1>Edit Billboard</h1>
      <form action={`/billboards/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="Name"
          required
          type="text"
          defaultValue={defaultTitle}
          name="billboard[title]"
        />
        <button type="Submit">Update</button>
      </form>
    </>
  )
}
export default BillboardEdit;