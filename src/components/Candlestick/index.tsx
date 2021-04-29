import React, { ReactElement } from 'react';
import { Container, Stick } from './styles';

type PropTypes = {
  scale: number,
  data: number,
}

const Candlestick: React.FC<PropTypes> = ({ scale, data }): ReactElement => {
  // Calculate the height of the stick
  const height = (data / (scale / 300));

  return (
    <Container>
      <Stick height={height} />
    </Container>
  );
};

export default Candlestick;
