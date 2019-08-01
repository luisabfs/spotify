import React from 'react';

import { Container, Current, Volume } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';

const Player = () => (
  <Container>
    <Current>
      <img src="https://i.redd.it/3z8xam8wpo9y.png" alt="Album" />

      <div>
        <span>Stressed Out</span>
        <small>Twenty One Pilots</small>
      </div>
    </Current>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
    </Volume>
  </Container>
);

export default Player;
