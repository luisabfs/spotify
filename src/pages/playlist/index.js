import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';

import Loading from '../../components/Loading';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    match: PropTypes.shape().isRequired,
    id: PropTypes.number.isRequired,
    playlistDetails: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { getPlaylistDetailsRequest, match } = this.props;
    const { id } = match.params;

    getPlaylistDetailsRequest(id);
  };

  renderDetails = () => (
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
        </tbody>
      </SongList>
    </Container>
  );

  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
