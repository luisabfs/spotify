import React from 'react';

import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </div>
);

export default App;
