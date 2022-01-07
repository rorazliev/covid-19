/* eslint-disable react/no-array-index-key */
import React, {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import {
  Box, Button, Typography,
} from '@mui/material';
import Candlestick from './Candlestick';
import { useSelector } from '../redux/store';

const Chart: React.FC = (): ReactElement => {
  // Get timeline data
  const data = useSelector((state) => state.data.timeline);

  const [selected, setSelected] = useState('cases');
  const [focused, setFocused] = useState<number>();

  // Get scale
  const scale = useSelector(
    (state) => (selected === 'cases'
      ? state.data.overall.cases : state.data.overall.deaths),
  );

  // Create an anchor to the end of the chart
  const anchor = useRef<HTMLDivElement>(null);

  // Scroll to the end of chart
  useEffect(() => {
    if (anchor && anchor.current) {
      anchor.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, []);

  // Render
  return (
    <>
      <Box>
        <Button
          type="button"
          sx={{
            backgroundColor: 'secondary.main',
          }}
          onClick={() => setSelected('cases')}
        >
          Cases
        </Button>
        <Button
          type="button"
          sx={{
            backgroundColor: 'secondary.main',
            marginLeft: 1,
          }}
          onClick={() => setSelected('deaths')}
        >
          Deaths
        </Button>
      </Box>
      <Typography
        variant="body2"
        sx={{
          marginBottom: 2,
          marginTop: 2,
        }}
      >
        {focused
          ? `${
            selected === 'cases'
              ? (data[focused].cases - data[focused - 1].cases).toLocaleString()
              : (
                data[focused].deaths - data[focused - 1].deaths
              ).toLocaleString()
          } ${selected}: ${dayjs(data[focused].date).format('MMM D, YYYY')}`
          : 'Click on any to see more information'}
      </Typography>
      <Box
        sx={{
          boxSizing: 'border-box',
          whiteSpace: 'nowrap',
          flexDirection: 'row',
          alignItems: 'center',
          overflow: 'auto',
          display: 'flex',
        }}
      >
        {data.map((item, id) => (
          <Box
            key={id}
            onClick={() => setFocused(id)}
            onMouseEnter={() => setFocused(id)}
          >
            <Candlestick
              key={id}
              data={selected === 'cases' ? item.cases : item.deaths}
              scale={scale}
            />
          </Box>
        ))}
        <Box ref={anchor} />
      </Box>
    </>
  );
};

export default Chart;
