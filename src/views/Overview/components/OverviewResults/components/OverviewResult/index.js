import './style.css';

export default function OverviewResults(props) {
  let backgroundUrl;
  if (props.offer.pictures) {
    if (Array.isArray(props.offer.pictures) && props.offer.pictures.length) {
      backgroundUrl = props.offer.pictures[0]
    } else if (typeof props.offer.pictures === 'string' && props.offer.pictures.length) {
      backgroundUrl = props.offer.pictures
    }
  }

  // const urlParams = new URLSearchParams(window.location.search);

  let returnTo = `${document.location.pathname}${document.location.search}`
  // if (document.location.search && urlParams.get('returnTo')) {
  //   returnTo = urlParams.get('returnTo')
  // }

  let formattedIntro;
  if (props.offer.intro && typeof props.offer.intro === 'string') {
    formattedIntro = props.offer.intro.split('\n').map(e => <p>{e}</p>)
  } else if (props.offer.intro && Array.isArray(props.offer.intro)) {
    formattedIntro = props.offer.intro.map(e => <p>{e}</p>)
  }

  return (
    <a href={`?tmbw-oid=${props.offer.id}&returnTo=${returnTo}`}
      className="tmbw-overview-result"
      >
      <div
        className="tmbw-overview-result-image"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
        />
      <div className="tmbw-overview-result-info">
        <div className="tmbw-overview-result-subline">
          <span className="tmbw-result-type">
            {Array.isArray(props.offer.type) ? props.offer.type[0] : props.offer.type}
          </span> · {props.offer.city}
        </div>

        <div className="tmbw-overview-result-headline">
          {props.offer.title}
        </div>

        <div className="tmbw-overview-result-body">
          {formattedIntro}
        </div>
      </div>
    </a>
  )
}
