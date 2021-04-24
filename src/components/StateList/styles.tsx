import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 2rem;
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

export const Row = styled.div`
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
`;

export const Column = styled.div`
  box-sizing: border-box;
  padding-bottom: 10px;
  width: 33.33333334%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StateLink = styled(Link)`
  transition: all .15s ease-in-out;
  text-transform: capitalize;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  font-size: .875rem;
  line-height: 1.5;
  color: #46505a;
  font-weight: 700;
  padding: 10px;
  width: 100%;

  &:hover {
    background-color: #f3f6f9;
  }
`;

export const Button = styled.button`
  border: 1px solid rgb(229, 232, 236);
  transition: all .15s ease-in-out;
  text-transform: capitalize;
  background-color: #f3f6f9;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  font-size: .875rem;
  line-height: 1.5;
  font-weight: 700;
  cursor: pointer;
  color: #46505a;
  padding: 10px;
  width: 100%;

  &:hover {
    background-color: rgb(234, 238, 243);
  }
`;
