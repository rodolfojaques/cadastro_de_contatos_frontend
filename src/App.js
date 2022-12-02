import './App.css';
import { ClienteProvider } from './providers/client';
import Home from "./pages/home"
import { Route, Switch } from 'react-router-dom';
import Contacts from './pages/contacts';

function App() {
  return (
    <ClienteProvider>
      <div className="App">
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/contacts"}>
            <Contacts />
          </Route>
        </Switch>        
      </div>      
    </ClienteProvider>
  );
}

export default App;
