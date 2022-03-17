const fetchBreedDescription = require('./breedFetcher');
const input = process.argv.slice(2);
const qInput = input[0];

fetchBreedDescription(qInput, (error, description) => {
  if (error) {
    console.log('Error fetch details:');
  } else {
    console.log(description);
  }
});