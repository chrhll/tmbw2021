import OverviewResult from './components/OverviewResult';

import './style.css';

import offers from '../../../../helpers/offers';

export default function OverviewResults(props) {
  let selectedOffers = [];
  offers.forEach((o, i) => {
    const noCityMatch = props.selectedCity && props.selectedCity !== o.city
    const noPriceMatch = false // TODO
    const noTypeMatch = false // TODO
    const noPeopleMatch = props.selectedPeople && !o.people.includes(props.selectedPeople)

    const disqualified = noCityMatch || noPriceMatch || noTypeMatch || noPeopleMatch

    if (!disqualified) selectedOffers.push(o)
  })

  return (
    <div className="tmbw-overview-results">
      <div className="tmbw-overview-results-inner">

        {selectedOffers.map(o => <OverviewResult key={o.id} offer={o} />)}
      </div>
    </div>
  )
}
