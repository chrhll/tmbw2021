import { useState, useEffect } from 'react';

import OfferHero from './components/OfferHero';
import OfferMeta from './components/OfferMeta';
import OfferInfo from './components/OfferInfo';
import OfferUpsell from './components/OfferUpsell';

import offers from '../../helpers/offers.js'

export default function Offer(props) {
  const [offerId, setOfferId] = useState();

  let offer = {};
  const matchingOffers = offers.filter(o => o.id === offerId)
  if (matchingOffers.length) offer = matchingOffers.pop()

  let randomOffers = [
    offers[Math.floor(Math.random() * offers.length)],
    offers[Math.floor(Math.random() * offers.length)],
    offers[Math.floor(Math.random() * offers.length)]
  ]

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (urlParams.has('tmbw-oid')) setOfferId(urlParams.get('tmbw-oid'))
  }, [setOfferId])

  return (
    <div className="tmbw-offer">
      <OfferHero offer={offer}/>
      <OfferMeta offer={offer} />
      <OfferInfo offer={offer} />

      <OfferUpsell
        offer={offer}
        offers={offers}
        title={`Aktivitäten in der Nähe von ${offer.city}`}
        subtitle="Mehr entdecken"
        />

      <OfferUpsell
        offer={offer}
        offers={randomOffers}
        title='Unsere Vielfalt'
        subtitle="Weitere Angebote"
        />
    </div>
  )
}
