import React, { ReactElement } from 'react';
import { useSelector } from '../../redux/store';
import {
  Container,
  Card,
  Heading,
  Name,
  Population,
  Bold,
  Medium,
  Row,
  Column,
  Title,
  Data,
} from './styles';

type PropTypes = {
  name: string,
}

const Overall: React.FC<PropTypes> = ({ name }): ReactElement => {
  const overall = useSelector((state) => state.data.overall);

  return (
    <Container>
      <Card>
        <Heading>
          <Name>{name}</Name>
          <Population>
            <Bold>Population:</Bold>
            {' '}
            <Medium>{overall?.population}</Medium>
          </Population>
        </Heading>
        <Row>
          <Column>
            <Title>Cases</Title>
            <Data>{overall?.cases}</Data>
          </Column>
          <Column>
            <Title>Deaths</Title>
            <Data>{overall?.deaths}</Data>
          </Column>
        </Row>
      </Card>
    </Container>
  );
};

export default Overall;
