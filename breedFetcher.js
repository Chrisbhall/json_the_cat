const request = require('request');
const fetchBreedDescription = function(breed, des) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
    if (body === "[]") {
      console.log("Cat not found!!");
    } else if (error) {
      console.log('error:', error); // Print the error if one occurred
    } else {
      const data = JSON.parse(body);
      des(error,data[0]["description"]);
      //console.log(data[0]["description"]);
    }
  });
};

module.exports = { fetchBreedDescription };