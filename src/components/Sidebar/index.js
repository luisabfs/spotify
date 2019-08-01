import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Browse</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>YOUR LIBRARY</span>
        </li>
        <li>
          <a href="">Your Daily Mix</a>
        </li>
        <li>
          <a href="">Recently played</a>
        </li>
        <li>
          <a href="">Songs</a>
        </li>
        <li>
          <a href="">Albums</a>
        </li>
        <li>
          <a href="">Artists</a>
        </li>
        <li>
          <a href="">Stations</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Focusing</a>
        </li>
        <li>
          <a href="">Having fun!</a>
        </li>
      </Nav>
    </div>

    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add playlist" />
      New playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
