import { useParams } from 'react-router-dom';

import OfferHero from './components/OfferHero';

import offers from '../../helpers/offers.js'

import './style.css';

export default function Offer(props) {
  const { offerId } = useParams()

  let offer = {};
  const matchingOffers = offers.filter(o => o.id === offerId)
  if (matchingOffers.length) offer = matchingOffers.pop()

  return (
    <div className="tmbw-offer">
      <OfferHero offer={offer}/>

      <div className="tmbw-offer-meta">
      </div>

      <div className="tmbw-offer-info">
      </div>

      <div className="tmbw-offer-upsell">
      </div>

      <div className="tmbw-offer-banner">
      </div>
    </div>
  )
}
