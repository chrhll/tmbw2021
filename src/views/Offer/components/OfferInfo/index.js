import { useState } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Maximize } from 'react-feather';

import './style.css';

export default function OfferInfo(props) {
  const [showLightbox, setShowLightbox] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0);

  let lightbox;
  if (showLightbox) {
    lightbox = (
      <Lightbox
        mainSrc={props.offer.pictures[photoIndex]}
        nextSrc={props.offer.pictures[(photoIndex + 1) % props.offer.pictures.length]}
        prevSrc={props.offer.pictures[(photoIndex + props.offer.pictures.length - 1) % props.offer.pictures.length]}
        onCloseRequest={() => setShowLightbox(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + props.offer.pictures.length - 1) % props.offer.pictures.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % props.offer.pictures.length)}
      />
    )
  }

  let amenities;
  if (props.offer.amenities) {
    let amenityList = props.offer.amenities.map((a, i) => (
      <div key={`amenity-${i}`} className="tmbw-offer-info-amenity">{a}</div>
    ))

    amenities = (
      <>
        <p className="tmbw-offer-info-description">
          <br />
          <strong>Inklusive:</strong>
        </p>
        <div className="tmbw-offer-info-amenities">
          {amenityList}
        </div>
      </>
    )
  }

  let prices;
  if (props.offer.price) {
    let priceList = props.offer.price.map((p, i) => (
      <a
        key={`price-${i}`}
        className="tmbw-offer-info-amenity tmbw-offer-info-price"
        href={props.offer.link}
        target="_blank"
        rel="noreferrer"
        >
        {p}
      </a>
    ))

    prices = (
      <>
        <p className="tmbw-offer-info-description">
          <br />
          <strong>Preise:</strong>
        </p>
        <div className="tmbw-offer-info-amenities">
          {priceList}
        </div>
      </>
    )
  }

  function setShowLightboxWithIndex(idx) {
    setPhotoIndex(idx)
    setShowLightbox(true)
  }

  let imageGallery;
  if (props.offer.pictures.length > 4) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1"
          style={{ backgroundImage: `url(${props.offer.pictures[1]})` }}
          onClick={() => setShowLightboxWithIndex(1)}
          >
        </div>

        <div className="tmbw-offer-info-gallery-i234">
          <div
            className="tmbw-offer-info-gallery-i2"
            style={{ backgroundImage: `url(${props.offer.pictures[2]})` }}
            onClick={() => setShowLightboxWithIndex(2)}
            >
          </div>
          <div
            className="tmbw-offer-info-gallery-i3"
            style={{ backgroundImage: `url(${props.offer.pictures[3]})` }}
            onClick={() => setShowLightboxWithIndex(3)}
            >
          </div>
          <div
            className="tmbw-offer-info-gallery-i4"
            style={{ backgroundImage: `url(${props.offer.pictures[4]})` }}
            onClick={() => setShowLightboxWithIndex(4)}
            >
          </div>

          <div className="tmbw-offer-info-gallery-badge" onClick={() => setShowLightboxWithIndex(0)}>
            <Maximize size={14} /> {props.offer.pictures.length} Bilder
          </div>

          {lightbox}
        </div>
      </div>
    )
  } else if (props.offer.pictures.length > 3) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1"
          style={{ backgroundImage: `url(${props.offer.pictures[1]})` }}
           onClick={() => setShowLightboxWithIndex(1)}
          >
        </div>

        <div className="tmbw-offer-info-gallery-i234 tmbw-offer-info-gallery-i234c">
          <div
            className="tmbw-offer-info-gallery-i4 tmbw-offer-info-gallery-i4"
            style={{ backgroundImage: `url(${props.offer.pictures[2]})` }}
            onClick={() => setShowLightboxWithIndex(2)}
            >
          </div>
          <div
            className="tmbw-offer-info-gallery-i4 tmbw-offer-info-gallery-i4"
            style={{ backgroundImage: `url(${props.offer.pictures[3]})` }}
            onClick={() => setShowLightboxWithIndex(3)}
            >
          </div>

          {lightbox}
        </div>
      </div>
    )
  } else if (props.offer.pictures.length > 2) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1"
          style={{ backgroundImage: `url(${props.offer.pictures[1]})` }}
           onClick={() => setShowLightboxWithIndex(1)}
          >
        </div>

        <div className="tmbw-offer-info-gallery-i234 tmbw-offer-info-gallery-i234c">
          <div
            className="tmbw-offer-info-gallery-i4 tmbw-offer-info-gallery-i5"
            style={{ backgroundImage: `url(${props.offer.pictures[2]})` }}
            onClick={() => setShowLightboxWithIndex(2)}
            >
          </div>

          {lightbox}
        </div>
      </div>
    )
  } else if (props.offer.pictures.length > 1) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1 tmbw-offer-info-gallery-i1-full"
          style={{ backgroundImage: `url(${props.offer.pictures[1]})` }}
          onClick={() => setShowLightboxWithIndex(1)}
          >

          {lightbox}
        </div>
      </div>
    )
  }

  return (
    <div className="tmbw-offer-info">
      <div className="tmbw-offer-info-inner">
        <p className="tmbw-offer-info-description">{props.offer.description}</p>

        {amenities}
        {prices}

        {imageGallery}
      </div>
    </div>
  )
}
