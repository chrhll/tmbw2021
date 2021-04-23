import OverviewHero from './components/OverviewHero';

import './style.css';

export default function Overview(props) {
  return (
    <div className="tmbw-overview">
      <OverviewHero props={props} />

      <div className="tmbw-overview-filters">
      </div>

      <div className="tmbw-overview-results">
      </div>

      <div className="tmbw-overview-banner">
      </div>

      <div className="tmbw-overview-more-results">
      </div>
    </div>
  )
}
