import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Support from '../Support/Support';
import Resource from '../Resource/Resource';
import Pets from '../Pets/Pets';
import history from '../../history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
         <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/resource" component={Resource} />
            <Route exact path="/pets" component={Pets} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
