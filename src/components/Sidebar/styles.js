import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
`;

export const NewPlaylist = styled.button`
  display: flex;
  align-items: center;

  padding: 15px 25px;
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
