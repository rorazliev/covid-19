/* eslint-disable react/no-array-index-key */
import React, { ReactElement, useState } from 'react';
import {
  Container, Row, Column, StateLink, Button,
} from './styles';

type PropTypes = {
  list: string[]
}

const StateList: React.FC<PropTypes> = ({ list }): ReactElement => {
  // Toggle to show or hide the full state list
  const [isCollapsed, collapse] = useState(true);

  // The item to show
  const shown = isCollapsed ? list.slice(0, 6) : list;

  // Render
  return (
    <Container>
      <Row>
        {
        shown.map((state, id) => (
          <Column key={id}>
            <StateLink to={`/${state.trim().replace(/\s/g, '-')}`}>
              {state}
            </StateLink>
          </Column>
        ))
        }
      </Row>
      <Row>
        <Button type="button" onClick={() => collapse(!isCollapsed)}>
          {
            isCollapsed ? 'show more' : 'show less'
          }
        </Button>
      </Row>
    </Container>
  );
};

export default StateList;
