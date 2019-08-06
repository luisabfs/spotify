import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

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

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duration" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Stressed Out</td>
          <td>Twenty One Pilots</td>
          <td>Blurryface</td>
          <td>3:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Stressed Out</td>
          <td>Twenty One Pilots</td>
          <td>Blurryface</td>
          <td>3:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Stressed Out</td>
          <td>Twenty One Pilots</td>
          <td>Blurryface</td>
          <td>3:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Stressed Out</td>
          <td>Twenty One Pilots</td>
          <td>Blurryface</td>
          <td>3:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Stressed Out</td>
          <td>Twenty One Pilots</td>
          <td>Blurryface</td>
          <td>3:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add" />
          </td>
          <td>Stressed Out</td>
          <td>Twenty One Pilots</td>
          <td>Blurryface</td>
          <td>3:22</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
