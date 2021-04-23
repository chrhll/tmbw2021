import { MapPin, Share } from 'react-feather';

import './style.css';

export default function OfferMeta(props) {
  return (
    <div className="tmbw-offer-meta">
      <a href="/" className="tmbw-offer-cta-primary">
        Jetzt kaufen
      </a>

      <a href="/" className="tmbw-offer-cta-secondary">
        <MapPin size={14} /> Auf Karte anzeigen
      </a>

      <a href="/" className="tmbw-offer-cta-tertiary">
        <Share size={14} /> Teilen
      </a>
    </div>
  )
}
