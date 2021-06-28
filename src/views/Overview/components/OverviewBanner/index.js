import { useState } from 'react';

import { Play, X } from 'react-feather';

import './style.css';

import offers from '../../../../helpers/offers';

export default function OverviewBanner(props) {
  const [showModal, setShowModal] = useState(false)

  const rawPath = 'https://res.cloudinary.com/viewyork-media/image/upload/'
  const newPath = 'https://res.cloudinary.com/viewyork-media/image/upload/q_auto/'

  const randomOffer = offers[Math.floor(offers.length * Math.random())];
  
  let randomCover;
  if (Array.isArray(randomOffer.pictures)) {
    randomCover = randomOffer.pictures[0].replace(rawPath, newPath)
  } else {
    randomCover = randomOffer.pictures.replace(rawPath, newPath)
  }

  let videoModal;
  if (showModal) {
    videoModal = (
      <div className="OverviewBanner-modal">
        <div className="OverviewBanner-modal-inner">
          <X
            className="OverviewBanner-modal-close"
            size={20}
            color='white'
            onClick={() => setShowModal(false)}
            />
          <div className="OverviewBanner-modal-embed">
            <div className="OverviewBanner-modal-embed-placeholder">
              Video wird geladen ...
            </div>

            <iframe
              className="OverviewBanner-modal-iframe"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/eENXWl4_-3A?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              >
            </iframe>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="OverviewBanner">
      <div className="OverviewBanner-inner">
        <div className="OverviewBanner-preview" style={{ backgroundImage: `url('${randomCover}')` }}>
          <div
            className="OverviewBanner-preview-icon"
            onClick={() => setShowModal(true)}
            >
            <Play size={24} color='white' />
          </div>
        </div>
      </div>

      {videoModal}
    </div>
  )
}
