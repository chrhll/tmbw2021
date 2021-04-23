import './style.css';

export default function OfferHero(props) {
  let backgroundUrl = 'http://placeimg.com/1600/900/nature'
  if (props.offer.pictures.length) backgroundUrl = props.offer.pictures[0]

  return (
    <div
      className="tmbw-offer-hero"
      style={{
        backgroundImage: `url('${backgroundUrl}')`
      }}
      >
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
