import { useState } from 'react';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Maximize } from 'react-feather';

import './style.css';

export default function OfferInfo(props) {
  const [showLightbox, setShowLightbox] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0);

  let img1 = 'http://placeimg.com/1600/900/nature'
  let img2 = 'http://placeimg.com/1600/900/nature'
  let img3 = 'http://placeimg.com/1600/900/nature'
  let img4 = 'http://placeimg.com/1600/900/nature'

  if (props.offer.pictures.length) {
    img1 = props.offer.pictures[1] || img1
    img2 = props.offer.pictures[2] || img2
    img3 = props.offer.pictures[3] || img3
    img4 = props.offer.pictures[4] || img4
  }

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

  function setShowLightboxWithIndex(idx) {
    setPhotoIndex(idx)
    setShowLightbox(true)
  }

  return (
    <div className="tmbw-offer-info">
      <div className="tmbw-offer-info-inner">
        <p className="tmbw-offer-info-description">{props.offer.description}</p>

        {amenities}

        <div className="tmbw-offer-info-gallery">
          <div
            className="tmbw-offer-info-gallery-i1"
            style={{ backgroundImage: `url(${img1})` }}
             onClick={() => setShowLightboxWithIndex(1)}
            >
          </div>

          <div className="tmbw-offer-info-gallery-i234">
            <div
              className="tmbw-offer-info-gallery-i2"
              style={{ backgroundImage: `url(${img2})` }}
              onClick={() => setShowLightboxWithIndex(2)}
              >
            </div>
            <div
              className="tmbw-offer-info-gallery-i3"
              style={{ backgroundImage: `url(${img3})` }}
              onClick={() => setShowLightboxWithIndex(3)}
              >
            </div>
            <div
              className="tmbw-offer-info-gallery-i4"
              style={{ backgroundImage: `url(${img4})` }}
              onClick={() => setShowLightboxWithIndex(4)}
              >
            </div>

            <div className="tmbw-offer-info-gallery-badge" onClick={() => setShowLightboxWithIndex(0)}>
              <Maximize size={14} /> {props.offer.pictures.length} Bilder
            </div>

            {lightbox}
          </div>
        </div>
      </div>
    </div>
  )
}
