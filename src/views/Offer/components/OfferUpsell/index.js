import OverviewResult from '../../../Overview/components/OverviewResults/components/OverviewResult';

import './style.css';

export default function OfferUpsell(props) {
  // pick the first three offers of the same location
  let upsellOffers = [];
  for (let o of props.offers) {
    if (o.id !== props.offer.id) {
      if (o.city === props.offer.city) upsellOffers.push(o)
    }

    if (upsellOffers.length > 2) break;
  }

  // if there are less than three upsell offers, fill them up
  if (upsellOffers.length < 3) {
    for (let o of props.offers) {
      if (o.id !== props.offer.id && !upsellOffers.includes(o)) {
        upsellOffers.push(o)
      }

      if (upsellOffers.length > 2) break;
    }
  }

  return (
    <div className="tmbw-offer-upsell">
      <h5 className="tmbw-offer-upsell-subline">Mehr entdecken</h5>
      <h3 className="tmbw-offer-upsell-headline">Aktivitäten in der Nähe von {props.offer.city}</h3>
      <div className="tmbw-offer-upsell-inner">
        {upsellOffers.map(o => <OverviewResult key={o.id} offer={o} />)}
      </div>
    </div>
  )
}
