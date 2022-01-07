import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from '../components/Chart';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Overall from '../components/Overall';
import { fetch, reset } from '../redux/dataReducer';
import { Dispatch, useSelector } from '../redux/store';

const StatePage: React.FC = (): ReactElement => {
  const isFetching = useSelector((state) => state.data.isFetching);
  const isError = useSelector((state) => state.data.isError);

  //
  let { name } = useParams<{ name: string }>();
  name = name?.replaceAll('-', ' ');

  // Get a reference to the dispatch function
  const dispatch: Dispatch = useDispatch();

  // Fetch data
  useEffect(() => {
    dispatch(fetch(name));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, name]);

  // Render an error message, if the error occurs
  if (isError) return <Error />;

  // Render loader on data fetching
  if (isFetching) return <Loader />;

  // Render
  return (
    <>
      <Overall name={name as string} />
      <Chart />
    </>
  );
};

export default StatePage;
