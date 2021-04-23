export default function OverviewResults(props) {
  return (
    <a
      href={`/angebot/${props.offer.id}`}
      className="tmbw-overview-result"
      target="_blank" rel="noreferrer"
      >
      <div className="tmbw-overview-result-image">
      </div>
      <div className="tmbw-overview-result-info">
        <div className="tmbw-overview-result-subline">
          <span className="tmbw-result-type">{props.offer.type || 'Aktion'}</span> · {props.offer.city}
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
