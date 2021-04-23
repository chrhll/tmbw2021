import './style.css';

export default function OfferInfo(offer) {
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
        </div>
      </div>
    </div>
  )
}
