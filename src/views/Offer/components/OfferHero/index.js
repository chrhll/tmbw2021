import { ArrowLeft, Grid } from 'react-feather';

import './style.css';

export default function OfferHero(props) {
  const rawPath = 'https://res.cloudinary.com/viewyork-media/image/upload/'
  const newPath = 'https://res.cloudinary.com/viewyork-media/image/upload/q_auto/'

  let backgroundUrl;
  if (props.offer.pictures) {
    if (Array.isArray(props.offer.pictures) && props.offer.pictures.length) {
      backgroundUrl = props.offer.pictures[0].replace(rawPath, newPath)
    } else if (typeof props.offer.pictures === 'string' && props.offer.pictures.length) {
      backgroundUrl = props.offer.pictures.replace(rawPath, newPath)
    }
  }

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
        <a href={backLink} className="tmbw-offer-back">
          <ArrowLeft color='#231F1D' size={24} />
        </a>

        <a href='/erleben/staedte-des-suedens' className="tmbw-offer-home">
          <Grid color='#231F1D' size={20} />
        </a>


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
