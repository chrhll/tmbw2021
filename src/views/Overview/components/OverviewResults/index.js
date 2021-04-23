import OverviewResult from './components/OverviewResult';

import './style.css';

const offers = [{
  city: 'Heilbronn',
  price: [],
  type: 'Familienaktivität',
  people: ['Einzeln', 'Zu zweit', 'Gruppe', 'Familie'],
  title: 'Experimenta mit Genuss',
  intro: 'Erlebe ein Genuss-Wochenende in Heilbronn mit einem Besuch im Science-Center  experimenta.',
  description: 'Erlebe ein genüssliches Wochenende in Heilbronn in Verbindung mit einem spannenden Besuch in der experimenta, Deutschlands größtem Science-Center.',
  more: '',
  link: 'https://www.heilbronn.de/tourismus/reise-und-erlebnisangebote/experimenta-mit-genuss.html?pk_campaign=themenkampagne_tmbw&pk_kwd=exp_mit_genuss',
  price: ['Ab 239 Euro pro Person im Doppelzimmer', 'Ab 339 Euro pro Person im Einzelzimmer'],
  pictures: [],
}, {
  city: 'Ulm',
  price: [],
  type: 'Übernachtung',
  people: ['Einzeln', 'Zu zweit'],
  title: 'Ulmer Impressionen',
  intro: 'Die ganze Palette Ulm – zwei Nächte, vier Gänge und unzählige Erlebnisse.',
  description: 'Lerne Ulm mit allen Sinnen kennen! Du übernachtest zwei Mal zentral im Akzent Hotel Roter Löwe, genießt ein regionales 4-Gang Menü und erlebst die wichtigsten Sehenswürdigkeiten dank der UlmCard gratis. Damit und uns nicht vergisst gibt´s sogar ein paar kleine Souvenirs. Wir können es kaum erwarten bis du uns besuchst.',
  more: '',
  link: 'https://www.hotel-roter-loewe.de/preise---pauschalen.html',
  price: ['149 EUR pro Person '],
  pictures: [],
}, {
  city: 'Freiburg',
  price: [],
  type: 'Stadtführung',
  people: ['Gruppe', 'Familie', 'Schüler/Studenten'],
  title: 'Freiburg Pur für Gruppen',
  intro: 'Entspannung und Entschleunigung, Angebot für Gruppen',
  description: 'Nach einem gemütlichen Frühstück steht heute Freiburg auf Ihrem Tagesprogramm. Nach einem gemeinsamen Spaziergang über den bunten Münstermarkt geht es mit der Schlossbergbahn hinauf zum Schlossberg. Oben angekommen werden Sie mit fantastischen Aussichten auf die Stadt und das Rheintal, den Spuren einer bewegten Geschichte und einer ausgezeichneten Gastronomie zum Wandern, Entdecken und Verweilen belohnt. Zurück in der Freiburger Altstadt geht es durch die malerische Fischerau und Gerberau zur Stadtmitte. Dort haben Sie nun die Wahl, denn stehen 5 ausgezeichnete Museum* zur Auswahl. Tauchen Sie ein in die Kunst, Kultur und Geschichte der Freiburger Museen. Eine kulinarische Stadtführung mit allerlei regionale Kostproben unterwegs Sowie ein Abendessen mit regionalen Spezialitäten am Freiburger Münsterplatz krönt Ihren Tag.',
  more: '',
  link: 'https://www.heilbronn.de/tourismus/reise-und-erlebnisangebote/experimenta-mit-genuss.html?pk_campaign=themenkampagne_tmbw&pk_kwd=exp_mit_genuss',
  price: ['15-30 Personen, 4,5- 7 Stunden, Kosten pro Person: 89,00 €'],
  pictures: [],
}]

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

        {selectedOffers.map((o, i) => <OverviewResult key={i} offer={o} />)}
      </div>
    </div>
  )
}
