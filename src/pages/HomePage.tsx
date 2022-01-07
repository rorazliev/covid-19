import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Chart from '../components/Chart';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Overall from '../components/Overall';
import StateList from '../components/StateList';
import { fetch, reset } from '../redux/dataReducer';
import { Dispatch, useSelector } from '../redux/store';

const HomePage: React.FC = (): ReactElement => {
  //
  const isFetching = useSelector((state) => state.data.isFetching);
  const isError = useSelector((state) => state.data.isError);

  // Get a reference to the dispatch function
  const dispatch: Dispatch = useDispatch();

  // Fetch data
  useEffect(() => {
    dispatch(fetch());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  // Render an error message, if the error occurs
  if (isError) return <Error />;

  // Render loader on data fetching
  if (isFetching) return <Loader />;

  // Render
  return (
    <>
      <Overall name="The United States" />
      <Chart />
      <StateList />
    </>
  );
};

export default HomePage;
