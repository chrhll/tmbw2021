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

  // http://stackoverflow.com/a/10997390/11236
  function updateURLParameter(url, param, paramVal){
    let newAdditionalURL = ""
    let tempArray = url.split("?")
    let baseURL = tempArray[0]
    let additionalURL = tempArray[1]
    let temp = ""
    if (additionalURL) {
      tempArray = additionalURL.split("&")
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].split('=')[0] !== param) {
          newAdditionalURL += temp + tempArray[i]
          temp = "&"
        }
      }
    }

    let rows_txt;
    if (paramVal) {
      rows_txt = temp + "" + param + "=" + paramVal
    } else {
      rows_txt = temp
    }
    return baseURL + "?" + newAdditionalURL + rows_txt
  }

  function updateCity(c) {
    window.history.replaceState(
      '', '', updateURLParameter(window.location.href, 'tmbw-city', c)
    )

    setCity(c)
  }

  function updatePrice(p) {
    window.history.replaceState(
      '', '', updateURLParameter(window.location.href, 'tmbw-price', p)
    )

    setPrice(p)
  }

  function updateOffer(o) {
    window.history.replaceState(
      '', '', updateURLParameter(window.location.href, 'tmbw-offer', o)
    )

    setOffer(o)
  }

  function updatePeople(p) {
    window.history.replaceState(
      '', '', updateURLParameter(window.location.href, 'tmbw-people', p)
    )

    setPeople(p)
  }

  let overviewBanner;
  if (false) {
    overviewBanner = <OverviewBanner selectedCity={city} />
  }

  return (
    <div className="tmbw-overview">
      <OverviewHero
        offer={offer}
        selectOffer={o => setOffer(o)}
        />

      <OverviewFilters
        selectCity={c => updateCity(c)}
        selectPrice={p => updatePrice(p)}
        selectOffer={o => updateOffer(o)}
        selectPeople={p => updatePeople(p)}
        city={city}
        price={price}
        offer={offer}
        people={people}
        answers={props.answers}
        />

      <OverviewResults
        selectedCity={city}
        selectedPrice={price}
        selectedOffer={offer}
        selectedPeople={people}
        answers={props.answers}
        />

      {overviewBanner}

      <div className="tmbw-overview-more-results">
      </div>
    </div>
  )
}
