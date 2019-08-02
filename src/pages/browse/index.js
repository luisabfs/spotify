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
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/Green-Day-American-Idiot-album-covers-billboard-1000x1000.jpg"
          alt="Playlist"
        />
        <strong>Emo</strong>
        <p>Make emo great again.</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg"
          alt="Playlist"
        />
        <strong>Sad time</strong>
        <p>When feeling lonely and kinda sad :/</p>
      </Playlist>
      <Playlist href="">
        <img
          src="https://www.udiscovermusic.com/wp-content/uploads/2018/04/queen-ii.jpg"
          alt="Playlist"
        />
        <strong>Classic Rock</strong>
        <p>Relax with the best rock songs!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
