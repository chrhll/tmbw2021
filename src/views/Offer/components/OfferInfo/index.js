import { useState } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Maximize } from 'react-feather';

import './style.css';

export default function OfferInfo(props) {
  const [showLightbox, setShowLightbox] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0);

  const rawPath = 'https://res.cloudinary.com/viewyork-media/image/upload/';
  const newPath = 'https://res.cloudinary.com/viewyork-media/image/upload/q_auto/';

  let pictures = [];
  if (props.offer && props.offer.pictures) {
    if (Array.isArray(props.offer.pictures)) {
      pictures = props.offer.pictures.map(p => p.replace(rawPath, newPath))
    } else if (typeof props.offer.pictures) {
      pictures = [props.offer.pictures.replace(rawPath, newPath)]
    }
  }

  let lightbox;
  if (showLightbox) {
    lightbox = (
      <Lightbox
        mainSrc={pictures[photoIndex]}
        nextSrc={pictures[(photoIndex + 1) % pictures.length]}
        prevSrc={pictures[(photoIndex + pictures.length - 1) % pictures.length]}
        onCloseRequest={() => setShowLightbox(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + pictures.length - 1) % pictures.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % pictures.length)}
      />
    )
  }

  let amenities;
  if (props.offer.amenities) {
    let amenitiesOptions = []
    if (Array.isArray(props.offer.amenities)) {
      amenitiesOptions = props.offer.amenities
    } else if (typeof props.offer.amenities === 'string') {
      amenitiesOptions = [props.offer.amenities]
    }

    let amenityList = amenitiesOptions.map((a, i) => (
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
    let priceOptions = []
    if (Array.isArray(props.offer.price)) {
      priceOptions = props.offer.price
    } else if (typeof props.offer.price === 'string') {
      priceOptions = [props.offer.price]
    }

    let priceList = priceOptions.map((p, i) => (
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
  if (pictures.length > 4) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1"
          style={{ backgroundImage: `url(${pictures[1]})` }}
          onClick={() => setShowLightboxWithIndex(1)}
          >
        </div>

        <div className="tmbw-offer-info-gallery-i234">
          <div
            className="tmbw-offer-info-gallery-i2"
            style={{ backgroundImage: `url(${pictures[2]})` }}
            onClick={() => setShowLightboxWithIndex(2)}
            >
          </div>
          <div
            className="tmbw-offer-info-gallery-i3"
            style={{ backgroundImage: `url(${pictures[3]})` }}
            onClick={() => setShowLightboxWithIndex(3)}
            >
          </div>
          <div
            className="tmbw-offer-info-gallery-i4"
            style={{ backgroundImage: `url(${pictures[4]})` }}
            onClick={() => setShowLightboxWithIndex(4)}
            >
          </div>

          <div className="tmbw-offer-info-gallery-badge" onClick={() => setShowLightboxWithIndex(0)}>
            <Maximize size={14} /> {pictures.length} Bilder
          </div>

          {lightbox}
        </div>
      </div>
    )
  } else if (pictures.length > 3) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1"
          style={{ backgroundImage: `url(${pictures[1]})` }}
           onClick={() => setShowLightboxWithIndex(1)}
          >
        </div>

        <div className="tmbw-offer-info-gallery-i234 tmbw-offer-info-gallery-i234c">
          <div
            className="tmbw-offer-info-gallery-i4 tmbw-offer-info-gallery-i4"
            style={{ backgroundImage: `url(${pictures[2]})` }}
            onClick={() => setShowLightboxWithIndex(2)}
            >
          </div>
          <div
            className="tmbw-offer-info-gallery-i4 tmbw-offer-info-gallery-i4"
            style={{ backgroundImage: `url(${pictures[3]})` }}
            onClick={() => setShowLightboxWithIndex(3)}
            >
          </div>

          {lightbox}
        </div>
      </div>
    )
  } else if (pictures.length > 2) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1"
          style={{ backgroundImage: `url(${pictures[1]})` }}
           onClick={() => setShowLightboxWithIndex(1)}
          >
        </div>

        <div className="tmbw-offer-info-gallery-i234 tmbw-offer-info-gallery-i234c">
          <div
            className="tmbw-offer-info-gallery-i4 tmbw-offer-info-gallery-i5"
            style={{ backgroundImage: `url(${pictures[2]})` }}
            onClick={() => setShowLightboxWithIndex(2)}
            >
          </div>

          {lightbox}
        </div>
      </div>
    )
  } else if (pictures.length > 1) {
    imageGallery = (
      <div className="tmbw-offer-info-gallery">
        <div
          className="tmbw-offer-info-gallery-i1 tmbw-offer-info-gallery-i1-full"
          style={{ backgroundImage: `url(${pictures[1]})` }}
          onClick={() => setShowLightboxWithIndex(1)}
          >

          {lightbox}
        </div>
      </div>
    )
  }

  let formattedDescription;
  if (props.offer.description && typeof props.offer.description === 'string') {
    formattedDescription = props.offer.description.split('\n').map(e => <p>{e}</p>)
  } else if (props.offer.description && Array.isArray(props.offer.description)) {
    formattedDescription = props.offer.description.map(e => <p>{e}</p>)
  }

  return (
    <div className="tmbw-offer-info">
      <div className="tmbw-offer-info-inner">
        <p className="tmbw-offer-info-description">{formattedDescription}</p>

        <a className="tmbw-offer-info-corona-info" href="https://www.tourismus-bw.de/informationen-zum-coronavirus" target="_blank" rel="noreferrer">
        Bitte beachten Sie die aktuellen Corona-Regelungen, diese finden Sie <span>hier</span>.
        </a>

        {amenities}
        {prices}

        {imageGallery}

      </div>
    </div>
  )
}
