import { useState } from 'react';

import OverviewHero from './components/OverviewHero';
import OverviewFilters from './components/OverviewFilters';
import OverviewResults from './components/OverviewResults';

import './style.css';

export default function Overview(props) {
  const [city, setCity] = useState()
  const [price, setPrice] = useState()
  const [offer, setOffer] = useState()
  const [people, setPeople] = useState()

  return (
    <div className="tmbw-overview">
      <OverviewHero />

      <OverviewFilters
        selectCity={c => setCity(c)}
        selectPrice={p => setPrice(p)}
        selectOffer={o => setOffer(o)}
        selectPeople={p => setPeople(p)}
        />

      <OverviewResults
        selectedCity={city}
        selectedPrice={price}
        selectedOffer={offer}
        selectedPeople={people}
        />

      <div className="tmbw-overview-results">
      </div>

      <div className="tmbw-overview-banner">
      </div>

      <div className="tmbw-overview-more-results">
      </div>
    </div>
  )
}
