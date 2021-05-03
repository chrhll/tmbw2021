import { Link } from 'react-router-dom';

import { ArrowLeft } from 'react-feather';

import './style.css';

export default function OfferHero(props) {
  let backgroundUrl = 'http://placeimg.com/1600/900/nature'
  if (props.offer.pictures.length) backgroundUrl = props.offer.pictures[0]

  const urlParams = new URLSearchParams(window.location.search);

  let backLink;
  if (document.location.search && urlParams.get('returnTo')) {
    backLink = urlParams.get('returnTo')
  }

  return (
    <div className="tmbw-offer-hero"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
      <div className="tmbw-offer-hero-inner">
        <Link to={backLink} className="tmbw-offer-back">
          <ArrowLeft color='#231F1D' size={24} />
        </Link>


        <h5 className="tmbw-offer-hero-subtitle">
          {props.offer.city}
        </h5>
        <h1 className="tmbw-offer-hero-title">
          {props.offer.title}
        </h1>
      </div>
    </div>
  )
}
