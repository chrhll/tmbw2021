import { useState, useEffect } from 'react';

import OverviewHero from './components/OverviewHero';
import OverviewFilters from './components/OverviewFilters';
import OverviewResults from './components/OverviewResults';
import OverviewBanner from './components/OverviewBanner';

export default function Overview(props) {
  const [city, setCity] = useState()
  const [price, setPrice] = useState()
  const [offer, setOffer] = useState()
  const [people, setPeople] = useState()
  const [cityInit, setCityInit] = useState(false)
  const [priceInit, setPriceInit] = useState(false)
  const [offerInit, setOfferInit] = useState(false)
  const [peopleInit, setPeopleInit] = useState(false)


  useEffect(() => {
    // city init
    if (props.preSelectedCity && !cityInit) {
      setCity(props.preSelectedCity)
      setCityInit(true)
    } else if (!cityInit) {
      // NOTE: If coming from a <Link /> component, this code has to set all
      // query parameters as the <App /> component won't re-render.

      // if there are relevant query params, make sure to pass them on
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      setCity(urlParams.get('tmbw-city'))
      setCityInit(true)
    }

    // price init
    if (props.preSelectedPrice && !priceInit) {
      setPrice(props.preSelectedPrice)
      setPriceInit(true)
    }

    // offer init
    if (props.preSelectedOffer && !offerInit) {
      setOffer(props.preSelectedOffer)
      setOfferInit(true)
    }

    // people init
    if (props.preSelectedPeople && !peopleInit) {
      setPeople(props.preSelectedPeople)
      setPeopleInit(true)
    }
  }, [props.preSelectedCity, props.preSelectedPrice, props.preSelectedOffer, props.preSelectedPeople, cityInit, priceInit, offerInit, peopleInit])

  return (
    <div className="tmbw-overview">
      <OverviewHero
        offer={offer}
        selectOffer={o => setOffer(o)}
        />

      <OverviewFilters
        selectCity={c => setCity(c)}
        selectPrice={p => setPrice(p)}
        selectOffer={o => setOffer(o)}
        selectPeople={p => setPeople(p)}
        city={city}
        price={price}
        offer={offer}
        people={people}
        />

      <OverviewResults
        selectedCity={city}
        selectedPrice={price}
        selectedOffer={offer}
        selectedPeople={people}
        />

        <OverviewBanner selectedCity={city} />

      <div className="tmbw-overview-more-results">
      </div>
    </div>
  )
}
