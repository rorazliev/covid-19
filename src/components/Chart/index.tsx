/* eslint-disable react/no-array-index-key */
import React, {
  ReactElement, useEffect, useState, useRef,
} from 'react';
import { useSelector } from '../../redux/store';
import { Date } from '../../types/Timeline';
import Candlestick from '../Candlestick';
import { ArrowLeft, ArrowRight } from '../Icons';
import {
  Container, ToggleTab, Toggle, Box, Info, ChartBox, CandleButton, Disclaimer,
} from './styles';

const Chart: React.FC = (): ReactElement => {
  // Create an anchor to the end of the chart
  const anchor = useRef<HTMLDivElement>(null);

  // Get timeline data
  const timeline = useSelector((state) => state.data.timeline);

  // Indicates selected data
  const [selected, select] = useState('cases');

  // Indicates focused candlestick
  const [focused, focus] = useState<Date>();

  // Scroll to the end of chart
  useEffect(() => {
    const node = anchor.current;
    node?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // The highest number of cases or deaths
  let max = 0;

  // Iterate to find the highest number of cases or deaths
  for (let i = 0; i < timeline.length; i += 1) {
    if (selected === 'cases') {
      max = timeline[i].cases > max ? timeline[i].cases : max;
    } else {
      max = timeline[i].deaths > max ? timeline[i].deaths : max;
    }
  }

  // Render
  return (
    <Container>
      {/* Toggle between cases and deaths */}
      <ToggleTab>
        <Toggle
          active={selected === 'cases'}
          onClick={() => select('cases')}
        >
          Cases
        </Toggle>
        <Toggle
          active={selected === 'deaths'}
          onClick={() => select('deaths')}
        >
          Deaths
        </Toggle>
      </ToggleTab>
      <Box>
        {
        focused ? (
          <Info>
            <p>
              <span>Date: </span>
              {focused.date}
            </p>
            <p>
              <span>{`${selected}: `}</span>
              {selected === 'cases' ? focused.cases : focused.deaths}
            </p>
          </Info>

        ) : (
          <Info>
            <p>Click on any to see more information</p>
          </Info>
        )
        }
        <ChartBox>
          {
            timeline.map((date, id) => (
              <CandleButton
                type="button"
                key={id}
                onClick={() => focus(date)}
              >
                <Candlestick
                  data={selected === 'cases' ? date.cases : date.deaths}
                  scale={max}
                />
              </CandleButton>
            ))
          }
          <div ref={anchor} />
        </ChartBox>
        <Disclaimer>
          <ArrowLeft />
          <p>Scroll</p>
          <ArrowRight />
        </Disclaimer>
      </Box>
    </Container>
  );
};

export default Chart;
