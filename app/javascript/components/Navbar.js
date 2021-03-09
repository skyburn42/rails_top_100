import React from 'react';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/billboards/">My Billboards</a>
      </li>
      <li>
        <a href="billboards/artists/">Add Artists</a>
      </li>
      <li>
        <a href="/song">Songs</a>
      </li>
      <li>
      <a href="/song/new">Add Songs</a>
    </li>
    </ul>

  </nav>
)

export default Navbar;