import './style.css';

export default function OverviewResults(props) {
  let backgroundUrl;
  if (props.offer.pictures.length) backgroundUrl = props.offer.pictures[0]

  return (
    <a
      href={`/angebot/${props.offer.id}`}
      className="tmbw-overview-result"
      target="_blank" rel="noreferrer"
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
          {props.offer.intro}
        </div>
      </div>
    </a>
  )
}
