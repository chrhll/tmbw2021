import './style.css';

export default function OfferHero(props) {
  return (
    <div className="tmbw-offer-hero">
      <div className="tmbw-offer-hero-inner">
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
