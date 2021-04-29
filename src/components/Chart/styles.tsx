import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

export const ToggleTab = styled.div`
  flex-direction: row;
  display: flex;
`;

export const Toggle = styled.button<{active: boolean}>`
  transition: all .15s ease-in-out;
  text-transform: capitalize;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  font-size: .875rem;
  margin-right: 10px;
  line-height: 1.5;
  color: #46505a;
  font-weight: 700;
  cursor: pointer;
  padding: 10px;
  border: 0;

  ${(props) => (
    props.active ? `
    background-color: #02a645;
    color: #fff;
    ` : `
    background-color: transparent;
    color: #46505a;

    &:hover {
      background-color: #f3f6f9;
    }
    `
  )}
`;

export const Box = styled.div`
  border: 1px solid #eaeef3;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 2rem;
`;

export const ChartBox = styled.div`
  box-sizing: border-box;
  white-space: nowrap;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  display: flex;
`;

export const Info = styled.div`
  margin-bottom: 2rem;
  font-size: 12px;
  display: flex;

  span {
    text-transform: capitalize;
    font-weight: 600;
  }

  p {
    padding-right: 10px;
    margin: 0;
  }
`;

export const CandleButton = styled.button`
  transition: all 0.15 ease-in-out;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: 0;

  &:hover {
    background-color: #02a64677;
  }
`;

export const Disclaimer = styled.div`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;
  display: flex;

  p {
    font-weight: 600;
    font-size: 12px;
    margin: 0 10px;
  }
`;
