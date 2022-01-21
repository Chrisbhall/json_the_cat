const request = require('request');
const args = process.argv.slice(2);
request("https://api.thecatapiaaaaaaaaaaa.com/v1/breeds/search?q=" + args[0], (error, response, body) => {
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log(typeof body);
  if (body === "[]") {
    console.log("Cat not found!!");
  } else if (error) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
    //console.log(typeof data);
  }
});

