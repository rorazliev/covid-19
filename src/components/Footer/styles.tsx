import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 1px solid #eaeef3;
  background-color: #fff;
  position: relative;
  display: block;
  width: 100%;
`;

export const Box = styled.div`
  justify-content: center;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  position: relative;
  min-height: 64px;
  max-width: 960px;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

export const Copyright = styled.span``;

export const LinkedinLink = styled.a`
  transition: color 0.15s ease-in-out;
  text-decoration: none;
  font-weight: 500;
  color: #02a645;

  &:hover {
    text-decoration: underline;
  }
`;
