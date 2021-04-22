import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: rgba(255, 255, 255, 0.72);
  border-bottom: 1px solid #eaeef3;
  position: sticky;
  z-index: 999;
  width: 100%;
  right: 0;
  left: 0;
  top: 0;
`;

export const Box = styled.div`
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  position: relative;
  max-width: 960px;
  min-height: 64px;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

export const HomeLink = styled(Link)`
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  display: flex;

  svg {
    display: inline-block;
    color: #02a645;
  }
`;

export const GithubLink = styled.a`
  transition: all 0.15s ease-in-out;
  background-color: transparent;
  border: 1px solid #eaeef3;
  box-sizing: border-box;
  display: inline-flex;
  border-radius: 1rem;
  margin-left: 2rem;
  padding: 0.65rem;

  svg {
    display: inline-block;
    color: #02a645;
  }

  &:hover {
    background-color: #f3f6f9;
  }
`;
