import React, {
  lazy, ReactElement, Suspense, useEffect,
} from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import { Content } from './styles';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';
import Home from '../../pages/Home';
import ignoreRejection from '../../helpers/ignoreRejection';

const State = lazy(() => import('../../pages/State'));

const App: React.FC = (): ReactElement => {
  // Handle unhandled rejections
  useEffect(() => {
    window.addEventListener('unhandledrejection', ignoreRejection);
    return () => {
      window.removeEventListener('unhandledrejection', ignoreRejection);
    };
  });

  return (
    <Router>
      <Header />
      <Content role="main">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:state" component={State} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </Content>
      <Footer />
    </Router>
  );
};

export default App;
