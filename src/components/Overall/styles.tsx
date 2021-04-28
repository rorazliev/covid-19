import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  padding-bottom: 2rem;
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px, rgba(0, 0, 0, 0.04) 0px 10px 10px;
  background-color: #02a645;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 2rem;
`;

export const Heading = styled.div`
  padding-bottom: 2rem;
  text-align: center;
  line-height: 1.5;
  color: #fff;
`;

export const Name = styled.h2`
  text-transform: capitalize;
  font-size: 1.5rem;
  margin: 0;
`;

export const Population = styled.p`
  margin: 0;
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Medium = styled.span`
  opacity: 0.7;
`;

export const Row = styled.div`
  justify-content: space-around;
  flex-direction: row;
  display: flex;
`;

export const Column = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  display: flex;
  color: #fff;
`;

export const Title = styled.span`
  font-weight: 600;
`;

export const Data = styled.span`
  opacity: 0.7;
`;
