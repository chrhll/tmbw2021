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
  { value: '0-10€', label: '0-10€' },
  { value: '10-50€', label: '10-50€' },
  { value: '50-100€', label: '50-100€' },
  { value: '>100€', label: '>100€' }
]

const offerOptions = [
  { value: 'Stadtführung', label: 'Stadtführung' },
  { value: 'Kultur', label: 'Kultur' },
  { value: 'Übernachtung', label: 'Übernachtung' },
  { value: 'Wein', label: 'Wein' },
  { value: 'Tageserlebnis', label: 'Tageserlebnis' },
  { value: 'Kulinarik', label: 'Kulinarik' }
]

const peopleOptions = [
  { value: 'Einzeln', label: 'Einzeln' },
  { value: 'Zu zweit', label: 'Zu zweit' },
  { value: 'Gruppe', label: 'Gruppe' },
  { value: 'Familie', label: 'Familie' }
]

export default function OverviewFilters(props) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? '#FFEDB3' : 'white'
    })
  }

  return (
    <div className="tmbw-overview-filters">
      <div className="tmbw-overview-filters-inner">
        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Stadt
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select
              isSearchable
              isClearable
              value={props.city ? { value: props.city, label: props.city } : ''}
              styles={customStyles}
              options={cityOptions}
              onChange={e => props.selectCity((e || {}).value)}
              placeholder="z.B. Heilbronn"
              classNamePrefix="tmbw-select"
              />
          </div>
        </div>

        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Preis
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select
              isSearchable
              isClearable
              value={props.price ? { value: props.price, label: props.price } : ''}
              styles={customStyles}
              options={pricingOptions}
              onChange={e => props.selectPrice((e || {}).value)}
              placeholder="z.B. 0-10€"
              classNamePrefix="tmbw-select"
              />
          </div>
        </div>

        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Angebot
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select
              isSearchable
              isClearable
              value={props.offer ? { value: props.offer, label: props.offer } : ''}
              styles={customStyles}
              options={offerOptions}
              onChange={e => props.selectOffer((e || {}).value)}
              placeholder="z.B. Stadtführung"
              classNamePrefix="tmbw-select"
              />
          </div>
        </div>

        <div className="tmbw-overview-filter">
          <div className="tmbw-overview-filter-label">
            Anzahl Personen
          </div>
          <div className="tmbw-overview-filter-drodown">
            <Select
              isSearchable
              isClearable
              value={props.people ? { value: props.people, label: props.people } : ''}
              styles={customStyles}
              options={peopleOptions}
              onChange={e => props.selectPeople((e || {}).value)}
              placeholder="z.B. zu zweit"
              classNamePrefix="tmbw-select"
              />
          </div>
        </div>
      </div>
    </div>
  )
}
