import OverviewHero from './components/OverviewHero';
import OverviewFilters from './components/OverviewFilters';
import OverviewResults from './components/OverviewResults';

import './style.css';

export default function Overview(props) {
  return (
    <div className="tmbw-overview">
      <OverviewHero props={props} />
      <OverviewFilters props={props} />
      <OverviewResults props={props} />

      <div className="tmbw-overview-results">
      </div>

      <div className="tmbw-overview-banner">
      </div>

      <div className="tmbw-overview-more-results">
      </div>
    </div>
  )
}
