import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 12px;
  height: 72px;
`;

export const Current = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    span {
      font-size: 13px;
      color: #fff;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Scrubber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;
