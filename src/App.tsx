import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchUser, User } from './containers';

const App = (): ReactElement => (
    <Router>
        <Switch>
            <Route exact path="/" component={SearchUser} />
            <Route exact path="/user/:user" component={User} />
        </Switch>
    </Router>
);

export default App;
