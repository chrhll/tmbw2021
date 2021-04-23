import { MapPin, Share } from 'react-feather';

import './style.css';

export default function OfferMeta(props) {
  return (
    <div className="tmbw-offer-meta">
      <div className="tmbw-offer-actions">
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
      <div className="tmbw-offer-sponsor">
        <svg className="tmbw-offer-sponsor-logo" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.0002 44.6633C23.6099 44.6635 23.2236 44.5846 22.8647 44.4314C22.5058 44.2781 22.1816 44.0538 21.9118 43.7718L4.06917 25.3469C2.80005 24.0371 1.82279 22.4733 1.20176 20.7586C0.598792 19.0981 0.330695 17.3346 0.412945 15.5699C0.495195 13.8052 0.926165 12.0743 1.68097 10.4771C2.4659 8.82596 3.59237 7.36022 4.98589 6.17678C7.13824 4.33518 9.88285 3.33211 12.7155 3.35187C14.4867 3.36579 16.2373 3.73385 17.8642 4.4344C19.4911 5.13495 20.9615 6.15383 22.1888 7.43108L24.0049 9.30229L25.821 7.43108C27.0494 6.1544 28.5204 5.13594 30.1477 4.43545C31.7751 3.73496 33.5259 3.36656 35.2975 3.35187C38.1302 3.33154 40.875 4.33468 43.0271 6.17678C44.4207 7.36041 45.5472 8.82644 46.332 10.4779C47.0862 12.0754 47.5163 13.8066 47.5974 15.5714C47.6784 17.3361 47.4088 19.0994 46.8041 20.7593C46.1811 22.4744 45.2017 24.0379 43.9304 25.3469L33.2004 36.427C33.1857 36.2104 33.1786 35.9934 33.1792 35.7763V21.4581L22.0605 23.2341V25.7096H22.5972C23.8995 25.7096 24.7406 25.9418 25.0971 26.3989C25.5226 27.1297 25.7102 27.9748 25.6338 28.817V35.777C25.7057 36.6138 25.5225 37.4528 25.1081 38.1833C24.7603 38.6476 23.9152 38.8837 22.5972 38.8837H22.0605V41.3584H28.4241L26.0894 43.7694C25.8197 44.0519 25.4955 44.2768 25.1364 44.4305C24.7773 44.5841 24.3908 44.6633 24.0002 44.6633ZM29.0567 10.7612C28.1201 10.7612 27.2046 11.0389 26.4258 11.5592C25.6471 12.0796 25.0401 12.8192 24.6817 13.6845C24.3233 14.5498 24.2295 15.5019 24.4122 16.4205C24.5949 17.3391 25.046 18.1829 25.7082 18.8451C26.3705 19.5074 27.2143 19.9584 28.1329 20.1411C29.0515 20.3239 30.0036 20.2301 30.8689 19.8717C31.7342 19.5132 32.4738 18.9063 32.9941 18.1275C33.5145 17.3488 33.7922 16.4332 33.7922 15.4967C33.7907 14.2412 33.2913 13.0375 32.4036 12.1498C31.5158 11.262 30.3122 10.7626 29.0567 10.7612Z" fill="#B11030"/>
        <path d="M23.586 38.8255L8.55257 28.3308C6.94737 27.1909 5.72542 25.5911 5.04789 23.7426C4.37036 21.894 4.26909 19.8835 4.75742 17.9762C5.09015 16.6799 5.69414 15.469 6.52949 14.4234C7.36354 13.3873 8.42151 12.5535 9.62396 11.9848C10.8264 11.4161 12.1421 11.1272 13.4722 11.1398C15.4778 11.1416 17.4339 11.7626 19.0732 12.9181L20.6399 14.0095L21.6849 12.4137C22.5668 11.059 23.7671 9.94107 25.181 9.1576C26.5432 8.40086 28.0742 8.00003 29.6324 7.99222C31.1201 7.98799 32.583 8.37263 33.8761 9.10803C35.0425 9.76429 36.0563 10.6606 36.8505 11.7378C38.0179 13.3238 38.6767 15.2266 38.74 17.1949C38.8032 19.1632 38.2678 21.1044 37.2046 22.7621L33.1734 28.9501V21.4543L22.0547 23.2303V25.7058H22.5914C23.8937 25.7058 24.7349 25.9379 25.0913 26.3951C25.5169 27.1259 25.7044 27.971 25.628 28.8132V35.7693C25.7 36.6061 25.5167 37.445 25.1023 38.1756C24.7007 38.5813 24.156 38.8132 23.5852 38.8216L23.586 38.8255ZM29.0517 10.7573C28.1151 10.7573 27.1996 11.0351 26.4208 11.5554C25.6421 12.0757 25.0351 12.8153 24.6767 13.6806C24.3183 14.5459 24.2245 15.4981 24.4072 16.4167C24.5899 17.3352 25.041 18.179 25.7032 18.8413C26.3655 19.5036 27.2093 19.9546 28.1279 20.1373C29.0465 20.32 29.9986 20.2262 30.8639 19.8678C31.7292 19.5094 32.4688 18.9024 32.9891 18.1237C33.5095 17.345 33.7872 16.4294 33.7872 15.4928C33.7857 14.2373 33.2863 13.0337 32.3986 12.1459C31.5108 11.2582 30.3072 10.7588 29.0517 10.7573Z" fill="#D0304D"/>
        </svg>

        <div className="tmbw-offer-sponsor-note">
          <div className="tmbw-offer-sponsor-note-title">Offizieller Inhalt von</div>
          <div className="tmbw-offer-sponsor-name">Stadt Heilbronn</div>
        </div>
      </div>
    </div>
  )
}