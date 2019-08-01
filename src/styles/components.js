import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px, 100%;
  background-repeat: no-repeat;
  background-position: top;
`;
