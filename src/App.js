import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Overview from './views/Overview';
import Offer from './views/Offer';

import './App.css';

export default function App() {
  const [city, setCity] = useState()
  const [price, setPrice] = useState()
  const [offer, setOffer] = useState()
  const [people, setPeople] = useState()

  useEffect(() => {
    // if there are relevant query params, make sure to pass them on
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('tmbw-city')) setCity(urlParams.get('tmbw-city'))
    if (urlParams.has('tmbw-price')) setPrice(urlParams.get('tmbw-price'))
    if (urlParams.has('tmbw-offer')) setOffer(urlParams.get('tmbw-offer'))
    if (urlParams.has('tmbw-people')) setPeople(urlParams.get('tmbw-people'))
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/angebot/:offerId">
            <Offer />
          </Route>

          <Route path="/*">
            <Overview
              preSelectedCity={city}
              preSelectedPrice={price}
              preSelectedOffer={offer}
              preSelectedPeople={people}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
