import { useParams } from 'react-router-dom';

import OfferHero from './components/OfferHero';
import OfferMeta from './components/OfferMeta';
import OfferInfo from './components/OfferInfo';
import OfferUpsell from './components/OfferUpsell';

import OverviewBanner from '../Overview/components/OverviewBanner';

import offers from '../../helpers/offers.js'

export default function Offer(props) {
  const { offerId } = useParams()

  let offer = {};
  const matchingOffers = offers.filter(o => o.id === offerId)
  if (matchingOffers.length) offer = matchingOffers.pop()

  return (
    <div className="tmbw-offer">
      <OfferHero offer={offer}/>
      <OfferMeta offer={offer} />
      <OfferInfo offer={offer} />
      <OfferUpsell offer={offer} offers={offers} />

      <OverviewBanner selectedCity={offer.city} />
    </div>
  )
}
