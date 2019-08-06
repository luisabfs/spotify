import React from 'react';

import { Container, Header } from './styles';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://i.redd.it/3z8xam8wpo9y.png" alt="Playlist" />

      <div>
        <span>PLAYLIST</span>
        <h1>Having fun!</h1>
        <p>13 musics</p>

        <button>PLAY</button>
      </div>
    </Header>
  </Container>
);

export default Playlist;
