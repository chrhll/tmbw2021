const fs = require('fs');
const Papa = require('papaparse');

const file = fs.readFileSync('input.csv').toString()

Papa.parse(file, {
  header: true,
  skipEmptyLines: true,
  complete: function(results, file) {
    let offers = []
    let mostRecentOffer;

    for (let key of Object.keys(results.data)) {
      const line = results.data[key]

      if (line.id !== '' && line.title !== '') {
        offers.push(line)
      } else {
        let updatedOffer = offers.pop()

        for (let attr of Object.keys(line)) {
          if (line[attr] !== '') {
            if (Array.isArray(updatedOffer[attr])) {
              updatedOffer[attr].push(line[attr])
            } else {
              updatedOffer[attr] = [updatedOffer[attr], line[attr]]
            }
          }
        }

        offers.push(updatedOffer)
      }
    }

    fs.writeFileSync('results.json', JSON.stringify(offers))
  }
})
