import AuthRoute from './AuthRoute';
import Builds from './Builds'
import BuildView from './BuildView'
import BuildForm from './BuildForm'
import FetchBuilds from './FetchBuilds'
import FetchUser from './FetchUser';
import Flash from './Flash';
import ItemForm from './ItemForm'
import Home from './Home';
import Login from './Login';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import ProtectedRoute from './ProtectedRoute';
import React, { Component } from 'react';
import Register from './Register';
import UserBuilds from './UserBuilds'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Builds} />
            {/* <Route path='/builds' component={FetchBuilds} /> */}
            <Route exact path="/builds/:id" component={BuildView} />
            <Route exact path="/builds" component={Builds} />
            <Route exact path='/itemform' component={ItemForm} />
            <ProtectedRoute exact path='/userbuilds' component={UserBuilds} />
            <ProtectedRoute exact path='/create' component={BuildForm} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
