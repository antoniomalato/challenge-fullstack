import { Switch, Route } from 'react-router-dom';
import FormClient from './pages/FormClient';
import FormMoviment from './pages/FormMoviment'
import Home from './pages/Home';
import ClientList from './pages/ClientList';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/register" component={ FormClient } />
      <Route exact path="/create" component={ FormMoviment } />
      <Route exact path="/client" component={ ClientList } />
    </Switch>
  );
}

export default App;
