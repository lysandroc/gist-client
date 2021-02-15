import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchUser, User } from './containers';
import { AppProvider } from 'context';

const App = (): ReactElement => (
    <AppProvider>
        <Router>
            <Switch>
                <Route exact path="/" component={SearchUser} />
                <Route exact path="/user/:user" component={User} />
            </Switch>
        </Router>
    </AppProvider>
);

export default App;
