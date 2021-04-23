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

  return (
    <div className="tmbw-offer-info">
      <div className="tmbw-offer-info-inner">
        <p className="tmbw-offer-info-description">
          Erlebe ein genüssliches Wochenende in Heilbronn in Verbindung mit einem spannenden Besuch in der experimenta, Deutschlands größtem Science-Center.<br />
          <br />
          <strong>Inklusive:</strong>
        </p>

        <div className="tmbw-offer-info-amenities">
          <div className="tmbw-offer-info-amenity">
            2 Übernachtungen mit Frühstück
          </div>
          <div className="tmbw-offer-info-amenity">
            3-Gang-Menü im Hotel am Anreisetag
          </div>
          <div className="tmbw-offer-info-amenity">
            3-Gang-Menü in der Wein Villa
          </div>
          <div className="tmbw-offer-info-amenity">
            Tagesticket für die experimenta
          </div>
        </div>

        <div className="tmbw-offer-info-gallery">
          <div
            className="tmbw-offer-info-gallery-i1"
            style={{ backgroundImage: `url(${img1})` }}
            >
          </div>

          <div className="tmbw-offer-info-gallery-i234">
            <div
              className="tmbw-offer-info-gallery-i2"
              style={{ backgroundImage: `url(${img2})` }}
              >
            </div>
            <div
              className="tmbw-offer-info-gallery-i3"
              style={{ backgroundImage: `url(${img3})` }}
              >
            </div>
            <div
              className="tmbw-offer-info-gallery-i4"
              style={{ backgroundImage: `url(${img4})` }}
              >
              <div className="tmbw-offer-info-gallery-badge" onClick={() => setShowLightbox(true)}>
                <Maximize size={14} /> {props.offer.pictures.length} Bilder
              </div>
            </div>

            {lightbox}
          </div>
        </div>
      </div>
    </div>
  )
}
