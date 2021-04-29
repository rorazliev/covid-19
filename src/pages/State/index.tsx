import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { fetch, reset } from '../../redux/dataReducer';
import { Dispatch, useSelector } from '../../redux/store';
import Overall from '../../components/Overall';
import Chart from '../../components/Chart';

const State: React.FC = (): ReactElement => {
  // Create dispatch instance
  const dispatch: Dispatch = useDispatch();

  const { state } = useParams<{state: string}>();

  // Format from URL to string
  const formatted = state.replaceAll('-', ' ');

  // Fetch data
  useEffect(() => {
    dispatch(fetch(formatted));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, formatted]);

  const isFetching = useSelector((state) => state.data.isFetching);
  const isError = useSelector((state) => state.data.isError);

  // If data is still fetching, display loader
  if (isFetching) return <Loader />;

  // If error is occured, display error message
  if (isError) return <Error />;

  // Display page
  return (
    <>
      <Overall name={formatted} />
      <Chart />
    </>
  );
};

export default State as React.FC;
