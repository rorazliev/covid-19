import React, { ReactElement, Suspense, useEffect } from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
import { Content } from './styles';
import Footer from '../Footer';
import Header from '../Header';
import Loader from '../Loader';
import ignoreRejection from '../../helpers/ignoreRejection';

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
            <Route exact path="/" render={() => null} />
            <Route exact path="/:state" render={() => null} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </Content>
      <Footer />
    </Router>
  );
};

export default App;
