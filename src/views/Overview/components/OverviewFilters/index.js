import './style.css';

import Select from 'react-select'

const cityOptions = [
  { value: 'Heilbronn', label: 'Heilbronn' },
  { value: 'Mannheim', label: 'Mannheim' },
  { value: 'Stuttgart', label: 'Stuttgart' },
  { value: 'Ulm', label: 'Ulm' },
  { value: 'Baden-Baden', label: 'Baden-Baden' },
  { value: 'Freiburg', label: 'Freiburg' },
  { value: 'Heidelberg', label: 'Heidelberg' },
  { value: 'Karlsruhe', label: 'Karlsruhe' },
  { value: 'Pforzheim', label: 'Pforzheim' }
]

const pricingOptions = [
  { value: '0-10', label: '0-10' },
  { value: '10-50', label: '10-50' },
  { value: '50-100', label: '50-100' },
  { value: '>100', label: '>100' }
]

const offerOptions = [
  { value: 'Stadtführung', label: 'Stadtführung' },
  { value: 'Events & Einrichtungen', label: 'Events & Einrichtungen' },
  { value: 'Übernachtungen', label: 'Übernachtungen' },
  { value: 'Wein', label: 'Wein' },
  { value: 'Familienaktivitäten', label: 'Familienaktivitäten' }
]

const peopleOptions = [
  { value: 'Einzeln', label: 'Einzeln' },
  { value: 'Zu zweit', label: 'Zu zweit' },
  { value: 'Gruppe', label: 'Gruppe' },
  { value: 'Familie', label: 'Familie' },
  { value: 'Schüler/Studenten', label: 'Schüler/Studenten' }
]

export default function OverviewFilters(props) {
  return (
    <div className="tmbw-overview-filters">
      <div className="tmbw-overview-filters-inner">
        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Stadt
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select options={cityOptions} />
          </div>
        </div>

        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Preis
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select options={pricingOptions} />
          </div>
        </div>

        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Angebot
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select options={offerOptions} />
          </div>
        </div>

        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Anzahl Personen
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select options={peopleOptions} />
          </div>
        </div>

        <div className="tmbw-overview-filter">
          <a href="/" className="tmbw-surprise-me">Was passt zu mir?</a>
        </div>
      </div>
    </div>
  )
}
