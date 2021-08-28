import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Docs from './Docs';
function App() {
  return (
    <BrowserRouter>
    <div className="app_container">
      <ul className="app_nav_bar">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/docs">
          <Docs />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  )}

export default App;