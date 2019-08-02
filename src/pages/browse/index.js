import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Browse</Title>

    <List>
      <Playlist href="">
        <img src="https://i.redd.it/3z8xam8wpo9y.png" alt="Playlist" />
        <strong>Having fun!</strong>
        <p>For enjoying some good music while coding!</p>
      </Playlist>
      <Playlist href="">
        <img src="https://i.redd.it/3z8xam8wpo9y.png" alt="Playlist" />
        <strong>Having fun!</strong>
        <p>For enjoying some good music while coding!</p>
      </Playlist>
      <Playlist href="">
        <img src="https://i.redd.it/3z8xam8wpo9y.png" alt="Playlist" />
        <strong>Having fun!</strong>
        <p>For enjoying some good music while coding!</p>
      </Playlist>
      <Playlist href="">
        <img src="https://i.redd.it/3z8xam8wpo9y.png" alt="Playlist" />
        <strong>Having fun!</strong>
        <p>For enjoying some good music while coding!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
