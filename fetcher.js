const request = require('request');
const fs = require('fs'); //fs is a node core module, so just put fs when requiring 
const { contentType } = require('mime-types');
const args = process.argv.slice(2)
const url = args[0]
const filePath = args[1]


// request('http://example.edu/', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('body:', body); // Print the HTML for the Google homepage.
// }); 

request(url, (err, response, body) => {
  if (err) {
    console.log("error:", err);
  }
  fs.writeFile(`${filePath}`, body, function(err) {
    if (err) {
       console.log("ERROR:", err)
    } else {
    console.log("File Contents:", ` Downloaded and saved ${response.headers["content-length"]} bytes to ${filePath}`)
  }
})
})










