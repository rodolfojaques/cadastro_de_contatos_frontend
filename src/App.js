import './App.css';
import { ClienteProvider } from './providers/client';
import Home from "./pages/home"
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ClienteProvider>
      <div className="App">
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
        </Switch>        
      </div>      
    </ClienteProvider>
  );
}

export default App;
