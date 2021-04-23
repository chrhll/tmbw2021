import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Overview from './views/Overview';
import Offer from './views/Offer';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/angebot/:offerId">
            <Offer />
          </Route>

          <Route path="/*">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
