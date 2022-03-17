const request = require('request');
const input = process.argv.slice(2);
const qInput = input[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${qInput}`,(error,response,body)=> {
  if (body === undefined) {
    return  console.log("oh noo!");
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    return console.log("breed don't exist");
  }
  console.log(data[0].description);
});