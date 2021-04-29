import styled from 'styled-components';

export const Container = styled.div`
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
  margin: 0 0.15rem;
  display: flex;
  height: 300px;
  width: 10px;
`;

export const Stick = styled.div<{ height: number }>`
  height: ${(props) => `${props.height}px`};
  background-color: #02a645;
  border-radius: 4px;
  width: 10px;
`;
