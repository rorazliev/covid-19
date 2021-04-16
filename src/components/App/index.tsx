import React, { ReactElement, Suspense, useEffect } from 'react';
import {
  HashRouter as Router, Switch, Redirect, Route,
} from 'react-router-dom';
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
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" render={() => null} />
          <Route exact path="/:state" render={() => null} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
