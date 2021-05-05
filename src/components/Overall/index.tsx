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
            <Medium>
              {overall.population
                ? overall.population.toLocaleString('en-US')
                : 'Loading...'}
            </Medium>
          </Population>
        </Heading>
        <Row>
          <Column>
            <Title>Cases</Title>
            <Data>
              {overall.cases
                ? overall.cases.toLocaleString('en-US')
                : 'Loading...'}
            </Data>
          </Column>
          <Column>
            <Title>Deaths</Title>
            <Data>
              {overall.deaths
                ? overall.deaths.toLocaleString('en-US')
                : 'Loading...'}
            </Data>
          </Column>
        </Row>
      </Card>
    </Container>
  );
};

export default Overall;
