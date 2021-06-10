import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Overview from './views/Overview';
import Offer from './views/Offer';

import ScrollToTop from './ScrollToTop';

import './App.css';

export default function App() {
  const [city, setCity] = useState()
  const [price, setPrice] = useState()
  const [offer, setOffer] = useState()
  const [people, setPeople] = useState()

  const [answers, setAnswers] = useState([])

  useEffect(() => {
    // if there are relevant query params, make sure to pass them on
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('tmbw-city')) setCity(urlParams.get('tmbw-city'))
    if (urlParams.has('tmbw-price')) setPrice(urlParams.get('tmbw-price'))
    if (urlParams.has('tmbw-offer')) setOffer(urlParams.get('tmbw-offer'))
    if (urlParams.has('tmbw-people')) setPeople(urlParams.get('tmbw-people'))

    if (urlParams.has('q1')) {
      setAnswers([
        urlParams.get('q1'),
        urlParams.get('q2'),
        urlParams.get('q3'),
        urlParams.get('q4'),
        urlParams.get('q5'),
        urlParams.get('q6'),
        urlParams.get('q7')
      ])
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
              answers={answers}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
