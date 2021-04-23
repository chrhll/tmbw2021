import OverviewResult from './components/OverviewResult';

import './style.css';

export default function OverviewResults(props) {
  return (
    <div className="tmbw-overview-results">
      <div className="tmbw-overview-results-inner">

        <OverviewResult />
        <OverviewResult />
        <OverviewResult />
        <OverviewResult />
        <OverviewResult />
        <OverviewResult />

      </div>
    </div>
  )
}
