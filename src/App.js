import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </div>
  </BrowserRouter>
);

export default App;
