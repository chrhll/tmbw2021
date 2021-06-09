import { useState } from 'react';

import { Share, Copy, Check } from 'react-feather';

import { Link } from 'react-router-dom';

import './style.css';

export default function OfferMeta(props) {
  const [showSharingWidget, setShowSharingWidget] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  // @see https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
  }

  // @see https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
  function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  function copyLink(e) {
    e.preventDefault()

    copyTextToClipboard(document.location.href)
    setLinkCopied(true)
  }

  function waitAndHide(e) {
    setTimeout(function() {
      setShowSharingWidget(false)
      setLinkCopied(false)
    }, 250)
  }

  let sharingWidget;
  if (showSharingWidget) {
    let linkBtn;
    if (linkCopied) {
      linkBtn = (
        <div className="tmbw-sharing-widget-link-button tmbw-sharing-widget-link-button--success" onClick={e => copyLink(e)}>
          <Check size={14} /> Link kopieren
        </div>
      )
    } else {
      linkBtn = (
        <div className="tmbw-sharing-widget-link-button" onClick={e => copyLink(e)}>
          <Copy size={14} /> Link kopieren
        </div>
      )
    }

    sharingWidget = (
      <div className="tmbw-sharing-widget" onClick={e => waitAndHide(e)}>
        <div className="tmbw-sharing-widget-inner">
          <div className="tmbw-sharing-widget-icons">
            <a target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?text=Schau mal was ich gefunden habe: ${props.offer.title} - ${window.location.href}`}>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
            </a>

            <a target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?text=Schau mal was ich gefunden habe: ${props.offer.title} - ${window.location.href}`}>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </a>

            <a target="_blank"
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?text=Schau mal was ich gefunden habe: ${props.offer.title} - ${window.location.href}`}>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
            </a>
          </div>
          <div className="tmbw-sharing-widget-link">
            <p><strong>Oder als Link teilen</strong></p>
            <div className="tmbw-sharing-widget-actions">
              <div className="tmbw-sharing-widget-link-box">{document.location.href}</div>
              {linkBtn}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="tmbw-offer-meta">
      <div className="tmbw-offer-actions">
        <a href={props.offer.link} target="_blank" rel="noreferrer" className="tmbw-offer-cta-primary">
          Zur Buchung
        </a>

        <div className="tmbw-offer-cta-container">
          <div className="tmbw-offer-cta-tertiary" onClick={e => setShowSharingWidget(!showSharingWidget)}>
            <Share size={14} /> Teilen
          </div>
          {sharingWidget}
        </div>
      </div>
      <div className="tmbw-offer-sponsor">
        <svg className="tmbw-offer-sponsor-logo" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.0002 44.6633C23.6099 44.6635 23.2236 44.5846 22.8647 44.4314C22.5058 44.2781 22.1816 44.0538 21.9118 43.7718L4.06917 25.3469C2.80005 24.0371 1.82279 22.4733 1.20176 20.7586C0.598792 19.0981 0.330695 17.3346 0.412945 15.5699C0.495195 13.8052 0.926165 12.0743 1.68097 10.4771C2.4659 8.82596 3.59237 7.36022 4.98589 6.17678C7.13824 4.33518 9.88285 3.33211 12.7155 3.35187C14.4867 3.36579 16.2373 3.73385 17.8642 4.4344C19.4911 5.13495 20.9615 6.15383 22.1888 7.43108L24.0049 9.30229L25.821 7.43108C27.0494 6.1544 28.5204 5.13594 30.1477 4.43545C31.7751 3.73496 33.5259 3.36656 35.2975 3.35187C38.1302 3.33154 40.875 4.33468 43.0271 6.17678C44.4207 7.36041 45.5472 8.82644 46.332 10.4779C47.0862 12.0754 47.5163 13.8066 47.5974 15.5714C47.6784 17.3361 47.4088 19.0994 46.8041 20.7593C46.1811 22.4744 45.2017 24.0379 43.9304 25.3469L33.2004 36.427C33.1857 36.2104 33.1786 35.9934 33.1792 35.7763V21.4581L22.0605 23.2341V25.7096H22.5972C23.8995 25.7096 24.7406 25.9418 25.0971 26.3989C25.5226 27.1297 25.7102 27.9748 25.6338 28.817V35.777C25.7057 36.6138 25.5225 37.4528 25.1081 38.1833C24.7603 38.6476 23.9152 38.8837 22.5972 38.8837H22.0605V41.3584H28.4241L26.0894 43.7694C25.8197 44.0519 25.4955 44.2768 25.1364 44.4305C24.7773 44.5841 24.3908 44.6633 24.0002 44.6633ZM29.0567 10.7612C28.1201 10.7612 27.2046 11.0389 26.4258 11.5592C25.6471 12.0796 25.0401 12.8192 24.6817 13.6845C24.3233 14.5498 24.2295 15.5019 24.4122 16.4205C24.5949 17.3391 25.046 18.1829 25.7082 18.8451C26.3705 19.5074 27.2143 19.9584 28.1329 20.1411C29.0515 20.3239 30.0036 20.2301 30.8689 19.8717C31.7342 19.5132 32.4738 18.9063 32.9941 18.1275C33.5145 17.3488 33.7922 16.4332 33.7922 15.4967C33.7907 14.2412 33.2913 13.0375 32.4036 12.1498C31.5158 11.262 30.3122 10.7626 29.0567 10.7612Z" fill="#B11030"/>
        <path d="M23.586 38.8255L8.55257 28.3308C6.94737 27.1909 5.72542 25.5911 5.04789 23.7426C4.37036 21.894 4.26909 19.8835 4.75742 17.9762C5.09015 16.6799 5.69414 15.469 6.52949 14.4234C7.36354 13.3873 8.42151 12.5535 9.62396 11.9848C10.8264 11.4161 12.1421 11.1272 13.4722 11.1398C15.4778 11.1416 17.4339 11.7626 19.0732 12.9181L20.6399 14.0095L21.6849 12.4137C22.5668 11.059 23.7671 9.94107 25.181 9.1576C26.5432 8.40086 28.0742 8.00003 29.6324 7.99222C31.1201 7.98799 32.583 8.37263 33.8761 9.10803C35.0425 9.76429 36.0563 10.6606 36.8505 11.7378C38.0179 13.3238 38.6767 15.2266 38.74 17.1949C38.8032 19.1632 38.2678 21.1044 37.2046 22.7621L33.1734 28.9501V21.4543L22.0547 23.2303V25.7058H22.5914C23.8937 25.7058 24.7349 25.9379 25.0913 26.3951C25.5169 27.1259 25.7044 27.971 25.628 28.8132V35.7693C25.7 36.6061 25.5167 37.445 25.1023 38.1756C24.7007 38.5813 24.156 38.8132 23.5852 38.8216L23.586 38.8255ZM29.0517 10.7573C28.1151 10.7573 27.1996 11.0351 26.4208 11.5554C25.6421 12.0757 25.0351 12.8153 24.6767 13.6806C24.3183 14.5459 24.2245 15.4981 24.4072 16.4167C24.5899 17.3352 25.041 18.179 25.7032 18.8413C26.3655 19.5036 27.2093 19.9546 28.1279 20.1373C29.0465 20.32 29.9986 20.2262 30.8639 19.8678C31.7292 19.5094 32.4688 18.9024 32.9891 18.1237C33.5095 17.345 33.7872 16.4294 33.7872 15.4928C33.7857 14.2373 33.2863 13.0337 32.3986 12.1459C31.5108 11.2582 30.3072 10.7588 29.0517 10.7573Z" fill="#D0304D"/>
        </svg>

        <Link to={`/?tmbw-city=${props.offer.city}`} className="tmbw-offer-sponsor-note">
          <div className="tmbw-offer-sponsor-note-title">Offizieller Inhalt von</div>
          <div className="tmbw-offer-sponsor-name">Stadt {props.offer.city}</div>
        </Link>
      </div>
    </div>
  )
}
