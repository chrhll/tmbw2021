const offers = [{
  id: 'HN_01',
  city: 'Heilbronn',
  type: 'Familienaktivität',
  people: ['Einzeln', 'Zu zweit', 'Gruppe', 'Familie'],
  title: 'Experimenta mit Genuss',
  intro: 'Erlebe ein Genuss-Wochenende in Heilbronn mit einem Besuch im Science-Center  experimenta.',
  description: 'Erlebe ein genüssliches Wochenende in Heilbronn in Verbindung mit einem spannenden Besuch in der experimenta, Deutschlands größtem Science-Center.',
  amenities: [
    'Zwei Übernachtungen mit Frühstück',
    '3-Gang-Menü im Hotel am Anreisetag',
    '3-Gang-Degustationsmenü in der Wein Villa',
    'Tagesticket für die experimenta'
  ],
  more: '',
  link: 'https://www.heilbronn.de/tourismus/reise-und-erlebnisangebote/experimenta-mit-genuss.html?pk_campaign=themenkampagne_tmbw&pk_kwd=exp_mit_genuss',
  price: ['Ab 239 Euro pro Person im Doppelzimmer', 'Ab 339 Euro pro Person im Einzelzimmer'],
  priceRange: '>100€',
  pictures: [
    '/assets/HN_01/HN_01_1.jpg',
    '/assets/HN_01/HN_01_2.jpg',
    '/assets/HN_01/HN_01_3.jpg',
    '/assets/HN_01/HN_01_4.jpg',
    '/assets/HN_01/HN_01_5.jpg'
  ],
}, {
  id: 'HN_02',
  city: 'Heilbronn',
  type: 'Stadtführung',
  people: ['Einzeln', 'Zu zweit', 'Gruppe', 'Familie'],
  title: 'Erlebe Heilbronn und seine Weine',
  intro: 'Lerne die älteste Weinstadt Württembergs kennen. Urban trifft Natur. Wein und Kultur.',
  description: 'Wein und Heilbronn – eine Symbiose. Nirgendwo sind urbanes Treiben und Natur so nah bei einander. Weinberge bis an den Stadtrand, rund 30 Weingüter im Stadtgebiet und viele Probiermöglichkeiten mitten in der City lassen Sie die Leidenschaft erleben, mit der der Weinbau in Württembergs ältester Weinstadt betrieben wird. Besuchen Sie den Wein Pavillon an der Neckarbühne, lernen Sie den Wein Panorama Weg mit seinen Schaustelen kennen, buchen Sie eine der Weinwanderungen mit Verkostung zwischen den Reben oder gehen Sie im Weingut auf Tauchstation – mit dem Winzer in den Keller.',
  amenities: [
    'Eine Übernachtung mit Frühstück',
    '4er-Weinprobe an der Bar im Restaurant Beichtstuhl',
    '2-Tages-Ticket Gesamtnetz Nahverkehr (HNV)'
  ],
  more: '',
  link: 'https://www.heilbronn.de/tourismus/reise-und-erlebnisangebote/heilbronn-und-seine-weine.html?pk_campaign=themenkampagne_tmbw&pk_kwd=heilbronn_weine',
  price: ['Ab 65 Euro pro Person im Doppelzimmer', 'Ab 85 Euro pro Person im Einzelzimmer'],
  priceRange: '50-100€',
  pictures: [
    '/assets/HN_02/HN_02_1.jpg',
    '/assets/HN_02/HN_02_2.jpg',
    '/assets/HN_02/HN_02_3.jpg',
    '/assets/HN_02/HN_02_4.jpg',
    '/assets/HN_02/HN_02_5.jpg',
    '/assets/HN_02/HN_02_6.jpg'
  ],
}, {
  id: 'HN_03',
  city: 'Heilbronn',
  type: 'Wein',
  people: ['Einzeln', 'Zu zweit', 'Gruppe', 'Familie'],
  title: 'Schlenderweinprobe durch Heilbronn',
  intro: 'Die etwas andere Weinprobe in der City. Geschichte. Geselligkeit. Genießen.',
  description: 'Die etwas andere Weinprobe in der City. Sie schlendern durch die Heilbronner Innenstadt, halten an ausgewählten Hotspots, probieren Heilbronner Weine und lassen sich mit Ihrem Glas in der Hand durch die Stadtgeschichte führen. Klingt gut? Dann schlendern Sie mit uns durch die City',
  amenities: [
    '4 Proben Heilbronner Wein',
    'Dauer ca. 2,5 Std.',
    'Maximal 20 Personen'
  ],
  more: '',
  link: 'https://www.heilbronn.de/tourismus/stadtfuehrungen/wein-und-kulinarik/schlenderweinprobe-durch-die-heilbronner-innenstadt.html?pk_campaign=themenkampagne_tmbw&pk_kwd=schlenderweinprobe',
  price: ['25 Euro pro Person'],
  priceRange: '10-50€',
  pictures: [
    '/assets/HN_03/HN_03_1.jpg',
    '/assets/HN_03/HN_03_2.jpg',
    '/assets/HN_03/HN_03_3.jpg'
  ]
}, {
  id: 'U_01',
  city: 'Ulm',
  type: 'Übernachtung',
  people: ['Einzeln', 'Zu zweit'],
  title: 'Ulmer Impressionen',
  intro: 'Die ganze Palette Ulm – zwei Nächte, vier Gänge und unzählige Erlebnisse.',
  description: 'Lerne Ulm mit allen Sinnen kennen! Du übernachtest zwei Mal zentral im Akzent Hotel Roter Löwe, genießt ein regionales 4-Gang Menü und erlebst die wichtigsten Sehenswürdigkeiten dank der UlmCard gratis. Damit und uns nicht vergisst gibt´s sogar ein paar kleine Souvenirs. Wir können es kaum erwarten bis du uns besuchst.',
  more: '',
  link: 'https://www.hotel-roter-loewe.de/preise---pauschalen.html',
  price: ['149 EUR pro Person '],
  priceRange: '>100€',
  pictures: []
}, {
  id: 'F_01',
  city: 'Freiburg',
  type: 'Stadtführung',
  people: ['Gruppe', 'Familie', 'Schüler/Studenten'],
  title: 'Freiburg Pur für Gruppen',
  intro: 'Entspannung und Entschleunigung, Angebot für Gruppen',
  description: 'Nach einem gemütlichen Frühstück steht heute Freiburg auf Ihrem Tagesprogramm. Nach einem gemeinsamen Spaziergang über den bunten Münstermarkt geht es mit der Schlossbergbahn hinauf zum Schlossberg. Oben angekommen werden Sie mit fantastischen Aussichten auf die Stadt und das Rheintal, den Spuren einer bewegten Geschichte und einer ausgezeichneten Gastronomie zum Wandern, Entdecken und Verweilen belohnt. Zurück in der Freiburger Altstadt geht es durch die malerische Fischerau und Gerberau zur Stadtmitte. Dort haben Sie nun die Wahl, denn stehen 5 ausgezeichnete Museum* zur Auswahl. Tauchen Sie ein in die Kunst, Kultur und Geschichte der Freiburger Museen. Eine kulinarische Stadtführung mit allerlei regionale Kostproben unterwegs Sowie ein Abendessen mit regionalen Spezialitäten am Freiburger Münsterplatz krönt Ihren Tag.',
  more: '',
  link: 'https://www.heilbronn.de/tourismus/reise-und-erlebnisangebote/experimenta-mit-genuss.html?pk_campaign=themenkampagne_tmbw&pk_kwd=exp_mit_genuss',
  price: ['15-30 Personen, 4,5- 7 Stunden, Kosten pro Person: 89,00 €'],
  priceRange: '50-100€',
  pictures: [],
}]

export default offers;
