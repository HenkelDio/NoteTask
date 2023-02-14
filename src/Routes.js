import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/home';
import Cards from './pages/cards';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Cards} />
      </Switch>
    </animated.div>
  ));
}
