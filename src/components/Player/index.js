import React from 'react';

import Slider from 'rc-slider';
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
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        // value={100}
      />
    </Volume>
  </Container>
);

export default Player;
