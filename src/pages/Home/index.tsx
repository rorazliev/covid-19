import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import stateList from '../../mocks/state-list.mock.json';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import StateList from '../../components/StateList';
import { fetch, reset } from '../../redux/dataReducer';
import { Dispatch, useSelector } from '../../redux/store';

const Home: React.FC = (): ReactElement => {
  // Create dispatch instance
  const dispatch: Dispatch = useDispatch();

  // Fetch data
  useEffect(() => {
    dispatch(fetch());
    return () => {
      dispatch(reset());
    };
  }, []);

  const isFetching = useSelector((state) => state.data.isFetching);
  const isError = useSelector((state) => state.data.isError);

  // If data is still fetching, display loader
  if (isFetching) return <Loader />;

  // If error is occured, display error message
  if (isError) return <Error />;

  // Display page
  return (
    <StateList list={stateList} />
  );
};

export default Home;
